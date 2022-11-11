//Hàm Khởi Tạo thời gian để chạy
function IntervalTimer(callback, interval) {
    var timerId, startTime, remaining = 0;
    var state = 0; 
    this.pause = function () {
        if (state != 1) return;
        remaining = interval - (new Date() - startTime);
        window.clearInterval(timerId);
        state = 2;
    };
    this.resume = function () {
        if (state != 2) return;
        state = 3;
        window.setTimeout(this.timeoutCallback, remaining);
    };

    this.timeoutCallback = function () {
        if (state != 3) return;

        callback();

        startTime = new Date();
        timerId = window.setInterval(callback, interval);
        state = 1;
    };

    startTime = new Date();
    timerId = window.setInterval(callback, interval);
    state = 1;
}
//Phần Xử Lý Slider 
let dem = 0;
let slideritem = document.querySelectorAll(".slider-item");
let slidernumber = document.querySelector('.slider .number')
let sliderDost = document.querySelectorAll('.library-directional .library-dotted li')
function sliderto(to) {
    slideritem[dem].classList.remove('active');
    slideritem[to].classList.add('active');

    sliderDost[dem].classList.remove("item-dotted");
    sliderDost[to].classList.add("item-dotted");
    dem = to;
}
sliderDost.forEach((e, i) => {
    e.addEventListener('click', function () {
        sliderto(i);
    })
})
document.querySelector(".library-directional .--pev").addEventListener("click", function () {
    if (dem === 0) {
        sliderto(slideritem.length - 1);
        return;
    }
    if (dem > 0) {
        sliderto(dem - 1)
    }
    slidernumber.innerHTML = (dem + 1).toString().padStart(2, "0");
    if (dem == 0) {
    }
    else {

    }
})
document.querySelector(".library-directional .--next").addEventListener("click", function () {
    if (dem === slideritem.length - 1) {
        sliderto(0);
        return;
    }
    if (dem < slideritem.length - 1) {
        sliderto(dem + 1)
    }
})
var timer = new IntervalTimer(function () {
    if (dem < slideritem.length - 1) {
        sliderto(dem + 1);
    }
    else {
        sliderto(0);
    }
}, 3000);


let OwlDots = document.querySelectorAll(".main-hone_cameraslider")
console.log(OwlDots);
console.log("ASdasd");