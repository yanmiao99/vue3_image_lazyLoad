import defaultImage from "./assets/defaultImage.webp";

export default {
  mounted(el, binding) {
    // console.log('binding========',binding);
    const img = el;
    img.src = defaultImage; // 赋值默认图片
    const observer = new IntersectionObserver((entries) => {
      // 如果当前元素在视口中可见
      if (entries[0].isIntersecting) {
        img.src = binding.value; // 赋值真实图片
        observer.unobserve(img);
      }
    }, {
      root: null, // 默认为视窗 , 如果需要定制, 建议从 binding 中传入
      rootMargin: '0px', // 根元素外边距
      threshold: 0.5 // 交叉比例 , 代表屏幕50%的时候就加载
    });

    observer.observe(img);
  },
  unmounted(el) {
    // 解绑 IntersectionObserver
    observer
      .unobserve(el)
      .disconnect();
  }
};