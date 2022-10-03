# ts-react-vite-vitest-remote-development-template

## Features

| Name                  | Version |
| --------------------- | ------- |
| Docker Desktop        | latest  |
| VSCode                | latest  |
| TypeScript            | latest  |
| fnm                   | latest  |
| Node.js               | v16 LTS |
| React                 | v18     |
| Vite                  | v3      |
| React Router          | v6      |
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

### Install fnm

```sh
brew install fnm

test $(cat ~/.zshrc | grep 'eval "$(fnm env --use-on-cd)"' | wc -l | xargs) -eq 0 && echo 'eval "$(fnm env --use-on-cd)"' >> ~/.zshrc
```

### Install Node.js

```sh
version="$(fnm ls-remote | grep "Gallium" | tail -1 | xargs)"
fnm install ${version}
fnm use ${version}
fnm default ${version}
```

### Create .huskyrc

For GUI applications, set the path in [.huskyrc](https://typicode.github.io/husky/#/?id=command-not-found) because sometimes the path is not set and npm command not found.

```sh
cat << 'EOT' > ~/.huskyrc
if [[ -d '/home/linuxbrew/.linuxbrew' ]]; then
  # Linux/WSL
  HOMEBREW_HOME='/home/linuxbrew/.linuxbrew'
elif [[ -d '/opt/homebrew' ]]; then
  # Apple Silicon Mac
  HOMEBREW_HOME='/opt/homebrew'
else
  # Intel Mac
  HOMEBREW_HOME='/usr/local'
fi
eval "$($HOMEBREW_HOME/bin/brew shellenv)"
eval "$($HOMEBREW_HOME/bin/fnm env)"
EOT
```

## Usage

https://user-images.githubusercontent.com/12574048/172644178-72c48ca8-52f7-4f49-957e-ab966a82f14d.mp4
