import getData from "../utilis/getData";
// const Home = async () => {
//     const characters = await getData(); //esperamos hasta que nos den la informacion
//     const view = `
//       <div class="Characters"> 
//         ${characters.results.map(character => `
//           <article class="Characters-item">
//             <a href="#/${character.id}/"> 
//              <img src="${character.image}" alt="${character.name}">
//               <h2>${character.name}</h2> NO TENIA CERRADO EL H2 POR ESO NO ME DEJABA APLICAR LOS ESTILOS
//             </a>
//            </article>
//          `).join('')}
//         </div> 
//     `;
//     return view;
// };
// export default Home;

const Home = async () => {
    const characters = await getData();
    const view = `
      <div class="Characters">
        ${characters.results.map(character => `
          <article class="Characters-item">
            <a href="#/${character.id}/">
              <img src="${character.image}" alt="${character.name}">
              <h2>${character.name}</h2> 
            </a>
          </article>
        `).join('')}
      </div>
    `;
    return view;
};

export default Home;

