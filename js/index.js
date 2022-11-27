let grid = document.querySelector(".grid-slider");
let btnimg = document.querySelector("#btnimg");
let li = document.querySelector(".grid-left-upper-mid ul li");
let liList = document.querySelectorAll(".grid-left-upper-mid ul li");
let spanLi = document.querySelectorAll(".grid-left-upper-mid ul li span");

let upperTop = document.querySelector(".grid-left-upper-top");
let upperTopImg = document.querySelector(".grid-left-upper-top img");

let arrLength = liList.length;

let bottom = document.querySelector(".grid-left-bottom");
let bottomDiv = document.querySelector(".grid-left-bottom div");

var isSlided = 0;

btnimg.addEventListener("click", () => {
    if (isSlided === 0) {
        grid.style.gridTemplateColumns = "78px auto";
        upperTop.removeChild(upperTopImg);
        bottom.removeChild(bottomDiv);
        bottom.style.justifyContent = "center";
        li.style.alignItems = "center";
        li.style.backgroundColor = "transparent";
        li.style.width = "100%";
        for (let i = 0; i < arrLength; i++) {
            console.log(i);
            liList[i].removeChild(spanLi[i]);
        }
        isSlided++;
    } else {
        isSlided;
        document.location.reload();
    }
});
