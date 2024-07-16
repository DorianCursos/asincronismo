// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// https://jsonplaceholder.typicode.com/users

const allOk = data => console.log(data);
const getFirstUser = data => console.log(data[0]);
const printError = error => console.log(error);

// const getUsers = (url, success, sendError) => {
//   const xhr = new XMLHttpRequest();

//   // Establezco qué tipo de petición es, y a donde la hago
//   xhr.open('GET', url);

//   // Envío la petición
//   xhr.send();

//   // Me quedo a la espera de que los datos lleguen
//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       const data = JSON.parse(xhr.responseText);
//       success(data);
//     }
//   });

//   // Me quedo a la espera de posibles errores en la petición
//   xhr.addEventListener('error', error => {
//     sendError(error);
//   });
// };

// getUsers('https://jsonplaceholder.typicode.com/users', getFirstUser, printError);

// PROMESAS -> Esperar a que la petición se resuelva y llevan internamente la función de "todo ok" y la de error

// const getUsers = url => {
// return new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();
//   // Establezco qué tipo de petición es, y a donde la hago
//   xhr.open('GET', url);
//   // Envío la petición
//   xhr.send();
//   // Me quedo a la espera de que los datos lleguen
//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       const data = JSON.parse(xhr.responseText);
//       resolve(data);
//     }
//   });
//   // Me quedo a la espera de posibles errores en la petición
//   xhr.addEventListener('error', error => {
//     reject(error);
//   });
// });
// };

// then -> TODO BIEN
// catch -> ERRORES

// SINTAXIS THEN - CATCH
// const getUsers = url => {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// };

// SINTAXIS ASYNC AWAIT
const getUsers = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers('https://jsonplaceholder.typicode.com/users');
