let TeacherMoreBtn = document.querySelector(".TeachersMore-btn");
let TeacherGnr = document.querySelector(".Show-more-gnr")

// teachers more && less start

TeacherMoreBtn.addEventListener("click", () => {
    if(TeacherGnr.style.display === "none" || TeacherGnr.style.display === ""){
        TeacherGnr.style.display = "grid"
        TeacherMoreBtn.textContent = "Less"
    }
    else{
        TeacherGnr.style.display = "none"
        TeacherMoreBtn.textContent = "more" 
    }
});
 
// teachers more && less end