" Language: Templum PHP Template system
" Maintainer: Oleg Gordienko <admin@gordio.pp.ua>
" Last Change: 2013-02-04

if version < 600
  syntax clear
elseif exists("b:current_syntax")
  finish
endif

"if version < 600
	"syn include @phpTop <sfile>:p:h/php.vim
"else
	"syn include @phpTop syntax/php.vim
"endif

if version < 600
  so <sfile>:p:h/html.vim
  so <sfile>:p:h/html5.vim
else
  runtime! syntax/html.vim
  runtime! syntax/html5.vim
  unlet b:current_syntax
endif

if !exists("main_syntax")
  let main_syntax = 'html'
endif


syntax case match

" Static
syn keyword	tSpecial containedin=tBlockBlock,tBlockCode,tLineCode contained block endblock if endif for endfor foreach endforeach

" Echo block
syn match	tVar containedin=tBlockVar contained skipwhite /\$[a-zA-Z_][a-zA-Z0-9\['"\]_]*/
syn region	tBlockVar start="{{" end="}}" display

" Blocks
syn match	tBlock containedin=tBlockBlock contained skipwhite /[a-zA-Z_][a-zA-Z0-9_]*/
syn region	tBlockBlock start="\[:" end=":\]" display

" Code
syn region	tBlockCode start="\[\[" end="\]\]"
syn region	tLineCode start="^\s*@" end="$"


hi link tSpecial Statement
hi link tVar Preproc
hi link tBlock Preproc

hi link tBlockBlock Constant
hi link tBlockVar String
hi link tBlockCode PreCondit
hi link tLineCode tBlockCode

let b:current_syntax = "templum"
