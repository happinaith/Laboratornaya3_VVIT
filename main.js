const portfolbtn = document.querySelector(".portf_btn");

function showHideImg(){
    const image = document.getElementById("swagger");
    image.style.visibility = (image.style.visibility === "hidden") ? '' : "hidden";
}

portfolbtn.addEventListener("click", showHideImg);