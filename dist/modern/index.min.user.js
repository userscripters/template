// ==UserScript==
// @author           Jane Doe <jane@doe.com>
// @contributors     John Doe <john@doe.com>
// @description      template repository for userscripters' projects
// @grant            none
// @homepage         https://github.com/userscripters/template#readme
// @match            https://*.askubuntu.com/*
// @match            https://*.mathoverflow.net/*
// @match            https://*.serverfault.com/*
// @match            https://*.stackapps.com/*
// @match            https://*.stackexchange.com/*
// @match            https://*.stackoverflow.com/*
// @name             template
// @namespace        userscripters
// @run-at           document-start
// @source           git+https://github.com/userscripters/template.git
// @supportURL       https://github.com/userscripters/template/issues
// @version          1.0.0
// ==/UserScript==

"use strict";const main=()=>Promise.resolve("Hello world!");(async()=>{var o=await main();console.log(o)})(),(()=>{var o=document.getElementById("test");o&&Stacks.showModal(o)})(window);