// ==UserScript==
// @name         Review Icon Changer
// @namespace    Sagar V
// @version      0.1
// @description  Change the review Icon and bring back the Review text
// @author       Sagar V
// @match        *.stackoverflow.com/*
// @grant        none
// @website      https://sagarvd01.github.io/
// @run-at       document-end
// ==/UserScript==
(function(){
    var icon=document.querySelectorAll(".iconReviewQueue")[0];
    icon.parentNode.replaceChild(document.createTextNode("Review"),icon);
})();
