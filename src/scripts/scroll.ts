const scrollContainer = document.querySelector("main");
const scrollProgress = document.getElementById("scroll-progress");
const numPages = document.querySelectorAll(".page").length;

export const setUpScroll = () => {
  scrollContainer!.addEventListener("wheel", (e: any) => {
    e.preventDefault();
    //Scroll Page
    let scrollBy = 0;
    if (e.deltaY > 0) {
      scrollBy = e.deltaY + 1000;
    } else {
      scrollBy = e.deltaY - 1000;
    }

    scrollContainer!.scrollLeft += scrollBy;
  });

  //Scroll Percentage
  scrollContainer!.addEventListener("scroll", () => {
    //Works for number of pages
    const docWidth = document.documentElement.scrollWidth * (numPages - 1);
    const scrollLeft = scrollContainer!.scrollLeft;

    scrollProgress!.style.width = `${(scrollLeft / docWidth) * 100}%`;
  });
};
