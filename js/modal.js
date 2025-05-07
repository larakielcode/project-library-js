const closebtn = document.querySelector(".close-x");
const modal = document.querySelector(".modal");
const notice = document.querySelector(".notice");
const addbtn = document.querySelector("#addbook");
const myForm = document.querySelector('#myform');
const errorDisplay = document.querySelector('.errorMessage');

closebtn.onclick = function () {
    //modal.style.display = 'none';
    closeModal();
};

addbtn.onclick = function () {
    modal.style.display = "block";
};

window.onclick = function (e) {
    if (e.target == modal || e.target == notice) {
        closeModal();
    }
}

function closeModal() {
    myForm.reset();
    modal.style.display = 'none';
    errorDisplay.style.display = 'none';
    
}

function resetFields() {
    resetbtn.click();
}