import { describe, expect, it } from "vitest";

import { buildBracketFurigana } from "./kana";

describe("buildBracketFurigana", () => {
  it("returns the word when word or reading is empty", () => {
    expect(buildBracketFurigana("", "たべる")).toBe("");
    expect(buildBracketFurigana("食べる", "")).toBe("食べる");
  });

  it("returns the reading for words without kanji", () => {
    expect(buildBracketFurigana("こんにちは", "こんにちは")).toBe("こんにちは");
  });

  it("keeps a katakana reading for katakana words", () => {
    expect(buildBracketFurigana("プール", "プール")).toBe("プール");
  });

  it("converts a katakana reading to hiragana for non-katakana words", () => {
    expect(buildBracketFurigana("食べる", "タベル")).toBe("食[た]べる");
  });

  it("brackets a single kanji with okurigana", () => {
    expect(buildBracketFurigana("食べる", "たべる")).toBe("食[た]べる");
  });

  it("brackets a trailing kanji span", () => {
    expect(buildBracketFurigana("日本", "にほん")).toBe("日本[にほん]");
  });

  it("keeps leading kana outside the brackets", () => {
    expect(buildBracketFurigana("お金", "おかね")).toBe("お金[かね]");
  });

  it("splits readings across kanji spans separated by kana", () => {
    expect(buildBracketFurigana("聞こえる", "きこえる")).toBe("聞[き]こえる");
    expect(buildBracketFurigana("見合わせる", "みあわせる")).toBe("見合[みあ]わせる");
  });

  it("appends leftover reading after a kana-final word", () => {
    // The heuristic aligns kana greedily; an unmatched remainder is
    // appended so no part of the reading is lost.
    expect(buildBracketFurigana("行く", "いくよ")).toBe("行[い]く[よ]");
  });
});
