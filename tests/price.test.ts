import assert from "node:assert/strict";
import test from "node:test";

import { parsePrice } from "../src/price.js";

test("parses decimal prices", () => {
  assert.equal(parsePrice("$18.75"), 18.75);
});

test("parses comma-separated prices", () => {
  assert.equal(parsePrice("$1,299.50"), 1299.5);
});

test("ignores surrounding whitespace", () => {
  assert.equal(parsePrice("  42.25  "), 42.25);
});

test("rejects input without a number", () => {
  assert.throws(() => parsePrice("not a price"), TypeError);
});
