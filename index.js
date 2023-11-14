const app = document.querySelector('.app');

const route = (event) => {
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};

function handleLocation() {
  const path = window.location.pathname;
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
window.route = route;
handleLocation();
