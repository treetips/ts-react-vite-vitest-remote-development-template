#!/bin/sh
pnpm ncu -u
rm -rf ./package-lock.json ./pnpm-lock.yaml ./node_modules && pnpm i
