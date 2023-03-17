//MENU

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "src/image/menu/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "src/image/menu/close_white_36dp.svg";
    }
}

//CARROSSEL

const controls = 
document.querySelectorAll(".control");
let currentItem = 0;
const item = 
document.querySelectorAll(".item");
const maxItems = item.length;

controls.forEach(control => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft){
      currentItem -=1;
    } else {
      currentItem +=1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }
    if (currentItem <0) {
      currentItem = maxItems - 1;
    }
    
    item.forEach(item =>
      item.classList.remove("current-item"));

    item[currentItem].scrollIntoView({
      inline:"center",
      behavior: "smooth",
    })

    item[currentItem].classList.add("current-item");

    console.log("control clicked", isLeft, currentItem, maxItems);
  });
});