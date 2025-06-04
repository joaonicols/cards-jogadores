// import './App.css'
// import Cards from './components/Cards'
// import FotosJogador from './components/FotosJogador'
// import Yuri from '../src/images/yuri.jpg'
// import Garro from '../src/images/garro.jpg'
// import RA8 from '../src/images/ra8.jpg'

// function App() {
//   return (
//     <div>
//       <Cards Fotos={Yuri} Habilida = "" Time = "ewqfgewfe" Pos = "qfvqwevfqe" />
//       <Cards Fotos={Garro} Habilida = "" Time = "ewqfgewfe" Pos = "qfvqwevfqe" />
//       <Cards Fotos={RA8} Habilida = "" Time = "ewqfgewfe" Pos = "qfvqwevfqe" />

      
//     </div>
//   )
// }

// export default App

import Cards from './components/Cards';
import Yuri from './images/yuri.jpg'; 
import Garro from './images/garro.jpg'
import RA8 from './images/ra8.jpg'

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Cards
        Fotos={Yuri}
        Nome="Yuri Alberto #9"
        Time="Corinthians"
        Pos="Centroavante"
        Habilida="Finalização Precisa"
      />
      <Cards
        Fotos={Garro}
        Nome="Rodrigo Garro #10"
        Time="Corinthians"
        Pos="Meia-Armador"
        Habilida="Passe e Finalização"
      />
      <Cards
        Fotos={RA8}
        Nome="Renato Augusto #8"
        Time="Corinthians"
        Pos="Meia-Armador"
        Habilida="Passe e Finalização"
      />
    </div>
  );
}

export default App;

