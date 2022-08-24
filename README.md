# ts-react-vite-vitest-remote-development-template

## Features

| Name                  | Version |
| --------------------- | ------- |
| Docker Desktop        | latest  |
| VSCode                | latest  |
| TypeScript            | latest  |
| Node.js               | v16 LTS |
| React                 | v18     |
| Vite                  | v3      |
| SCSS                  | latest  |
| ESLint                | latest  |
| Prettier              | latest  |
| Vitest                | latest  |
| React Testing Library | latest  |

## Requirements

- Docker Desktop
- Visual Studio Code

## Setup

### Install Hombrew

Install [homebrew](https://brew.sh/) .

### Install Hombrew Packages

```sh
brew install --cask \
  visual-studio-code \
  docker
```

### Create .huskyrc

```sh
cat << EOT > ~/.huskyrc
test -f ~/.bash_profile && source ~/.bash_profile
test -f ~/.bashrc && source ~/.bashrc
test -f ~/.zprofile && source ~/.zprofile
test -f ~/.zshrc && source ~/.zshrc
EOT
```

## Usage

https://user-images.githubusercontent.com/12574048/172644178-72c48ca8-52f7-4f49-957e-ab966a82f14d.mp4
