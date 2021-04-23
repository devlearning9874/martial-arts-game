var c = document.getElementById("canva");

var ctx = c.getContext("2d");

var loadImage = (src, callback) => {
    let img = document.createElement("img");
    img.onload = () => callback(img);

    img.src=src;
}

let imagePath = (framedNumber) => {

    return "./images/idle/"+framedNumber +".png";
}


loadImage(imagePath(2), (img)=>ctx.drawImage(img, 0, 0, 500,500));


