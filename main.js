const mycard = new XMLHttpRequest();
mycard.open("GET", "https://fakestoreapi.com/products");
mycard.send();
mycard.addEventListener("readystatechange", () => {
  if (mycard.readyState === 4 && mycard.status == 200) {
    getdata(JSON.parse(mycard.responseText));
  }
});

function getdata(data) {
  const cards = document.querySelector("cards");

  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <div class="relative">
            <img
              class="w-[80%] mx-auto image"
              src="${element.image}"
              alt="" />
            <p
              class="category p-2 bg-[#5b5959] rounded-[10px] text-white w-fit text-[12px] absolute top-1">
              ${element.category}
            </p>
          </div>
          <div class="textarea">
            <div class="text-ellipsis">
              <p class="font-bold">
              ${element.title}
              </p>
            </div>
            <div>
              <p class="text-[14px] py-2 card-text multi-line">
              ${element.description}
              </p>
            </div>
            <div>
              <div class="flex items-center gap-3">
                <p class="font-bold">rank:</p>
                <p>${element.rating.rate}</p>
              </div>
              <div class="flex items-center gap-3">
                <p class="font-bold">rank:</p>
                <p>${element.price} $</p>
              </div>

              <div class="flex items-center gap-3">
                <p class="font-bold">have in store:</p>
                <p>${element.rating.count}</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between gap-2">
            <button
              class="p-3 rounded-[10px] w-[100%] border border-black hover:bg-black hover:text-white active:scale-[0.9] transition-all">
              savatga
            </button>
          </div>
        `;
    document.body.appendChild(card);
  });
}