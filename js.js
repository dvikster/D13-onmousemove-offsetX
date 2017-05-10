var main = document.querySelector('.foto_wrapp');
var foto2 = document.querySelector('.foto2');
// foto2.style.width ='200px';
main.onmousemove = function (event) {

    console.log(event.offsetX);
    if(event.offsetX>0){
        foto2.style.width = event.offsetX +'px';
    }
}