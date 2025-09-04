#!/bin/sh
bun ncu -u
rm -rf \
  ./package-lock.json \
  ./pnpm-lock.yaml \
  ./bun.lock \
  ./bun.lockb \
  ./node_modules && \
  bun i
