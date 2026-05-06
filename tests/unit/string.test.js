import { expect, it, describe } from "vitest";
import {
  countCharOccurrences,
  reverseString,
  isPalindrome,
  hasSubstring,
  getStringLength,
} from "./src/string.js";

describe("countCharOccurrences", () => {
  it("counts occurrences of a character in a string", () => {
    expect(countCharOccurrences("hello world", "o")).toBe(2);
  });

  it("returns 0 when character is not present", () => {
    expect(countCharOccurrences("hello", "z")).toBe(0);
  });

  it("handles empty string", () => {
    expect(countCharOccurrences("", "a")).toBe(0);
  });

  it("counts multiple occurrences correctly", () => {
    expect(countCharOccurrences("dddd", "d")).toBe(4);
  });

  it("is case sensitive by default", () => {
    expect(countCharOccurrences("DdDd", "d")).toBe(2);
  });

  it("works with special characters", () => {
    expect(countCharOccurrences("a.b.c.d", ".")).toBe(3);
  });

  it("works with numbers as characters", () => {
    expect(countCharOccurrences("11223311", "1")).toBe(4);
  });
});
describe("reverseString", () => {
  it("reverses a normal string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("returns empty string for empty input", () => {
    expect(reverseString("")).toBe("");
  });

  it("handles single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("handles spaces correctly", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  it("handles numbers in string", () => {
    expect(reverseString("12345")).toBe("54321");
  });

  it("handles special characters", () => {
    expect(reverseString("!@#")).toBe("#@!");
  });

  it("is case-sensitive", () => {
    expect(reverseString("AbC")).toBe("CbA");
  });

  it("handles mixed content", () => {
    expect(reverseString("Hi 123!")).toBe("!321 iH");
  });

  it("returns empty string for non-string input", () => {
    expect(reverseString(null)).toBe("");
    expect(reverseString(undefined)).toBe("");
    expect(reverseString(123)).toBe("");
  });
});
describe("isPalindrome", () => {
  it("checks that a string is palindrome", () => {
    expect(isPalindrome("handles")).toBe(false);
  });

  it("checks that a string is palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("checks that a string is palindrome in camelcase", () => {
    expect(isPalindrome("RaCecAr")).toBe(true);
  });

  it("checks that a string is palindrome if its a single string", () => {
    expect(isPalindrome("1")).toBe(true);
  });

  it("checks that a string is palindrome if its a single string", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("checks that a string is palindrome if its a single string and in Uper case", () => {
    expect(isPalindrome("A")).toBe(true);
  });
});
describe("hasSubstring", () => {
  it("substring available in the string", () => {
    expect(hasSubstring("Hello world Hello Daulat", "Hello")).toBe(true);
  });
  it("substring not available in the string", () => {
    expect(hasSubstring("Hello world", "Daulat")).toBe(false);
  });

  it("substring present at the start", () => {
    expect(hasSubstring("Hello world", "Hello")).toBe(true);
  });

  it("substring present at the end", () => {
    expect(hasSubstring("Hello world", "world")).toBe(true);
  });

  it("substring present in the middle", () => {
    expect(hasSubstring("JavaScript is awesome", "Script")).toBe(true);
  });

  it("exact string match", () => {
    expect(hasSubstring("test", "test")).toBe(true);
  });

  it("single character match", () => {
    expect(hasSubstring("abc", "a")).toBe(true);
  });

  it("substring longer than string", () => {
    expect(hasSubstring("hi", "hello")).toBe(false);
  });

  it("empty substring should return true", () => {
    expect(hasSubstring("hello", "")).toBe(true);
  });

  it("both string and substring empty", () => {
    expect(hasSubstring("", "")).toBe(true);
  });

  it("empty string with non-empty substring", () => {
    expect(hasSubstring("", "a")).toBe(false);
  });

  it("case sensitive check should fail", () => {
    expect(hasSubstring("Hello", "hello")).toBe(false);
  });

  it("repeated pattern substring", () => {
    expect(hasSubstring("aaaaa", "aaa")).toBe(true);
  });

  it("substring with special characters", () => {
    expect(hasSubstring("hello@world", "@w")).toBe(true);
  });

  it("numeric substring in string", () => {
    expect(hasSubstring("12345", "234")).toBe(true);
  });
});
describe("getStringLength", () => {
  it("should return correct length for normal string", () => {
    expect(getStringLength("Hello")).toBe(5);
  });

  it("should return 0 for empty string", () => {
    expect(getStringLength("")).toBe(0);
  });

  it("should count spaces as characters", () => {
    expect(getStringLength("Hello World")).toBe(11);
  });

  it("should work with single character", () => {
    expect(getStringLength("A")).toBe(1);
  });

  it("should count special characters", () => {
    expect(getStringLength("!@#")).toBe(3);
  });
});
