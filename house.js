

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1;
const length = images.length
const nextSlide = () => { 
      slider.style.transform = `translateX(-${slideNumber * 300}px)`;
      slideNumber++;};
const getFirstSlide = () => { slider.style.transform = `translateX(0px)`;
      slideNumber = 1;
}
const prevSlide = () => {slider.style.transform = `translateX(-${(slideNumber-2) * 300}px)`; 
      slideNumber--;
}
const getLastSlide = () => {slider.style.transform = `translateX(-${(length - 4) * 300}px)`;
      slideNumber = length - 2;}

right.addEventListener("click", ()=> {
   slideNumber < length-3 ?  nextSlide() : getFirstSlide();
})

left.addEventListener("click",()=>{
  slideNumber > 1? prevSlide() : getLastSlide();
})

// 获取放大容器和其中的图片元素
const zoomContainer = document.querySelector(".image-zoom-container");
const zoomedImage = document.querySelector(".zoomed-image");
// 获取轮播中的所有图片（假设类名为.image）
const carouselImages = document.querySelectorAll(".image");

// 给每张轮播图绑定点击事件：放大图片
carouselImages.forEach(image => {
  image.addEventListener("click", () => {
    // 获取当前点击图片的src（如果有高清原图，可替换为原图地址）
    const imageSrc = image.src; 
    // 将图片地址设置到放大容器中
    zoomedImage.src = imageSrc;
    // 显示放大容器（通过flex布局显示）
    zoomContainer.style.display = "flex";
    // 可选：禁止页面滚动（避免放大时背景滚动）
    document.body.style.overflow = "hidden";
  });
});

// 点击放大容器关闭（点击图片或背景都可关闭）
zoomContainer.addEventListener("click", () => {
  // 隐藏放大容器
  zoomContainer.style.display = "none";
  // 恢复页面滚动
  document.body.style.overflow = "auto";
});



