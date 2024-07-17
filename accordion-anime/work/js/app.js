//const accordions = document.querySelectorAll('.list-item');
//accordions.forEach(accordion => {
// accordion.addEventListener('click', () => {
// const content = accordion.querySelector('.list-content');
//content.classList.toggle('active');
//if(content.classList.contains('active')) { content.style.height = content.scrollHeight + 'px'; }
// else { content.style.height = '0px'; } }); });

const listItems = document.querySelectorAll(".list-item");
console.log(listItems);
listItems.forEach((item) => {
  const content = item.querySelector(".list-content");
  header.addEventListener("click", () => {
    console.log("click");
    const isActive = item.classList.contains("active");
    const activeItem = document.querySelector(".list-item.active");
    if (activeItem && activeItem !== item) {
      const activeItemContent = activeItem.querySelector(".list-content");
      activeItem.classList.remove("active");
      activeItemContent.style.maxHeight = 0;
    }
    if (!isActive) {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      item.classList.remove("active");
      content.style.maxHeight = 0;
    }
  });
});

//content.classList.toggle('active');
//});
