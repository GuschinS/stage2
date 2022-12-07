import * as _ from 'lodash';
import './global.css';
// import App from './components/app/app';

// const app = new App();
// app.start();

function component() {
    const element = document.createElement('p');
    element.classList.add('test');
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = 'Hello webpack';
    return element;
}

document.body.appendChild(component());
