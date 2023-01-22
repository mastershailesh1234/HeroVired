const counter = document.querySelectorAll(".counter");
counter.forEach((count) => {
  count.innerText = "0";

  const updateCounter = () => {
    const target = count.getAttribute("data-target");
    const c = +count.innerText;
    const increment = target / 600;
    if (c < target) {
      count.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1)
    //   updateCounter();
    } else {
      count.innerText = target;
    }
  };
  updateCounter();
});
