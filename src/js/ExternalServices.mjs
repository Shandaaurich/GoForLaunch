


const launchURL = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json";

// const launchURL = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json";

const agencySearchBase = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json&search=";

// const agencySearchBase = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json&search=";

const apodAPI = "https://api.nasa.gov/planetary/apod?api_key=Gh26sZYkn3IaqGIQ3Jdagk298RCK4ZgXw6dcu6VG&count=10"

const fakeProducts = "https://api.escuelajs.co/api/v1/products"

const fakeCategories = "https://api.escuelajs.co/api/v1/categories"

const filteredCategories = "https://api.escuelajs.co/api/v1/products/?categoryId="


async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}

export default class ExternalServices {

  async getData() {
    const response = await fetch(launchURL);
      const data = await convertToJson(response);
      return data.results;
  }

  async agencyData(agency) {
    const response = await fetch(agencySearchBase + `${agency}`);
    const data = await convertToJson(response);
    return data.results;
  }
  
  async apodData() {
    const response = await fetch(apodAPI);
    const data = await convertToJson(response);
    return data;
  }

  async prodCategories() {
    const response = await fetch(fakeCategories);
    const data = await convertToJson(response);
    return data;
  }

  async allProducts() {
    const response = await fetch(fakeProducts);
    const data = await convertToJson(response);
    return data;
  }

  
  async filteredCategories(categoryId) {
    const response = await fetch(filteredCategories + `${categoryId}`);
    const data = await convertToJson(response);
    return data;
  }


  async checkout(json) {
    const thingToSend = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json)
    };

    const response = await fetch(launchURL + `checkout`, thingToSend)
    const data = await convertToJson(response);
    return data.Result;
  }

  // async loginRequest(creds){
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(creds),
  //   };
  //   const response = await fetch(baseURL + "login", options).then(
  //     convertToJson
  //   );
  //   return response.accessToken;
  // }
  // async getOrders(token){
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Authorization": `Bearer ${token}`
  //     }
  //   };
  //   const response = await fetch(baseURL + "orders", options).then(
  //     convertToJson
  //   );
  //   return response;
  // }
}
