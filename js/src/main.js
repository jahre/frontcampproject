import "babel-polyfill";
import 'whatwg-fetch'
import {Article} from './Article';

(function(){
const NEWSPATH = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=554109c975e14549b32eb8b2f41fe8f8';
let container = document.getElementById('container');
let articlesBuffer = ``;
let news = fetch(NEWSPATH)
  .then(response => response.json())
  .then(function(response) {

    // iterator to display all articles
    for (let data of response.articles) {
      articlesBuffer += new Article(data).generate();
    }

    // add generated articles to content
    container.innerHTML = articlesBuffer;
  })
  .catch( alert );
})();