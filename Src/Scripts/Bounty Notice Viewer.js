// ==UserScript==
// @name         Bounty Notice Viewer
// @namespace    Sagar V
// @version      0.1
// @description  View the notice of bounty without opening the question and scrolling a lot.
// @author       Sagar V
// @match        *.stackoverflow.com/*
// @match        *.stackexchange.com/*
// @grant        none
// @website      https://sagarvd01.github.io/
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    if(document.querySelectorAll('.bounty-indicator').length>0){
        var item=document.querySelectorAll('.bounty-indicator');
        item.forEach(function(x){
            var url="https://"+window.location.host+x.nextElementSibling.children[0].getAttribute('href');
            var xhr=new XMLHttpRequest();
            xhr.open("GET",url,true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState==4 && xhr.status==200){
                    var p=document.createElement('p');
                    p.innerHTML=xhr.responseText;
                    var msg = p.querySelector('.bounty p').innerHTML;
                    x.setAttribute('title',msg);
                }
            };
            xhr.send();
        });
    }
})();
