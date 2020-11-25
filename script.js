const $ = (selector) => document.querySelector(selector);

$('button.open').addEventListener("click", e => {
  if (!$('dialog').open) {
    $('.container').classList.toggle('active');
    $('dialog').showModal();
  }
});

$('dialog').addEventListener("submit", e => {
  $('.container').classList.toggle('active');
});