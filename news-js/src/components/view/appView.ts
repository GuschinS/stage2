import { News, Article } from './news/news';
import { Sources, Source } from './sources/sources';

interface SourcesResponse {
    status: 'ok' | 'error';
    sources: Source[];
    articles: Article[];
}

type ServerResponse = SourcesResponse;

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ServerResponse) {
        if ('articles' in data) {
            const values = data?.articles ? data?.articles : [];
            this.news.draw(values);
        }
    }

    drawSources(data: ServerResponse) {
        if ('sources' in data) {
            const values = data?.sources ? data?.sources : [];
            this.sources.draw(values);
        }
    }
}

export { SourcesResponse };
