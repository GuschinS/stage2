import AppController from '../controller/controller';
import { AppView, SourcesResponse } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourceItems = document.querySelector('.sources') as HTMLTemplateElement;
        sourceItems.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: SourcesResponse) => this.view.drawNews(data))
        );
        this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
    }
}

export default App;
