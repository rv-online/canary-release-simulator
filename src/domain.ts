
export interface RecordItem {
  [key: string]: string | number | boolean;
}

export class CanaryReleaseSimulator {
  constructor(private readonly items: RecordItem[]) {}

  list(): RecordItem[] {
    return [...this.items];
  }

  score(item: RecordItem): number {
    let score = 0;
    for (const value of Object.values(item)) {
      if (typeof value === "number") score += value;
      if (typeof value === "boolean") score += value ? 0 : 20;
    }
    return score;
  }

  priorities(): Array<RecordItem & { priority: "low" | "medium" | "high" }> {
    return this.items.map((item) => {
      const score = this.score(item);
      const priority = score >= 100 ? "high" : score >= 20 ? "medium" : "low";
      return { ...item, priority };
    });
  }
}

export const seedData: RecordItem[] = [
  {
    "cohort": "stable",
    "errorRate": 0.01,
    "latencyMs": 120,
    "healthy": true
  },
  {
    "cohort": "canary",
    "errorRate": 0.09,
    "latencyMs": 340,
    "healthy": false
  },
  {
    "cohort": "stable",
    "errorRate": 0.02,
    "latencyMs": 130,
    "healthy": true
  }
];
