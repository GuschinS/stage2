import AppLoader from './appLoader';
import { SourcesResponse } from '../view/appView';

class AppController extends AppLoader {
    getSources(callback: { (data: SourcesResponse): void }) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: { (data: SourcesResponse): void }) {
        let target = e.target as HTMLTemplateElement;
        const newsContainer = e.currentTarget as HTMLTemplateElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }

                return;
            }
            target = target.parentNode as HTMLTemplateElement;
        }
    }
}

export default AppController;
