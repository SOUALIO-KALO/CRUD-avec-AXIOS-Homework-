const PLACEHOLDER_URL8_API = "https://jsonplaceholder.typicode.com/users/";
const userID = 10;

fetch(`${PLACEHOLDER_URL8_API}/${userID}`, {
  method: "DELETE",
})
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
/*
  package.json
  installer Axios
  Créer un fichier axios.js
  utiliser Axios avec CRUD  
*/
