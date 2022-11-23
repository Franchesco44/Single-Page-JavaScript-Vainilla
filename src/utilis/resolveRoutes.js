// utileria necesaria 

const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id' // ? si esto es verdad : si no 
        return validRoute;
    }
    return `/${route}`; // /about
};

export default resolveRoutes;