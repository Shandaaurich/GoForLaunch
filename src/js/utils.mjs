

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}


// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// get url parameters
export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

// render a list 
export function renderListWithTemplate(template, parentElement, list, position = "afterbegin", clear = false) {
  const htmlStrings = list.map(template);
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// render a template
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {

  const headerTemplate = await loadTemplate("/partials/header.html");
  const headerExport = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("/partials/footer.html");
  const footerExport = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerExport);
  renderWithTemplate(footerTemplate, footerExport);
}

export async function loadGiftHeaderFooter(headerData, headerCallback) {

  const headerTemplate = await loadTemplate("/partials/giftshopHeader.html");
  const headerExport = document.querySelector("#giftshop-header");
  const footerTemplate = await loadTemplate("/partials/footer.html");
  const footerExport = document.querySelector("#giftshop-footer");

  renderWithTemplate(headerTemplate, headerExport, headerData, headerCallback);
  renderWithTemplate(footerTemplate, footerExport);
}

export async function loadModal() {
  const modalTemplate = await loadTemplate("/partials/modal.html");
  const modalExport = document.querySelector("#main-modal");

  renderListWithTemplate(modalTemplate, modalExport);
}

export async function loadNavbar() {
  const navTemplate = await loadTemplate("/partials/navbar.html");
  const navExport = document.querySelector("#main-nav");

  renderWithTemplate(navTemplate, navExport)
}

export function alertMessage(message, scroll = true) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  if (scroll) window.scrollTo(0, 0);
}

export function alertRegister(scroll = true) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p><strong>Free Giveaway!</strong> Register with us for details!</p><button class=".btn">click here</button><span>X</span>`;


  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
    if (e.target.tagName == "BUTTON") {
      qs(".main-modal").classList.remove("hidden");
      qs(".overlay").classList.remove("hidden");
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  if (scroll) window.scrollTo(0, 0);
}

export function removeAllAlerts() {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => document.querySelector("main").removeChild(alert));
}
