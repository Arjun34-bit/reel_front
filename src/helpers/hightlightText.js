export const hightlightText = (text, search) => {
  if (!search) {
    return text;
  }

  const lowerSearch = search.toLowerCase();

  return (
    <>
      {text.split("").map((char, index) =>
        lowerSearch.includes(char.toLowerCase()) ? (
          <span key={index} className="bg-yellow-500">
            {char}
          </span>
        ) : (
          char
        )
      )}
    </>
  );
};
