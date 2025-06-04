// import FotosJogador from "./FotosJogador"
// import Habilidades from "./Habilidades"
// import TimeJogador from "./TimeJogador"

// const Cards = ({Fotos, Habilida, Time, Pos}) => {
//     return (
//         <div>
//             <FotosJogador Fotos={Fotos}/>
//             <Habilidades Habilida={Habilida}/>
//             <TimeJogador Time={Time} Pos={Pos}/>
//         </div>
//     )
// }

// export default Cards

import FotosJogador from "./FotosJogador";
import Habilidades from "./Habilidades";
import TimeJogador from "./TimeJogador";
import './Cards.css'; // <-- importante importar o CSS

const Cards = ({ Fotos, Habilida, Time, Pos, Nome }) => {
    return (
        <div className="card">
            <FotosJogador Fotos={Fotos} />
            <div className="card-info">
                <h3 className="nome">{Nome}</h3>
                <TimeJogador Time={Time} Pos={Pos} />
                <Habilidades Habilida={Habilida} />
            </div>
        </div>
    );
};

export default Cards;

