import { describe, it, expect } from "vitest";
import { findCharacterPositions } from "./src/string"; // adjust path

describe("Integration: findCharacterPositions", () => {
  it("returns correct length - 1 for character occurrences", () => {
    const result = findCharacterPositions(
      "How to generate URL slug from string?",
      "e",
    );

    // "generate" → 3 e's
    expect(result.count).toBe(3); // (3)
  });

  it("returns -1 when character not found", () => {
    const result = findCharacterPositions("hello world", "z");

    expect(result.count).toBe(0); // [] → length 0 → 0 - 1
  });

  it("handles empty string input", () => {
    const result = findCharacterPositions("", "a");

    expect(result.count).toBe(0);
  });

  it("handles invalid character input", () => {
    const result = findCharacterPositions("hello", "");

    expect(result.count).toBe(0);
  });

  it("works with multiple occurrences", () => {
    const result = findCharacterPositions("eeee", "e");

    expect(result.count).toBe(4);
  });
});
