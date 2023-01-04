var $links = document.querySelectorAll('section');

document.addEventListener('click', function (event) {
  var section = event.target.className;
  if (section === 'genres' || section === 'search' || section === 'collection') {
    data.view = section;
    switchView();
  }
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
