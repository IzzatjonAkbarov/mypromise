// const myPromise = new Promise((res, rej) => {
//   const success = true;
//   if (success) {
//     res("success");
//   } else {
//     rej("failed");
//   }
// });

const mycard = new XMLHttpRequest();
mycard.open("GET", "./db.json");
mycard.send();
function getdata() {
  return new Promise((res, rej) => {
    mycard.addEventListener("readystatechange", () => {
      if (mycard.readyState === 4 && mycard.status == 200) {
        res(JSON.parse(mycard.responseText));
      } else if (mycard.readyState === 4) {
        rej(mycard.responseText);
      }
    });
  });
}
getdata()
  .then((data) => {
    getdataFunc(data);
  })
  .catch((error) => {
    console.log(error);
  });
function getdataFunc(data) {
  const cards = document.querySelector(".cards");

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
              <i class="fa-regular fa-heart absolute top-1 right-2 text-[20px]"></i>
            </div>
            <div class="textarea">
              <div class="">
                <p class="font-bold">
                ${element.title}
                </p>
              </div>
              <div class="multi-line">
                <p class="text-[14px] py-2  ">
                ${element.description}
                </p>
              </div>
              <div>
                <div class="flex items-center gap-3">
                  <p class="font-bold">rank:</p>
                  <p>${element.rating.rate} <i class="fa-solid fa-star text-yellow-500"></i></p>
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
              <button><i class="fa-solid fa-cart-shopping text-[20px] p-3 rounded-[10px] w-[100%] border border-black hover:bg-black hover:text-white active:scale-[0.9] transition-all"></i></button>
            </div>
          `;
    cards.appendChild(card);
  });
}
