function itemTemplate(item) {
      return `     <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>${item.reja}</span>
              <div><button class="btn btn-secondary btn-sm edit-button" data-id="${item._id}">O'zgartirish</button>
              <button class="btn btn-danger btn-sm delete-button" data-id="${item._id}">O'chirish</button></div>
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
