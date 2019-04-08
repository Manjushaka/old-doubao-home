import _ from 'lodash';

import './style.css';
import data from './json1.json';
import xml from './xml1.xml';
// import './test1.js';
// import MyImage from './doubao.jpeg';

console.log('index.js', data, xml);

function component() {
    let element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack', '豆包纸萌萌哒', '加油'], ' ');
    element.classList.add('hello');

    // var myImage = new Image();
    // console.log(MyImage)
    // myImage.src = MyImage;
    // element.appendChild(myImage)
  
    return element;
  }
  
  document.body.appendChild(component());