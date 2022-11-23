// cuando retornamos solo un elemento no hace falta usar los {} en los arrow function
const getHash = () => // hash crea el / , slice elimina / y asigna un elemento nuevo (1) , 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; //location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
// .split("/") = el resultado de esto es ['', '1', ''] 
// el split elimina el elemento que le coloque dentro de los ('  ')
export default getHash;

// toLocalLowerCase
// split elimina lo que se le pide en los ( ' ' )