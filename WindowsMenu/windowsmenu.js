window.onload = function() {
    var drawing = document.getElementById('windowsmenu');
    var menu = document.getElementById('menu');

    function showMenu() {
        var evt = window.event || arguments[0];
        var rightedge = drawing.clientWidth - evt.clientX;
        var bottomedge = drawing.clientHeight - evt.clientY;
        if (rightedge < menu.offsetWidth)
            menu.style.left = drawing.scrollLeft + evt.clientX - menu.offsetWidth + "px";
        else
            menu.style.left = drawing.scrollLeft + evt.clientX + "px";
        if (bottomedge < menu.offsetHeight)
            menu.style.top = drawing.scrollTop + evt.clientY - menu.offsetHeight + "px";
        else
            menu.style.top = drawing.scrollTop + evt.clientY + "px";
        menu.style.visibility = "visible";
        LTEvent.addListener(menu, "contextmenu", LTEvent.cancelBubble);
    }

    function hideMenu() {
        menu.style.visibility = 'hidden';
    }
    LTEvent.addListener(drawing, "contextmenu", LTEvent.cancelBubble);
    LTEvent.addListener(drawing, "contextmenu", showMenu);
    LTEvent.addListener(document, "click", hideMenu);

}