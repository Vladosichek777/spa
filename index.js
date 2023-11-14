const app = document.querySelector('.app');
const defaultPath = window.location.href;

const route = (path) => {
  window.event.preventDefault();
  let updatePath = `${defaultPath}${path}`;
  window.history.pushState({}, '', updatePath);
  localStorage.setItem('loc', path);
  handleLocation();
};

function handleLocation() {
  const positionSlash = window.location.pathname.lastIndexOf('/');
  const path = window.location.pathname.slice(positionSlash);
  switch (path) {
    case '/':
      app.innerHTML = `
            <h1>Main page </h1>
        `;
      break;

    case '/users':
      app.innerHTML = `
            <h1>users page </h1>
        `;
      break;

    case '/posts':
      app.innerHTML = `
            <h1>posts page </h1>
        `;
      break;
  }
}
window.onpopstate = handleLocation;
window.onload = () => {};
// document.addEventListener('DOMContentLoaded', () => {
//   let lastPage = localStorage.getItem('loc');
//   console.log(lastPage);
//   switch (lastPage) {
//     case '/':
//       app.innerHTML = `
//             <h1>Main page </h1>
//         `;
//       break;

//     case '/users':
//       app.innerHTML = `
//             <h1>users page </h1>
//         `;
//       break;

//     case '/posts':
//       app.innerHTML = `
//             <h1>posts page </h1>
//         `;
//       break;
//   }
// });
handleLocation();
