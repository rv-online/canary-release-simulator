
import assert from "node:assert/strict";
import test from "node:test";
import { CanaryReleaseSimulator, seedData } from "../src/domain.js";

test("lists seeded samples", () => {
  const engine = new CanaryReleaseSimulator(seedData);
  assert.equal(engine.list().length, 3);
});

test("computes samples priorities", () => {
  const engine = new CanaryReleaseSimulator(seedData);
  const priorities = engine.priorities();
  assert.equal(priorities.length, 3);
  assert.ok(priorities.some((item) => item.priority === "medium" || item.priority === "high"));
});
