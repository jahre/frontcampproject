'use strict';

require('babel-polyfill');

require('whatwg-fetch');

var _Article = require('./Article');

(function () {
  var NEWSPATH = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=554109c975e14549b32eb8b2f41fe8f8';
  var container = document.getElementById('container');
  var articlesBuffer = '';
  var news = fetch(NEWSPATH).then(function (response) {
    return response.json();
  }).then(function (response) {

    // iterator to display all articles
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = response.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var data = _step.value;

        articlesBuffer += new _Article.Article(data).generate();
      }

      // add generated articles to content
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    container.innerHTML = articlesBuffer;
  }).catch(alert);
})();