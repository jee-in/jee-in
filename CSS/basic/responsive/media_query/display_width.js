addEventListener("load", function(){
    let currentWidth = '';
    if(window.matchMedia("screen and (min-width: 1025px)").matches) currentWidth = '기본(1025px 이상)'
    if(window.matchMedia("screen and (max-width: 1024px)").matches) currentWidth = '1024px 이하'
    if(window.matchMedia("screen and (max-width: 768px)").matches) currentWidth = '768px 이하'
    if(window.matchMedia("screen and (max-width: 320px)").matches) currentWidth = '320px 이하'

    document.getElementById("current-width").innerHTML = currentWidth;
})

addEventListener("resize", function(){
    let currentWidth = '';
    if(window.matchMedia("screen and (min-width: 1025px)").matches) currentWidth = '기본(1025px 이상)'
    if(window.matchMedia("screen and (max-width: 1024px)").matches) currentWidth = '1024px 이하'
    if(window.matchMedia("screen and (max-width: 768px)").matches) currentWidth = '768px 이하'
    if(window.matchMedia("screen and (max-width: 320px)").matches) currentWidth = '320px 이하'

    document.getElementById("current-width").innerHTML = currentWidth;
})