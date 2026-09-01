import assert from "node:assert/strict";
import test from "node:test";
import { cedarAverage4d7e26 } from "../src/cedarAverage4d7e26.js";

test("returns the mean price", () => {
  assert.equal(cedarAverage4d7e26([12, 18, 30]), 20);
});

test("returns the only supplied price", () => {
  assert.equal(cedarAverage4d7e26([18]), 18);
});