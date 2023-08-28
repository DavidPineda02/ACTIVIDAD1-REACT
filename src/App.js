import Camisa from "./Card/imgs/camisa.jpg";
import Billetera from "./Card/imgs/billetera.jpg";
import Taza from "./Card/imgs/taza.jpg";
import Zapatos from "./Card/imgs/zapatos.jpg";
import Jeans from "./Card/imgs/jean.jpg";
import Tacones from "./Card/imgs/tacones.jpg";

import Card from "./Card/card.component";

function App() {

   const cards = [
      {
         img: Camisa,
         name: "Camisa",
         description: "Camisas Blancas para salir con su pareja a la playa",
         price: 300
      },
      {
         img: Billetera,
         name: "Billetera",
         description: "Una billetera de cuero para que presuma sus Dolares",
         price: 100
      },
      {
         img: Taza,
         name: "Taza",
         description: "Una taza con toda la energia de un Camper",
         price: 50
      },
      {
         img: Zapatos,
         name: "Zapatos",
         description: "Zapatos de excelente calidad para que salga hacer el deporte que quiera",
         price: 400
      },
      {
         img: Jeans,
         name: "Jeans",
         description: "Un jean super comodo y con una tela que se adapta a cualquier persona",
         price: 200
      },
      {
         img: Tacones,
         name: "Tacones",
         description: "Tacones con los que se puede ir de fiesta cada fin de semana",
         price: 350
      }
   ]

   return(
      <div className="main">
         <h1>E-Commerce in React and SnipCart</h1>
         <Card items={cards}></Card>
      </div>
   )
}

export default App;