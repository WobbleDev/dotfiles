#!/bin/sh
#
# ~/.xinitrc
#
# Executed by startx (run your window manager from here)

if [ -d /etc/X11/xinit/xinitrc.d ]; then
  for f in /etc/X11/xinit/xinitrc.d/*; do
    [ -x "$f" ] && . "$f"
  done
  unset f
fi

#dropbox start &
thunar --daemon &
/usr/bin/xscreensaver -no-splash &

#Wallpapers
#while true;
#    do
#        awsetbg -r ~/Pictures/Wallpapers
#        sleep 15m
#    done &

exec awesome 
