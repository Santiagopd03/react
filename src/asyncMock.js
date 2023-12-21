const products = [
    { id: "1", name: "Call Of Duty", img: "https://www.gamereactor.es/media/79/altcallduty_3107933b.jpg", price: 100, category: "juegos", description: "Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo bélico.", stock: 10 },
    { id: "2", name: "league Of Legends", img: "https://d31-a.sdn.cz/d_31/d_15090914/img/92/1920x1080_BcB9IV.jpg", price: 100, category: "juegos", description: "Es un videojuego multijugador de arena de batalla en línea", stock: 10 },
    { id: "3", name: "Tanki Online", img: "https://en.tankiwiki.com/images/en/thumb/2/21/Bobruisk_1.jpg/1200px-Bobruisk_1.jpg.png", price: 100, category: "juegos", description: "Es un juego basado en navegador en el género de los shooters en tercera persona.", stock: 10 },
    { id: "4", name: "Free Fire", img: "https://gamehall.com.br/wp-content/uploads/2020/05/free-fire-capa.jpg", price: 100, category: "juegos", description: "Garena Free Fire es un juego de acción y aventura de tipo battle royale que se juega únicamente en tercera persona", stock: 10 },
    { id: "5", name: "Teclado", img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/618zZ7u3sUL._AC_SX679_.jpg", price: 100, category: "perifericos", description: "Teclado Mecanico", stock: 10 },
    { id: "6", name: "Combo", img: "https://speedlogic.com.co/wp-content/uploads/2023/08/21085.1.png", price: 100, category: "perifericos", description: "Combo Gamer", stock: 10 },
    { id: "7", name: "Maus", img: "https://http2.mlstatic.com/D_NQ_NP_977425-MLA54004267385_022023-O.webp", price: 100, category: "perifericos", description: "logitech g305", stock: 10 },
  ];
    
    export const getProducts = () => {
      return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
          setTimeout(() => {
            resolve(products);
          }, 2000);
        } else {
          reject("No hay productos");
        }
      });
    };
  
    export const getProductById = (id) => {
      return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
          const product = products.find( p => p.id === id);
          
          setTimeout(() => {
            if(!product) {
              reject(`No se encuentra el productos con el id ${id}`)
            }
            resolve(product);
          }, 2000);
        } else {
          reject("No hay productos");
        }
      });
    };