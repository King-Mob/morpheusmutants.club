export default function DateTime({ dateTime }) {
  const DOTS_BEFORE_T = 2;
  let dotCount = 0;

  const dateTimeISOFormat = dateTime
    .split("")
    .map((char, index) => {
      if (char === ".") {
        dotCount++;
        if (dotCount <= DOTS_BEFORE_T) return "-";
        else return "T";
      }
      if (index === 12) return char + ":";
      else return char;
    })
    .join("");

  const dateTimeDisplay = new Date(dateTimeISOFormat);

  return (
    <p className="datetime">
      {dateTimeDisplay.toLocaleDateString("en-GB")}{" "}
      {dateTimeDisplay.toLocaleTimeString("en-GB").slice(0, 5)}
    </p>
  );
}
