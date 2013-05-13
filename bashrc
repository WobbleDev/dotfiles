#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

#Aliases
alias ls='ls --color=auto'
alias pdrop='cd ~/Dropbox/Programming/WebDevelopment'
alias zero='cd ~/Dropbox/ZeroDay'
alias .='cd ..'
alias ..='cd ../..'
alias ...='cd ../../..'
alias l='ls'

PS1='[\u@\h \W]\$ '
alsi -u

export PERL_LOCAL_LIB_ROOT="$PERL_LOCAL_LIB_ROOT:/home/alex/perl5";
export PERL_MB_OPT="--install_base /home/alex/perl5";
export PERL_MM_OPT="INSTALL_BASE=/home/alex/perl5";
export PERL5LIB="/home/alex/perl5/lib/perl5:$PERL5LIB";
export PATH="/home/alex/perl5/bin:$PATH";
