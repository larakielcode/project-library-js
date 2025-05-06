const closebtn = document.querySelector(".close-x");
const closebtnlink = document.querySelector("#close-x-link");
const modal = document.querySelector(".modal");
const addbtn = document.querySelector("#addbook");

closebtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

closebtnlink.onclick = closeModal();

addbtn.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

function closeModal() {
    modal.style.display = 'none';
}