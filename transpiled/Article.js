"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class for creating News
var Article = exports.Article = function () {
    function Article(response) {
        _classCallCheck(this, Article);

        this.url = response.url;
        this.author = response.author;
        this.publishedAt = response.publishedAt;
        this.title = response.title;
        this.description = response.description;
        this.urlToImage = response.urlToImage;
    }

    _createClass(Article, [{
        key: "generate",
        value: function generate() {
            return "\n        <a href=\"" + this.url + "\" target=\"_blank\" class=\"world-news\">\n            <span >" + this.author + " / " + this.publishedAt + "</span> \n            <h1 class=\"news-title\">" + this.title + "</h1>\n            <p>" + this.description + "</p>\n            <img src=\"" + this.urlToImage + "\" alt=\"" + this.title + "\" class=\"illustration\">\n        </a>  \n        ";
        }
    }]);

    return Article;
}();

;