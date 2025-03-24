const axios = require("axios");

// Configuration de la base URL
const apiBaseUrl = "https://jsonplaceholder.typicode.com/";

// Création d'une instance Axios
const apiClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fonction pour créer une ressource (POST)
const createResource = async (resource, data) => {
  try {
    const response = await apiClient.post(`/${resource}`, data);
    return response.data;
  } catch (error) {
    throw new Error(`Error creating ${resource}: ${error.message}`);
  }
};

// Fonction pour lire toutes les ressources (GET All)
const getAllResource = async (resource) => {
  try {
    const response = await apiClient.get(`/${resource}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching ${resource}: ${error.message}`);
  }
};

// Fonction pour lire une ressource (GET One)
const getResource = async (resource, id) => {
  try {
    const response = await apiClient.get(`/${resource}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching ${resource}: ${error.message}`);
  }
};

// Fonction pour mettre à jour une ressource (PUT)
const updateResource = async (resource, id, data) => {
  try {
    const response = await apiClient.put(`/${resource}/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(`Error updating ${resource}: ${error.message}`);
  }
};

// Fonction pour supprimer une ressource (DELETE)
const deleteResource = async (resource, id) => {
  try {
    const response = await apiClient.delete(`/${resource}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting ${resource}: ${error.message}`);
  }
};

/* ********** Utilisation des fonctions CRUD ********** */

// Créer un utilisateur
/* const userData = {
  name: "Kalo Soualio",
  username: "KALO07",
  email: "kalosoualio6@gmail.com",
};

createResource("users", userData)
  .then((user) => {
    console.log("Utilisateur créé:", user);
  })
  .catch((error) => {
    console.error("Erreur:", error);
  }); */

// Lire tous les utilisateur
getAllResource("users")
  .then((user) => {
    console.log("Utilisateur:", user);
  })
  .catch((error) => {
    console.error("Erreur:", error);
  });

// Lire un utilisateur
/* getResource("users", "2")
  .then((user) => {
    console.log("Utilisateur:", user);
  })
  .catch((error) => {
    console.error("Erreur:", error);
  }); */

// Mettre à jour un utilisateur
/* const updatedUserData = {
  name: "Kalo soualio",
  username: "KALO07",
  email: "kalosoualio@gmail.com",
};

updateResource("users", "1", updatedUserData)
  .then((user) => {
    console.log("Utilisateur mis à jour:", user);
  })
  .catch((error) => {
    console.error("Erreur:", error);
  }); */

// Supprimer un utilisateur";
/* deleteResource("users", "3")
  .then(() => {
    console.log("Utilisateur supprimé");
  })
  .catch((error) => {
    console.error("Erreur:", error);
  }); */
