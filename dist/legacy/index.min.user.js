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

"use strict";var __awaiter=this&&this.__awaiter||function(e,i,u,l){return new(u=u||Promise)(function(n,t){function r(e){try{a(l.next(e))}catch(e){t(e)}}function o(e){try{a(l.throw(e))}catch(e){t(e)}}function a(e){var t;e.done?n(e.value):((t=e.value)instanceof u?t:new u(function(e){e(t)})).then(r,o)}a((l=l.apply(e,i||[])).next())})},__generator=this&&this.__generator||function(n,r){var o,a,i,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,a&&(i=2&t[0]?a.return:t[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,t[1])).done)return i;switch(a=0,(t=i?[2&t[0],i.value]:t)[0]){case 0:case 1:i=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(i=0<(i=u.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){u.label=t[1];break}if(6===t[0]&&u.label<i[1]){u.label=i[1],i=t;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(t);break}i[2]&&u.ops.pop(),u.trys.pop();continue}t=r.call(n,u)}catch(e){t=[6,e],a=0}finally{o=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},main=function(){return Promise.resolve("Hello world!")};__awaiter(void 0,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,main()];case 1:return t=e.sent(),console.log(t),[2]}})}),function(){var e=document.getElementById("test");e&&Stacks.showModal(e)}(window);