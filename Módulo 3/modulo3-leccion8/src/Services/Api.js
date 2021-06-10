import "../stylesheets/App.css";
/*const dataResults = [];*/
const fetchLink = "https://randomuser.me/api/?results=50";

const FetchDirectory = () => {
  return fetch(fetchLink)
    .then((response) => response.json())
    .then((data) => {
      /*const alldatas = data.results;

      for (const alldata of alldatas) {
        dataResults.push(alldata);
      }
*/
      return data;
    });
};
export default Api;
