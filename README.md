# vite-ts-react-hook-form-valibot-example

## Features

- VSCode
- TypeScript
- React
- Vite
- MUI
- React Router
- React Hook Form
- Valibot
- ESLint
- Prettier
- Vitest

## Requirements

- Rancher Desktop
- Visual Studio Code

## Setup

### Install Hombrew

Install [homebrew](https://brew.sh/) .

### Install Hombrew Packages

```sh
brew install --cask \
  visual-studio-code \
  rancher \
  fnm
```

### fnm

#### Setup --use-on-cd

```sh
brew install fnm

test $(cat ~/.zshrc | grep 'eval "$(fnm env --use-on-cd)"' | wc -l | xargs) -eq 0 && echo 'eval "$(fnm env --use-on-cd)"' >> ~/.zshrc
```

### Install Node.js

```sh
# The version described in .node-version is installed
fnm install
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

```shel
npm run dev
```
