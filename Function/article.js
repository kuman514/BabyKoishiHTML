function changeArticle (fileName) {
  fetch(fileName).then(function (response) {
    response.text().then(function (text) {
      document.querySelector('article').innerHTML = text
    })
  })
}
