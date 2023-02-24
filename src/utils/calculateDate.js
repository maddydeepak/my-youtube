export const calculateDate = (publishedAt) => {
  let dt1 = new Date(publishedAt);
  let dt2 = new Date();
  var time = (dt2.getTime() - dt1.getTime()) / 1000;
  var value = Math.abs(Math.round(time / (3600 * 24)));
  const defaultYear = 365,
    defaultMonth = 30;
  let year, months, days;
  year = value >= defaultYear ? Math.floor(value / defaultYear) : 0;
  value = year ? value - year * defaultYear : value;
  months =
    value >= defaultMonth
      ? Math.floor((value % defaultYear) / defaultMonth)
      : 0;
  value = months ? value - months * defaultMonth : value;
  days = Math.floor(value % defaultYear);
  return (
    (year > 0 ? year + (year > 1 ? " years " : " year ") : "") +
    (months > 0 ? months + (months > 1 ? " months " : " month ") : "") +
    days +
    (days > 1 ? " days Ago" : " day Ago")
  );
};
