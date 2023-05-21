const sortableListe = document.querySelector(".sortable-liste");
const items = sortableListe.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));

  console.log(items.length);
});

const initSortableListe = (e) => {
  e.preventDefault();
  const draggingItem = sortableListe.querySelector(".dragging");
  const sibling = [...sortableListe.querySelectorAll(".item:not(.dragging)")];

  let newSibling = sibling.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  sortableListe.insertBefore(draggingItem, newSibling);
};

sortableListe.addEventListener("dragover", initSortableListe);
sortableListe.addEventListener("dragenter", (e) => e.preventDefault());
