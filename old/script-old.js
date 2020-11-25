const details = document.querySelector("details");
const dialog = document.querySelector("dialog");

details.addEventListener("toggle", event => {
    const detailsOpen = details.getAttribute('open');
    const detailsOpenQ = document.querySelector("details").open
    console.log('toggle', 'dialog.open:', dialog.open, 'details.open:', details.open, 'detailsOpenQ:', detailsOpenQ);
  if (!dialog.open && details.open) {
    dialog.showModal();
  }
});

document.addEventListener("submit", e => {
  if (e.target.method === "dialog") {
    dialog.open = false;
    document.querySelector("details").open = true;
  }
});