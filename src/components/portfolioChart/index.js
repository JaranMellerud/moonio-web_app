// React
import React, { useRef, useState, useEffect, useCallback } from "react";
// Chart JS
import Chartjs from "chart.js";
// Styling
import { palette } from "../../styles/theme";
// Material UI
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// Redux
import { connect } from "react-redux";
import { getTimeSeriesPortfolio } from "../../redux/actions/dataActions";
// Proptypes
import PropTypes from "prop-types";
// Components
import {
  ChartBackground,
  ChartContainer,
  StyledButtonGroup,
  InnerChartContainer,
  ChartSkeleton,
} from "./portfolioChartComponents";

const PortfolioChart = (props) => {
  const {
    loadingComponent,
    timeSeriesPortfolio,
    baseCurrency,
    getTimeSeriesPortfolio,
  } = props;
  const portfolioReturnChartRef = useRef();
  const [returnOrValue, setReturnOrValue] = useState("value");
  const [timeFormat, setTimeFormat] = useState("day");

  // Fetching static portfoliodata from server <- database
  useEffect(() => {
    getTimeSeriesPortfolio("PortfolioChart", baseCurrency, timeFormat);
  }, [timeFormat, baseCurrency, getTimeSeriesPortfolio]);

  // Formats the data to fit into the portfolio chart (Chart.js format)
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1],
      };
    });
  };

  const returnValuesFromTimeSeries = (data) => {
    const newArray = data.map((el) => {
      return parseFloat(el[1]);
    });
    return newArray;
  };

  // sets the time format to the button the user pressed. This will render different data on the chart based on the determineTimeFormat function.
  const handleTimeButtonClick = useCallback((e) => {
    setTimeFormat(e.currentTarget.value);
  }, []);

  const handleReturnOrValueButtonClick = useCallback((e) => {
    setReturnOrValue(e.currentTarget.value);
  });

  useEffect(() => {
    if (portfolioReturnChartRef && portfolioReturnChartRef.current) {
      Chartjs.defaults.LineWithLine = Chartjs.defaults.line;
      Chartjs.controllers.LineWithLine = Chartjs.controllers.line.extend({
        draw: function (ease) {
          Chartjs.controllers.line.prototype.draw.call(this, ease);
          if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
            const activePoint = this.chart.tooltip._active[0],
              ctx = this.chart.ctx,
              x = activePoint.tooltipPosition().x,
              topY = this.chart.legend.bottom,
              bottomY = this.chart.chartArea.bottom;

            // draw line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#07C";
            ctx.stroke();
            ctx.restore();
          }
        },
      });
      window.portfolioReturnChartInstance = new Chartjs(
        portfolioReturnChartRef.current,
        {
          type: "LineWithLine",
          data: {
            datasets: [
              {
                data:
                  returnOrValue === "value"
                    ? formatData(timeSeriesPortfolio.values)
                    : formatData(timeSeriesPortfolio.returns),
                pointRadius: 0,
                fill: true,
                borderColor:
                  timeSeriesPortfolio.values[
                    timeSeriesPortfolio.values.length - 1
                  ][1] > timeSeriesPortfolio.values[0][1]
                    ? palette.common.profit
                    : palette.common.loss,
                backgroundColor:
                  timeSeriesPortfolio.values[
                    timeSeriesPortfolio.values.length - 1
                  ][1] > timeSeriesPortfolio.values[0][1]
                    ? "rgba(34,139,34,0.1)"
                    : "rgba(255, 0, 0, 0.1)",
              },
            ],
          },
          options: {
            lineHeightAnnotation: {
              always: true,
              hover: true,
              lineWeight: 1.5,
            },

            animation: {
              duration: 0,
            },
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              display: false,
            },
            tooltips: {
              intersect: false,
              callbacks: {
                label:
                  returnOrValue === "value"
                    ? function (tooltipItem, data) {
                        return (
                          "Value: " +
                          baseCurrency.toUpperCase() +
                          " " +
                          Number(tooltipItem.yLabel)
                            .toFixed(0)
                            .replace(/./g, function (c, i, a) {
                              return i > 0 &&
                                c !== "." &&
                                (a.length - i) % 3 === 0
                                ? "," + c
                                : c;
                            })
                        );
                      }
                    : function (tooltipItem, data) {
                        return (
                          "Return: " +
                          Number(tooltipItem.yLabel)
                            .toFixed(2)
                            .replace(/./g, function (c, i, a) {
                              return i > 0 &&
                                c !== "." &&
                                (a.length - i) % 3 === 0
                                ? "," + c
                                : c;
                            }) +
                          "%"
                        );
                      },
              },
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  distribution: "linear",
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    maxTicksLimit: window.screen.width < 550 ? 2.1 : 10.1,
                    maxRotation: 0,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: true,
                  },
                  ticks: {
                    mirror: window.screen.width < 550 ? true : false,
                    min:
                      returnOrValue === "value"
                        ? Math.round(
                            Math.min(
                              ...returnValuesFromTimeSeries(
                                timeSeriesPortfolio.values
                              )
                            )
                          )
                        : Math.round(
                            Math.min(
                              ...returnValuesFromTimeSeries(
                                timeSeriesPortfolio.returns
                              )
                            )
                          ),
                    max:
                      returnOrValue === "value"
                        ? Math.round(
                            Math.max(
                              ...returnValuesFromTimeSeries(
                                timeSeriesPortfolio.values
                              )
                            )
                          )
                        : Math.round(
                            Math.max(
                              ...returnValuesFromTimeSeries(
                                timeSeriesPortfolio.returns
                              )
                            )
                          ),
                    maxTicksLimit: window.screen.width < 550 ? 1 : 6,
                    display: true,
                    callback: function (value, index, values) {
                      if (parseInt(value) >= 1000) {
                        return returnOrValue === "value"
                          ? value
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          : value
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "%";
                      } else {
                        return returnOrValue === "value"
                          ? baseCurrency + " " + value
                          : value + "%";
                      }
                    },
                  },
                },
              ],
            },
          },
        }
      );
      return () => {
        window.portfolioReturnChartInstance.destroy();
      };
    }
  }, [
    handleTimeButtonClick,
    handleReturnOrValueButtonClick,
    baseCurrency,
    returnOrValue,
    timeSeriesPortfolio,
  ]);

  return (
    <>
      <ChartBackground>
        <ChartContainer>
          <Typography variant="h6">Performance</Typography>
          <div>
            <StyledButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button
                type="button"
                value="day"
                onClick={handleTimeButtonClick}
                disabled={timeFormat === "day" ? true : false}
              >
                1D
              </Button>
              <Button
                type="button"
                value="week"
                disabled={timeFormat === "week" ? true : false}
                onClick={handleTimeButtonClick}
              >
                1W
              </Button>
              <Button
                type="button"
                value="month"
                onClick={handleTimeButtonClick}
                disabled={timeFormat === "month" ? true : false}
              >
                1M
              </Button>
              <Button
                type="button"
                value="year"
                onClick={handleTimeButtonClick}
                disabled={timeFormat === "year" ? true : false}
              >
                1Y
              </Button>
            </StyledButtonGroup>
            <StyledButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button
                type="button"
                value="value"
                disabled={returnOrValue === "value" ? true : false}
                onClick={handleReturnOrValueButtonClick}
                style={{ backgroundColor: "white" }}
              >
                Value
              </Button>
              <Button
                type="button"
                value="return"
                disabled={returnOrValue === "return" ? true : false}
                onClick={handleReturnOrValueButtonClick}
                style={{ backgroundColor: "white" }}
              >
                Return
              </Button>
            </StyledButtonGroup>
          </div>
        </ChartContainer>
        {loadingComponent === "PortfolioChart" ||
        !timeSeriesPortfolio ||
        !timeSeriesPortfolio.values ? (
          <InnerChartContainer id="history-chart-container">
            <ChartSkeleton count={1} />
          </InnerChartContainer>
        ) : (
          <InnerChartContainer id="history-chart-container">
            <canvas
              ref={portfolioReturnChartRef}
              id="portfolio-return-chart-canvas"
            ></canvas>
          </InnerChartContainer>
        )}
      </ChartBackground>
    </>
  );
};

PortfolioChart.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  loadingComponent: PropTypes.string,
  timeSeriesPortfolio: PropTypes.object.isRequired,
  getTimeSeriesPortfolio: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  baseCurrency: state.user.credentials.baseCurrency,
  loadingComponent: state.ui.loading.loadingComponent,
  timeSeriesPortfolio: state.data.timeSeriesPortfolio,
});

const mapActionsToProps = {
  getTimeSeriesPortfolio,
};

export default connect(mapStateToProps, mapActionsToProps)(PortfolioChart);
