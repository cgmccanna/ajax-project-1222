var $links = document.querySelectorAll('section');

document.addEventListener('click', function (event) {
  data.view = event.target.className;
  switchView();
});

function switchView() {
  for (var i = 0; i < $links.length; i++) {
    if ($links[i].id === data.view) {
      $links[i].className = 'show';
    } else {
      $links[i].className = 'hidden';
    }
  }
}
