const restOfTextAboutUs = document.querySelector("#rest-text__about-us");
const restOfTextProgram = document.querySelector("#rest-text__program");

const btnReadMoreAboutUs = document.getElementById("btn_read_more_about-us");
const btnReadMoreProgram = document.getElementById("btn_read_more_program");
changeAfterResize();

window.addEventListener("resize", changeAfterResize);
btnReadMoreAboutUs.addEventListener("click", () => {
  changeReadMore(btnReadMoreAboutUs, restOfTextAboutUs);
});
btnReadMoreProgram.addEventListener("click", () => {
  changeReadMore(btnReadMoreProgram, restOfTextProgram);
});

function changeAfterResize() {
  if (+window.innerWidth > 1279.99) {
    restOfTextAboutUs.style.maxHeight = restOfTextAboutUs.scrollHeight + "px";
    console.log(
      "restOfTextAboutUs.style.maxHeight =",
      restOfTextAboutUs.scrollHeight + "px"
    );
    restOfTextProgram.style.maxHeight = restOfTextProgram.scrollHeight + "px";
  } else {
    restOfTextAboutUs.style.maxHeight = "0px";
    restOfTextProgram.style.maxHeight = "0px";
  }
}

function changeReadMore(btn, text) {
  if (btn.innerHTML === "Less...") {
    btn.innerHTML = "Read more";
    text.style.maxHeight = "0px";
  } else {
    btn.innerHTML = "Less...";
    text.style.maxHeight = restOfTextProgram.scrollHeight + "px";
  }
}
// падинг галлереи

const myData = {
  list: document.querySelector(".rewiews__list"),
  nodeStructura: {
    preview: document.querySelectorAll(".preview"),
    fullItem: document.querySelectorAll(".reviews__item"),
    notInPreviw: document.querySelectorAll(".notInPreviw"),
  },
  length: function () {
    return this.nodeStructura.fullItem.length;
  },

  activePosition: 0,

  setActivePosition: function (newPosision) {
    this.activePosition = newPosision;
    if (newPosision < 0) {
      this.activePosition = this.length() - 1;
    } else if (newPosision > this.length() - 1) {
      this.activePosition = 0;
    }
  },
  previewPosition: function () {
    let counter = this.activePosition - 1;
    if (counter < 0) {
      counter = this.length() - 1;
    }
    return counter;
  },
  nextPosition: function () {
    let counter = this.activePosition + 1;
    if (counter > this.length() - 1) {
      counter = 0;
    }
    return counter;
  },
  invisibalAll: function () {
    this.nodeStructura.preview.forEach((el) => {
      el.classList.add("nonactiv");
      el.classList.remove("befor", "after", "activ");
    });
    this.nodeStructura.notInPreviw.forEach((el) => {
      el.classList.add("nonactiv");
      el.classList.remove("activ");
    });
  },
  doVisibleActivElement: function () {
    this.nodeStructura.preview[this.activePosition].classList.add("activ");
    this.nodeStructura.preview[this.activePosition].classList.remove(
      "nonactiv"
    );
    this.nodeStructura.notInPreviw[this.activePosition].classList.add("activ");
    this.nodeStructura.notInPreviw[this.activePosition].classList.remove(
      "nonactiv"
    );
  },
  doVisiblePreviewNextElement: function () {
    this.nodeStructura.preview[this.previewPosition()].classList.add(
      "activ",
      "befor"
    );
    this.nodeStructura.preview[this.previewPosition()].classList.remove(
      "nonactiv"
    );

    this.nodeStructura.preview[this.nextPosition()].classList.add(
      "activ",
      "after"
    );
    this.nodeStructura.preview[this.nextPosition()].classList.remove(
      "nonactiv"
    );
  },
  numberFromMumbers: function () {
    document.querySelector(".reviews__counter").textContent = `${
      this.activePosition + 1
    }/${this.length()}`;
  },
  move: function (windowWidth) {
    this.invisibalAll();
    this.doVisibleActivElement();

    if (windowWidth > 767.99) {
      this.doVisiblePreviewNextElement();
    }
    this.numberFromMumbers();
  },
};
document.addEventListener("DOMContentLoaded", () =>
  myData.move(window.innerWidth)
);

console.log("my = ", myData.nextPosition());
window.addEventListener("resize", () => myData.move(window.innerWidth));

myData.list.addEventListener("click", (e) => {
  console.log("my = ", myData);

  if (e.screenX > window.innerWidth / 2) {
    myData.setActivePosition(++myData.activePosition);
    myData.move(window.innerWidth);
    console.log("my = ", myData);
  }
  if (e.screenX < window.innerWidth / 2) {
    console.log("my = ", myData);
    myData.setActivePosition(myData.activePosition - 1);
    myData.move(window.innerWidth);
    console.log("my = ", myData);
  }
});
