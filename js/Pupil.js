// Information Pupil start

let form = document.querySelector("#addForm");
let itemList = document.querySelector(".gnr");


form.addEventListener("submit", addItems)

function addItems(e){
    e.preventDefault();

    let name = document.querySelector(".item1").value;
    let surname = document.querySelector(".item2").value;
    let subject = document.querySelector(".item3").value;
    let fileInput = document.querySelector(".item4");
    file = fileInput.files[0];

    if(!name || !surname || !subject || !file){
        alert("Iltimos, barcha malumotlarni toldiring")
    };

    let card = document.createElement("div");
    card.className = "card w-25 p-3";

    let nameElement = document.createElement("h3");
    nameElement.className = "name fs-6 mb-3"
    nameElement.style.textTransform = "capitalize"
    nameElement.textContent = `Name : ${name}`;
    
    let surnameElement = document.createElement("h4")
    surnameElement.className = "surname fs-6 mb-3"
    surnameElement.style.textTransform = "capitalize"
    surnameElement.textContent = `Surname : ${surname}`;
    
    let subjectElement = document.createElement("h5")
    subjectElement.className = "subject fs-6 mb-3"
    subjectElement.style.textTransform = "capitalize"
    subjectElement.textContent = `Subject : ${subject}`;

    let fileElement = document.createElement("img")
    fileElement.src = URL.createObjectURL(file);
    fileElement.className = "mb-3 rounded-1"
    fileElement.style.width = "100%"
    fileElement.style.height = "170px"
    fileElement.style.objectFit = "contain"

    let deleteBtn = document.createElement("button")
    deleteBtn.className = "btn btn-dark delete btn-sm p-2"
    deleteBtn.textContent = "O'chirmoq"
    deleteBtn.style.width = "100%"

    card.appendChild(fileElement);
    card.appendChild(nameElement);
    card.appendChild(surnameElement);
    card.appendChild(subjectElement);
    card.appendChild(deleteBtn)

    itemList.appendChild(card);

    form.reset();
}


// delete bolimi

itemList.addEventListener("click", function removeItems(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Malumotni o'chirib yuborishga aminmisiz")){
            let deleteBtnItems = e.target.parentElement;
            itemList.removeChild(deleteBtnItems)
        }
    }
})


// Information Pupil end