// count char occrrences
import { getArrayLength } from "./array";
export function countCharOccurrences(string, char) {
  return string.split(char).length - 1;
}

//How to reverse a string?
export function reverseString(str) {
  if (typeof str !== "string") {
    return "";
  }

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// How to find all positions of a character?
export function findAllPositions(str, char) {
  if (
    typeof str !== "string" ||
    typeof char !== "string" ||
    char.length !== 1
  ) {
    return [];
  }

  const positions = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      positions.push(i);
    }
  }

  return positions;
}
export function isPalindrome(string) {
  let ls = string.toLocaleLowerCase();
  let rev = reverseString(ls);
  if (rev == ls) {
    return true;
  }
  return false;
}

export function hasSubstring(str, substr) {
  if (substr.length === 0) return true;

  for (let i = 0; i <= str.length - substr.length; i++) {
    let found = true;

    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        found = false;
        break;
      }
    }
    if (found) return true;
  }
  return false;
}
export function getStringLength(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}

export function toLowerCaseCustom(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    res += c >= 65 && c <= 90 ? String.fromCharCode(c + 32) : str[i];
  }
  return res;
}

export function toUpperCaseCustom(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    res += c >= 97 && c <= 122 ? String.fromCharCode(c - 32) : str[i];
  }
  return res;
}

export function findCharacterPositions(str, char) {
  const positions = findAllPositions(str, char);
  const count = getArrayLength(positions);

  return {
    positions,
    count,
  };
}
