
import { CanaryReleaseSimulator, seedData } from "./domain.js";

const engine = new CanaryReleaseSimulator(seedData);
console.log(JSON.stringify(engine.priorities(), null, 2));
