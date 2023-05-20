// ==UserScript==
// @name            Template
// @author          Jane Doe <jane@doe.com>
// @contributors    John Doe <john@doe.com>
// @description     template repository for userscripters' projects
// @grant           none
// @homepage        https://github.com/userscripters/template#readme
// @match           https://stackoverflow.com/questions/*
// @match           https://serverfault.com/questions/*
// @match           https://superuser.com/questions/*
// @match           https://*.stackexchange.com/questions/*
// @match           https://askubuntu.com/questions/*
// @match           https://stackapps.com/questions/*
// @match           https://mathoverflow.net/questions/*
// @match           https://pt.stackoverflow.com/questions/*
// @match           https://ja.stackoverflow.com/questions/*
// @match           https://ru.stackoverflow.com/questions/*
// @match           https://es.stackoverflow.com/questions/*
// @match           https://meta.stackoverflow.com/questions/*
// @match           https://meta.serverfault.com/questions/*
// @match           https://meta.superuser.com/questions/*
// @match           https://meta.askubuntu.com/questions/*
// @match           https://meta.mathoverflow.net/questions/*
// @match           https://pt.meta.stackoverflow.com/questions/*
// @match           https://ja.meta.stackoverflow.com/questions/*
// @match           https://ru.meta.stackoverflow.com/questions/*
// @match           https://es.meta.stackoverflow.com/questions/*
// @namespace       userscripters
// @run-at          document-start
// @source          git+https://github.com/userscripters/template.git
// @supportURL      https://github.com/userscripters/template/issues
// @version         0.1.0
// ==/UserScript==

"use strict";var __awaiter=this&&this.__awaiter||function(e,i,c,l){return new(c=c||Promise)(function(t,n){function r(e){try{a(l.next(e))}catch(e){n(e)}}function o(e){try{a(l.throw(e))}catch(e){n(e)}}function a(e){var n;e.done?t(e.value):((n=e.value)instanceof c?n:new c(function(e){e(n)})).then(r,o)}a((l=l.apply(e,i||[])).next())})},__generator=this&&this.__generator||function(r,o){var a,i,c,l={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]},u={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function e(t){return function(e){var n=[t,e];if(a)throw new TypeError("Generator is already executing.");for(;l=u&&n[u=0]?0:l;)try{if(a=1,i&&(c=2&n[0]?i.return:n[0]?i.throw||((c=i.return)&&c.call(i),0):i.next)&&!(c=c.call(i,n[1])).done)return c;switch(i=0,(n=c?[2&n[0],c.value]:n)[0]){case 0:case 1:c=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,i=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(!(c=0<(c=l.trys).length&&c[c.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!c||n[1]>c[0]&&n[1]<c[3]))l.label=n[1];else if(6===n[0]&&l.label<c[1])l.label=c[1],c=n;else{if(!(c&&l.label<c[2])){c[2]&&l.ops.pop(),l.trys.pop();continue}l.label=c[2],l.ops.push(n)}}n=o.call(r,l)}catch(e){n=[6,e],i=0}finally{a=c=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}},__awaiter=(window.addEventListener("load",function(){null!==StackExchange&&void 0!==StackExchange&&StackExchange.ready(function(){return __awaiter(void 0,void 0,void 0,function(){var n;return __generator(this,function(e){switch(e.label){case 0:return[4,function(){return Promise.resolve("Hello world!")}()];case 1:return n=e.sent(),console.log(n),[2]}})})})},{once:!0}),this&&this.__awaiter||function(e,i,c,l){return new(c=c||Promise)(function(t,n){function r(e){try{a(l.next(e))}catch(e){n(e)}}function o(e){try{a(l.throw(e))}catch(e){n(e)}}function a(e){var n;e.done?t(e.value):((n=e.value)instanceof c?n:new c(function(e){e(n)})).then(r,o)}a((l=l.apply(e,i||[])).next())})}),__generator=this&&this.__generator||function(r,o){var a,i,c,l={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]},u={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function e(t){return function(e){var n=[t,e];if(a)throw new TypeError("Generator is already executing.");for(;l=u&&n[u=0]?0:l;)try{if(a=1,i&&(c=2&n[0]?i.return:n[0]?i.throw||((c=i.return)&&c.call(i),0):i.next)&&!(c=c.call(i,n[1])).done)return c;switch(i=0,(n=c?[2&n[0],c.value]:n)[0]){case 0:case 1:c=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,i=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(!(c=0<(c=l.trys).length&&c[c.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!c||n[1]>c[0]&&n[1]<c[3]))l.label=n[1];else if(6===n[0]&&l.label<c[1])l.label=c[1],c=n;else{if(!(c&&l.label<c[2])){c[2]&&l.ops.pop(),l.trys.pop();continue}l.label=c[2],l.ops.push(n)}}n=o.call(r,l)}catch(e){n=[6,e],i=0}finally{a=c=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}};window.addEventListener("load",function(){null!==StackExchange&&void 0!==StackExchange&&StackExchange.ready(function(){return __awaiter(void 0,void 0,void 0,function(){var n;return __generator(this,function(e){switch(e.label){case 0:return[4,function(){return Promise.resolve("Hello world!")}()];case 1:return n=e.sent(),console.log(n),[2]}})})})},{once:!0});