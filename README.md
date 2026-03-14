# ts-react-vite-vitest-remote-development-template

## Features

| Name                  | Version        |
| --------------------- | -------------- |
| VSCode                | latest         |
| Rancher Desktop       | latest         |
| mise                  | latest         |
| Node.js               | see .mise.toml |
| bun                   | see .mise.toml |
| TypeScript            | latest         |
| React                 | v19            |
| Vite                  | v8             |
| React Router          | v7             |
| Biome                 | latest         |
| Prettier              | latest         |
| Vitest                | latest         |
| React Testing Library | latest         |

## Setup

### Hombrew

Install [homebrew](https://brew.sh/) .

#### Install Hombrew Packages

```sh
brew install --cask \
  visual-studio-code \
  rancher
```

### mise

#### Install mise

```sh
brew install mise
echo 'eval "$(mise activate zsh)"' >> ~/.zshrc
```

#### Install project dependencies

```sh
mise trust
mise i
```

## TIPS

### Migrate ESLint to Biome

```shell
bunx biome migrate eslint --write --include-inspired
bunx biome migrate prettier --write
```
