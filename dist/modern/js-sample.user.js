// ==UserScript==
// @author           Jane Doe <jane@doe.com>
// @contributors     John Doe <john@doe.com>
// @description      template repository for userscripters' projects
// @grant            none
// @homepage         https://github.com/userscripters/template#readme
// @match            https://*.stackexchange.com/questions/*
// @match            https://askubuntu.com/questions/*
// @match            https://es.meta.stackoverflow.com/questions/*
// @match            https://es.stackoverflow.com/questions/*
// @match            https://ja.meta.stackoverflow.com/questions/*
// @match            https://ja.stackoverflow.com/questions/*
// @match            https://mathoverflow.net/questions/*
// @match            https://meta.askubuntu.com/questions/*
// @match            https://meta.mathoverflow.net/questions/*
// @match            https://meta.serverfault.com/questions/*
// @match            https://meta.stackoverflow.com/questions/*
// @match            https://meta.superuser.com/questions/*
// @match            https://pt.meta.stackoverflow.com/questions/*
// @match            https://pt.stackoverflow.com/questions/*
// @match            https://ru.meta.stackoverflow.com/questions/*
// @match            https://ru.stackoverflow.com/questions/*
// @match            https://serverfault.com/questions/*
// @match            https://stackapps.com/questions/*
// @match            https://stackoverflow.com/questions/*
// @match            https://superuser.com/questions/*
// @name             Template
// @namespace        userscripters
// @run-at           document-start
// @source           git+https://github.com/userscripters/template.git
// @supportURL       https://github.com/userscripters/template/issues
// @version          0.1.0
// ==/UserScript==

"use strict";
window.addEventListener("load", async () => {
    const main = () => Promise.resolve("Hello world!");
    const hello = await main();
    console.log(hello);
}, { once: true });
