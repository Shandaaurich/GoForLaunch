


const launchURL = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json";

// const launchURL = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json";

const agencySearchBase = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json&search=";

const weatherURL1 = "https://api.openweathermap.org/data/2.5/onecall?lat=";

const weatherURL2 = "&lon=";

const weatherURL3 = "&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";


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

  async weather(latitude, longitude) {
    const response = await fetch(weatherURL1 + `${latitude}` + weatherURL2 + `${longitude}` + weatherURL3);
      const data = await convertToJson(response);
      console.log(data);
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
