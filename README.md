# ts-react-vite-vitest-remote-development-template

## Features

| Name                  | Version         |
| --------------------- | --------------- |
| VSCode                | latest          |
| Rancher Desktop       | latest          |
| proto                 | latest          |
| Node.js               | see .prototools |
| pnpm                  | see .prototools |
| TypeScript            | latest          |
| React                 | v18             |
| Vite                  | v5              |
| React Router          | v6              |
| Biome                 | latest          |
| Prettier              | latest          |
| Vitest                | latest          |
| React Testing Library | latest          |

## Setup

### Hombrew

Install [homebrew](https://brew.sh/) .

#### Install Hombrew Packages

```sh
brew install --cask \
  visual-studio-code \
  rancher
```

### proto

#### Install proto

```sh
brew tap moonrepo/proto https://github.com/moonrepo/proto
brew install proto
proto setup
```

#### Install project dependencies

```sh
proto install
```

## TIPS

### Migrate ESLint to Biome

```shell
pnpm dlx biome migrate eslint --write --include-inspired
pnpm dlx biome migrate prettier --write
```
