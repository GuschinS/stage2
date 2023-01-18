import './sources.css';

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLTemplateElement;
            sourceItemName.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLTemplateElement;
            sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources') as HTMLTemplateElement;
        sources.append(fragment);
    }
}

export { Sources };
