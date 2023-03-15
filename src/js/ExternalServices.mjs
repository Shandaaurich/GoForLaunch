
const baseURL = "http://server-nodejs.cit.byui.edu:3000/"
const agencySearchBase = "https://lldev.thespacedevs.com/2.2.0/agencies/?search="

const launchURL = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json";

// const launchURL = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json';

const fakeStoreAPI = "https://fakestoreapi.com/products";

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data};
  }
}
// function sortByProperty(property){  
//   return function(a,b){  
//      if(a[property] > b[property])  
//         return 1;  
//      else if(a[property] < b[property])  
//         return -1;  
 
//      return 0;  
//   }  
// }

export default class ExternalServices {

  async getData() {
    const response = await fetch(launchURL);
    const data = await convertToJson(response);
    return data.results;
  }

  async searchAgencyData(agency) {
    const response = await fetch(agencySearchBase + `${agency}`);
    const data = await convertToJson(response);
    return data.results;
  }

  async getProductCategories() {
    const response = await fetch(fakeStoreAPI + `/categories`);
    const data = await convertToJson(response);
    return data.results;
  }

  async getProductsByCategory(category) {
    const response = await fetch(fakeStoreAPI + `/category/${category}`);
    const data = await convertToJson(response);
    return data.results;
  }


  async findProductById(id) {
    const response = await fetch(fakeStoreAPI + `/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async checkout(json) {
    const thingToSend = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json)
    };

    const response = await fetch (launchURL + `checkout`, thingToSend)
    const data = await convertToJson(response);
    return data.Result;
  }

  async loginRequest(creds){
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(creds),
    };
    const response = await fetch(baseURL + "login", options).then(
      convertToJson
    );
    return response.accessToken;
  }
  async getOrders(token){
    const options = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };
    const response = await fetch(baseURL + "orders", options).then(
      convertToJson
    );
    return response;
  }
}
