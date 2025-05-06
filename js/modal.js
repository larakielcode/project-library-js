const closebtn = document.querySelector(".close-x");
const modal = document.querySelector(".modal");
const addbtn = document.querySelector("#addbook");
const myForm = document.querySelector('#myform');

closebtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

addbtn.addEventListener('click', function () {
    modal.style.display = "block";
});

window.addEventListener = ('click', function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

function closeModal() {
    myForm.reset();
    modal.style.display = 'none';
}

function resetFields() {
    resetbtn.click();
}