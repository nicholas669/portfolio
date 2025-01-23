function time(){
    let date = document.getElementById('time')
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const amOrPm = h >= 12 ? 'PM' : 'AM';
    date.innerHTML = h + ':' + m + ':' + s + ' ' + amOrPm;

    

}
setInterval(time,1000);
function button(){
    let but = document.getElementById("but")

    but.addEventListener("mouseenter", function (){
        but.style.color = "gray";
    })

    but.addEventListener("mouseleave", function (){
        but.style.color = "black";
    })
}

let image1 = ["image/python1p.png","image/python3p.png","image/c++p.png","image/c++3p.png","image/js1.png","image/js3.png"]
let image2 = ["image/python2.png","image/python4p.png","image/c++2p.png","image/c++4p.png","image/js2.png","image/js4.png"]


function page(idx){
    let img1 = document.getElementById("img1");
    img1.src = image1[idx];
    let txt1 = document.getElementById('txt1');
    txt1.innerHTML = "LOL";
    let img2 = document.getElementById("img2");
    img2.src = image2[idx];
    let txt2 = document.getElementById('txt2');
    txt2.innerHTML = "LOL";
    localStorage.setItem("page",idx)
}

function move(a){
    let p = parseInt(localStorage.getItem("page"));
    
    if (a == 0) {
        p -= 1;
        if (p < 0){
            p = 0
        }
    } else if (a == 1) {
        p += 1;
        if (p > 5){
            p = 0
        }
    }

    page(p);
}

