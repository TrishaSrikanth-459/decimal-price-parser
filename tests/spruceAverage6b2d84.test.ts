import assert from "node:assert/strict";
import test from "node:test";
import { spruceAverage6b2d84 } from "../src/spruceAverage6b2d84.js";

test("returns the mean price", () => {
  assert.equal(spruceAverage6b2d84([12, 18, 30]), 20);
});

test("returns the only supplied price", () => {
  assert.equal(spruceAverage6b2d84([18]), 18);
});