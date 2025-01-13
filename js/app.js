let SliderGnr = document.querySelector(".slider__gnr");
let SliderGnrDiv = document.querySelectorAll(".slider__gnr div");
let RightBtn = document.querySelector(".Sliderbtn__right");
let LeftBtn = document.querySelector(".Sliderbtn__left");
let idx = 0;

// Slider code start

function ChangeBoxs(){
    if(idx > SliderGnrDiv.length -1){
        idx = 0
    }
    else if(idx < 0){
        SliderGnrDiv.length -1
    }

    SliderGnr.style.transform = `translateX(${-idx * 100}%)`
}

RightBtn.addEventListener("click", () => {
    idx++
    ChangeBoxs()
})
LeftBtn.addEventListener("click", () => {
    idx--
    ChangeBoxs()
})

// Slider code end 





 