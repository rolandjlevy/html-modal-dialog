const $ = (selector) => document.querySelector(selector);

$('button.open').addEventListener("click", e => {
  if (!$('dialog').open) {
    $('.container').classList.add('active');
    $('dialog').showModal();
  }
});

$('dialog').addEventListener("submit", e => {
  console.log('cancel')
  $('.container').classList.remove('active');
});