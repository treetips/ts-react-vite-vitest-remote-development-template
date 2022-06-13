export LANG=ja_JP.UTF-8

alias ll='ls -l --color'

if [[ /usr/bin/exa ]]; then
  alias ls="exa --git --icons"
  alias ll="exa -ahlg --git --icons"
  alias tree='exa -T -a -I "node_modules|.git|.cache|.yarn|build|dist|out|.next" --icons'
fi

eval "$(starship init bash)"
