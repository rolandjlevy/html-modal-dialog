const $ = (selector) => document.querySelector(selector);

$('button.open').addEventListener("click", e => {
  if (!$('dialog').open) {
    $('dialog').showModal();
  }
});