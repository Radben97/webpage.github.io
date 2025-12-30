const divs = Array.from(document.querySelectorAll(".commClass"));
let count = 0 

divs.forEach((div) => {
  const obj = div.getBoundingClientRect();
  div.addEventListener("click", (e) => {
    let hit =
      e.clientX >= obj.left && e.clientX <= obj.left + 30 && e.clientY >= obj.top && e.clientY <= obj.top + 30;
    if (window.innerWidth < 767) {
      hit =
        e.clientX >= obj.left &&
        e.clientX <= obj.left + 50 &&
        e.clientY >= obj.top &&
        e.clientY <= obj.top + 50;
    }
    if (!hit) return;
    div.classList.add("divAN");
  });
});



if (window.innerWidth < 767) {
    document.querySelectorAll(".commIcon").forEach((i) => {
      console.log("hi");
      i.classList.remove("is-small");
      i.classList.add("is-medium");
    });
}
