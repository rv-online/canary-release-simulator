# Canary Release Simulator

TypeScript rollout simulator for staged deployments, health checks, and progressive traffic shifting.

## Why This Exists

Represents the kind of release-management control plane used to reduce blast radius during production deploys.

## What This Demonstrates

- traffic-shift modeling and rollback-friendly state transitions
- deployment-health reasoning rather than static config parsing
- tests around release safety and promotion decisions

## Architecture

1. release plans are modeled as traffic stages with health gates
1. state transitions promote, hold, or rollback based on simulated signals
1. outputs summarize release posture for operators

## Run It

```bash
npm test
npm run build
```

## Verification

Run `npm test` and `npm run build` before publishing changes.
