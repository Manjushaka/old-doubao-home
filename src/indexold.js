import _ from 'lodash';

// import printMe from './print.js';
import './style.css';

function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
  
    element.innerHTML = _.join(['Hello', 'webpack', '豆包纸萌萌哒', '加油'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;

    element.appendChild(btn);
  
    return element;
  }
  console.log('index')
  // document.body.appendChild(component());
  let element = component();
  document.body.appendChild(element);

    if (module.hot) {
        module.hot.accept('./print.js', function() {
          console.log('Accepting the updated printMe module!');
          // printMe();
          document.body.removeChild(element);
          element = component();
          document.body.appendChild(element);
        })
      }