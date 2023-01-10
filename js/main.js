var $links = document.querySelectorAll('section');
var $genreList = document.querySelector('.genre-list');
var $genreBooks = document.querySelector('#book-list');

document.addEventListener('click', function (event) {
  var section = event.target.className;
  if (section === 'genres' || section === 'search' || section === 'collection' || section === 'home') {
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

function renderBook(books) {
  var $bookWrapper = document.createElement('li');
  $bookWrapper.setAttribute('class', 'book-wrapper');

  var $info = document.createElement('div');
  $info.setAttribute('class', 'info');
  $bookWrapper.appendChild($info);

  var $title = document.createElement('p');
  $title.setAttribute('class', 'book-title');
  $title.textContent = books.title;
  $info.appendChild($title);

  var $author = document.createElement('p');
  $author.textContent = books.authors[0].name;
  $info.appendChild($author);

  var $date = document.createElement('p');
  $date.setAttribute('class', 'italics');
  $date.textContent = books.first_publish_year;
  $info.appendChild($date);

  var $add = document.createElement('div');
  $add.setAttribute('class', 'plus-icon');
  $bookWrapper.appendChild($add);

  var $plusIcon = document.createElement('i');
  $plusIcon.setAttribute('class', 'fa-solid fa-square-plus');
  $add.appendChild($plusIcon);

  $genreBooks.appendChild($bookWrapper);
}

$genreList.addEventListener('change', function (event) {
  $genreBooks.innerHTML = '';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', ('http://openlibrary.org/subjects/' + (event.target.value) + '.json?limit=60'));
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var books = xhr.response.works;
    for (var i = 0; i < books.length; i++) {
      renderBook(books[i]);
    }
  });
  xhr.send();
});
