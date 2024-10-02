#!/bin/sh

# create .git/hooks/pre-commit
# @see https://github.com/evilmartians/lefthook/blob/master/docs/usage.md#lefthook-install
pnpm lefthook install

if ! type gitleaks 2>/dev/null ; then
  echo "Install gitleaks..."
  brew install gitleaks
  echo "Install gitleaks done !"
fi
