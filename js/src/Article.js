// class for creating News
export class Article{
    constructor(response) {
        this.url = response.url;
        this.author = response.author;
        this.publishedAt = response.publishedAt;
        this.title = response.title;
        this.description = response.description;
        this.urlToImage = response.urlToImage;
    }
    generate() {
        return  `
        <a href="${this.url}" target="_blank" class="world-news">
            <span >${this.author} / ${this.publishedAt}</span> 
            <h1 class="news-title">${this.title}</h1>
            <p>${this.description}</p>
            <img src="${this.urlToImage}" alt="${this.title}" class="illustration">
        </a>  
        `
    }
};