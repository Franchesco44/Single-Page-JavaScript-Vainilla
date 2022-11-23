const API = 'http://rickandmortyapi.com/api/character/'; // acceso a los personajes de la api

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API; // retornamos api y concatena el id que recibimos
    try {
        const response = await fetch(apiURL);//llamado a los elementos
        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Fetch Error', error);
    };

};

export default getData;
