import split from "./split";

test("an array is not passed as first argument", () => {
  expect(split("abcd", 2)).toEqual("abcd");
});

test("number of split is not a number", () => {
  expect(split(["a", "b", "c", "d"], "i")).toEqual(["a", "b", "c", "d"]);
});

test("number of split is not a positive number", () => {
  expect(split(["a", "b", "c", "d"], -2)).toEqual(["a", "b", "c", "d"]);
});

test("does not split it with one", () => {
  expect(split(["a", "b", "c", "d"], 1)).toEqual(["a", "b", "c", "d"]);
});

test("does not split the array if exceeds number of items", () => {
  expect(split(["a", "b", "c", "d"], 5)).toEqual(["a", "b", "c", "d"]);
});

test("splits into two of two", () => {
  expect(split(["a", "b", "c", "d"], 2)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("splits into two, one of two and another of three", () => {
  expect(split(["a", "b", "c", "d", "e"], 2)).toEqual([
    ["a", "b"],
    ["c", "d", "e"],
  ]);
});

test("splits into three, two of five and another of seven", () => {
  expect(split(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"], 3)).toEqual([
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i", "j"],
    ["k", "l", "m", "n", "o", "p", "q"],
  ]);
});
