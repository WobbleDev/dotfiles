" Vim syntax file
" Language:	TASKS
" Maintainer:	Gogdienko Oleg <admin@gordio.pp.ua>
" Last Change:	2012 Jul 20

" Quit when a (custom) syntax file was already loaded
"if exists("b:current_syntax")
  "finish
"endif

syn match	tTitle	"^[^-!\*+].\+$"

syn match	tNew	"^\s*-.\+$"
syn match	tHigh	"^\s*!"
syn match	tCur	"^\s*\*.\+$"
syn match	tDone	"^\s*+.\+$"


syn region	tBlock		start="^[^-!\*+]" end="^$" transparent fold


hi def tTitle term=bold cterm=bold gui=bold

hi def link tNew	String
hi def link tHigh	TODO
hi def link tCur	Identifier
hi def link tDone	Comment
