
const agencySearchBase = "https://lldev.thespacedevs.com/2.2.0/agencies/?search="

const launchURL = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json";

// const launchURL = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json';

const prodByCategory = "https://api.escuelajs.co/api/v1/products/?categoryId="

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
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
    if (response.ok) {
      const data = await convertToJson(response);
      console.log(data);
      return data.results;
    }
  }

  async searchAgencyData(agency) {
    const response = await fetch(agencySearchBase + `${agency}`);
    const data = await convertToJson(response);
    return data.results;
  }

  async getProductByCategoryId(categoryId) {

    const response = await fetch(prodByCategory + `${categoryId}`);
    if (response.ok) {
      // const data = await convertToJson(response);
      const data = await response.json();
      console.log(data.type);
      return data;
    }
  }
  
  async agencyData(agencyId) {

    const response = await fetch(prodByCategory + `${agencyId}`);
    if (response.ok) {
      const data = await convertToJson(response);
      return data;
    }
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
