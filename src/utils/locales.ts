import langCodes from "../assets/lang-codes";

function camelCaseToSnakeCase(input: string, splitter: string): string {
  let result = "";
  let inUppercaseWord = false;

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);

    if (char.toLowerCase() === char) {
      result += char;
      inUppercaseWord = false;
    } else {
      result +=
        inUppercaseWord || i === 0 || result.charAt(i - 1) === splitter
          ? char.toLocaleLowerCase()
          : `_${char.toLocaleLowerCase()}`;
      inUppercaseWord = true;
    }
  }

  return result;
}

export function parseCode(input: string, splitter: string): string {
  return camelCaseToSnakeCase(input, splitter)
    .split(splitter)
    .join("_")
    .toLowerCase();
}

export function codeToLanguage(code: string, simplified = true): string {
  return simplified ? langCodes[code].replace(/\s(.*)/, "") : langCodes[code];
}

export function simplifyLocaleCode(code: string): string {
  const index = code.indexOf("_");

  return index >= 0 ? code.substring(0, index) : code;
}

export function codeToLowerCaseLanguage(
  code: string,
  simplified = true
): string {
  const language = codeToLanguage(code, simplified);

  return language ? language.toLowerCase() : language;
}

export function removeSpaces(text: string): string {
  return text.replace(/[\n\r\s\t_]+/g, "");
}
