export const checkIfFiat = (transactionProperty) => {
  return fiats.some((fiat) => fiat.id === transactionProperty);
};

export const getFiatImage = (fiatId) => {
  const fiat = fiats.find((fiat) => {
    return fiat.id === fiatId;
  });
  if (fiat) {
    return fiat.image;
  }
};

const countryToFlag = (isoCode) => {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
};

export const fiats = [
  { id: "usd", symbol: "USD", name: "US Dollar", image: countryToFlag("US") },
  { id: "eur", symbol: "EUR", name: "Euro", image: countryToFlag("EU") },
  {
    id: "gbp",
    symbol: "GBP",
    name: "British Pound",
    image: countryToFlag("GB"),
  },
  {
    id: "nok",
    symbol: "NOK",
    name: "Norwegian Krone",
    image: countryToFlag("NO"),
  },
  {
    id: "sek",
    symbol: "SEK",
    name: "Swedish Krone",
    image: countryToFlag("SE"),
  },
];
