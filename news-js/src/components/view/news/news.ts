import './news.css';

export interface Article {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: number;
}

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach(
            (
                item: {
                    urlToImage: string;
                    author: string;
                    source: { name: string };
                    publishedAt: string;
                    title: string;
                    description: string;
                    url: string;
                },
                idx: number
            ) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
                const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
                if (idx % 2) newsItem.classList.add('alt');
                const newsCloneTemplate = newsClone.querySelector('.news__meta-photo') as HTMLElement | null;
                if (newsCloneTemplate != null) {
                    newsCloneTemplate.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }
                const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
                newsMetaAuthor.textContent = item.author || item.source.name;
                const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
                newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
                newsDescriptionTitle.textContent = item.title;
                const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
                newsDescriptionSource.textContent = item.source.name;
                const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
                newsDescriptionContent.textContent = item.description;
                const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
                newsReadMore.setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        );
        const newsItem = document.querySelector('.news') as HTMLElement;
        newsItem.innerHTML = '';
        newsItem.appendChild(fragment);
    }
}

export { News };
