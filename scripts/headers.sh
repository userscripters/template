#!/bin/bash

dist="dist"
output=$dist"/headers.js"

generate tampermonkey \
    -o $output \
    -m $(cat .matches)

userscript="$(find -iwholename "./$dist/*" -type f | grep -e "*\.js")"

sed -i -e "{1e cat $output; echo; echo" -e "; N}" $userscript
