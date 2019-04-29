import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  console.log('app');
  return <div>first app with React</div>
}

ReactDOM.render(<App />, document.querySelector('#root'));

//   import _ from 'lodash';
//   import React from 'react';

// //   import './style.css';
// //   import './style1.css';
// //  import './AssetManagement/doubao.jpeg';
// import print from './print';

//   function component() {
//     var element = document.createElement('div');
//     var button = document.createElement('button');
//     var br = document.createElement('br');

//     button.innerHTML = 'Click me and look at the console.123456!';
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.appendChild(br);
//     element.appendChild(button);

//     button.onclick = print.bind(null, 'Hello')
//     const p = new Promise((resolve) => {
//         const {name} ={name: ' lily'}
//         resolve('test promise' + name);
//     })
//     p.then((res) => {
//         console.log(res)
//     })

//     return element;
//   }

//   document.body.appendChild(component());

//   function getComponent() {
//     return import(/* webpackChunkName: "lodash_dan" */ 'lodash').then(({ default: _ }) => {
//       var element = document.createElement('div');
 
//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
//       return element;
 
//     }).catch(error => 'An error occurred while loading the component');
//   }

//   getComponent().then(component => {
//     document.body.appendChild(component);
//   })

//       async function getComponent() {
//         var element = document.createElement('div');
//         const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
     
//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     
//         return element;
//       }
    
//       getComponent().then(component => {
//         document.body.appendChild(component);
//       });