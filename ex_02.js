document.addEventListener("DOMContentLoaded", function() {
    console.log('test')
    var para = document.getElementsByTagName('p');
    for (var i = 0; i < para.length; i++) {
        para[i].innerHTML = i; 
    }});