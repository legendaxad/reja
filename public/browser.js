function itemTemplate(item) {
      return `     <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>${item.reja}</span>
              <div><button class="btn btn-secondary btn-sm edit-me" data-id="${item._id}">O'zgartirish</button>
              <button class="btn btn-danger btn-sm delete-me" data-id="${item._id}">O'chirish</button></div>
            </li>`;
}

let new_reja = document.getElementById("create-field")

document.getElementById("create-form").addEventListener("submit", function (e) {
      e.preventDefault();
      axios
            .post("/create-item", { reja: new_reja.value })
            .then((response) => {
                  console.log(response.data);
                  document
                        .getElementById("item-list")
                        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
                  new_reja.value = "";
                  new_reja.focus();
            })
            .catch((err) => {
                  console.error("Iltimos qaytadan urunib koring.", err);
            });
});

document.addEventListener("click", function (e) {
      //delete oper
      console.log(e.target)
      if (e.target.classList.contains("delete-me")) {
            if (confirm("Aniq o'chirmoqchimisiz?")) {
                  axios.post("/delete-item", { id: e.target.getAttribute("data-id") }).then((response) => {
                        console.log(response.data);
                        e.target.parentElement.parentElement.remove()

                  }).catch((err) => {
                        console.error("Iltimos qaytadan urunib koring.", err);

                  })
            }
      }
      if (e.target.classList.contains("edit-me")) {

      }
})