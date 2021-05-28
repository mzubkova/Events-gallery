const { jest, expect } = require("@jest/globals");
let { getSrcImages } = require("./index");

const mockedFn = jest.fn();

jest.mock("./index", () => ({
  showImage: jest.fn,
}));

import { showImage } from "./index.js";

describe("test of tickets", function () {
  document.body.innerHTML = `
    <div class="inner">
    <div class="gallery">
      <h1 class="gallery__title">Amalfi coast</h1>
      <div class="gallery__btn">
        <button class="btn btn--show">Show all</button>
        <button class="btn--stop"></button>
        <button class="btn--pause"></button>
      </div>
      <div class="gallery__container">
        <img class="gallery__container-img " src="images/IMG_20190527_151319.jpg" id="img-big" alt="amalfi coast">
      </div>
      <div class="gallery__icons">
        <img class="gallery__icons-item" src="images/IMG_20190527_194900.jpg" alt="amalfi coast">
      </div>
      <div class="slider-autoplay display-none">
        <img class="gallery__icons-item" src="images/IMG_20190527_161601.jpg" alt="amalfi coast">
      </div>
    </div>
  </div>`;

  it("should be a function", function () {
    expect(typeof getSrcImages).toBe("function");
  });
  // it("should return array with images", function () {
  //   expect(getSrcImages()).toBe([
  //     "http://127.0.0.1:5501/images/IMG_20190527_194900.jpg",
  //   ]);
  // });
  it("should dispatch click", function () {
    require("./index");
    const staticImg = document.querySelector(".gallery__icons");
    // const imgContainer = document.querySelector(".gallery__container");
    // const img = document.querySelector(".gallery__container-img");
    // const inner = document.querySelector(".inner");
    // const body = document.querySelector("body");
    // const autoplayBtn = document.querySelector(".btn--show");
    // const stopBtn = document.querySelector(".btn--stop");
    // const pauseBtn = document.querySelector(".btn--pause");
    // const sliderAutoplay = document.querySelector(".slider-autoplay");
    document.addEventListener("DOMContentLoaded", function () {
      console.log(
        "Not part of module.exports but still appearing in terminal, why?"
      );
      const staticImg = document.querySelector(".gallery__icons");
      staticImg.addEventListener("click", function (e) {
        console.log("button was clicked");
      });
    });
    const event = new Event("click");
    staticImg.dispatchEvent(event);
    expect(showImage).toHaveBeenCalled();

    // const map = {};
    // window.addEventListener = jest.genMockFn().mockImpl((event, callback) => {
    //   map[event] = callback;
    // });
  });
});

// describe("test of max number", function () {
//   var expected = [1, 2, 3, 4, 5, 6];
//   it("should be a function", function () {
//     expect(typeof getLeastNumber).toBe("function");
//   });
//   it("should work with array", function () {
//     expect([1, 2, 3, 4, 5, 6]).toEqual(expect.arrayContaining(expected));
//   });
//   it("should work with array", function () {
//     expect(getLeastNumber("15, 99")).toBe("Not an array");
//   });
//   it("should return max number", function () {
//     expect(getLeastNumber([15, 99, 6, 1, 77])).toBe(1);
//   });
// });
