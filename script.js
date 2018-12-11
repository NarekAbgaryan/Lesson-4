// var clickCount = 0;
// function clickHandler(evt){
//    clickCount++;
//    console.log(evt);
//    var str = "Thanks for clicking " + clickCount;
//    this.innerText = str;
// }

// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);


// function bodyClick(evt){
//     console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
//  }
//  window.onclick = bodyClick;



//  function click(evt) {
//     console.log(evt.pageX, evt.pageY);
//  }
//  window.onclick = click;



//-------------------------------------------------------------------------------//
function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var Del = document.getElementById('delete');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
    function handleDel() {
        socket.emit("Karam Jnjem");
    }
    Del.onclick = handleDel;

    function deleteFromDom() {
        var pTags = document.getElementsByTagName("p");
        for (var i in pTags){
            if (pTags.length > 0) {
                chatDiv.removeChild(pTags[0])
            }
        }
    }
    socket.on('display message', handleMessage);
    socket.on("Jnjeq", deleteFromDom)
} // main closing bracket

window.onload = main;
