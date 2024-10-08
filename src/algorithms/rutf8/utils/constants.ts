export const russianToAsciiDict: [string, string][] = [
  ["А", "A"],
  ["Б", "B"],
  ["В", "C"],
  ["Г", "D"],
  ["Д", "E"],
  ["Е", "F"],
  ["Ё", "G"],
  ["Ж", "H"],
  ["З", "I"],
  ["И", "J"],
  ["Й", "K"],
  ["К", "L"],
  ["Л", "M"],
  ["М", "N"],
  ["Н", "O"],
  ["О", "P"],
  ["П", "Q"],
  ["Р", "R"],
  ["С", "S"],
  ["Т", "T"],
  ["У", "U"],
  ["Ф", "V"],
  ["Х", "W"],
  ["Ц", "X"],
  ["Ч", "Y"],
  ["Ш", "Z"],
  ["Щ", "\u000C"],
  ["Ь", "\u000D"],
  ["Ы", "\u000E"],
  ["Ъ", "\u000F"],
  ["Э", "\u0010"],
  ["Ю", "\u0011"],
  ["Я", "\u0012"],
  ["а", "a"],
  ["б", "b"],
  ["в", "c"],
  ["г", "d"],
  ["д", "e"],
  ["е", "f"],
  ["ё", "g"],
  ["ж", "h"],
  ["з", "i"],
  ["и", "j"],
  ["й", "k"],
  ["к", "l"],
  ["л", "m"],
  ["м", "n"],
  ["н", "o"],
  ["о", "p"],
  ["п", "q"],
  ["р", "r"],
  ["с", "s"],
  ["т", "t"],
  ["у", "u"],
  ["ф", "v"],
  ["х", "w"],
  ["ц", "x"],
  ["ч", "y"],
  ["ш", "z"],
  ["щ", "\u0013"],
  ["ь", "\u0014"],
  ["ы", "\u0015"],
  ["ъ", "\u0016"],
  ["э", "\u0017"],
  ["ю", "\u0018"],
  ["я", "\u0019"],
];

export const russianToAsciiMap = new Map(russianToAsciiDict);

export const asciiToRussianMap = new Map(
  russianToAsciiDict.map(([russianChar, asciiChar]) => [asciiChar, russianChar])
);
