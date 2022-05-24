var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://endlessmedicalapi1.p.rapidapi.com/GetOutcomes',
  headers: {
    'x-rapidapi-host': 'endlessmedicalapi1.p.rapidapi.com',
    'x-rapidapi-key': '64c7efae16mshbd8eadb544dfc34p13cbc4jsn8a674dc790a4'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});