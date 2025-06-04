// const TimeJogador = ({Time, Pos}) => {
// return(
//     <p>Time: {Time} Posição: {Pos}</p>
// )
// }

// export default TimeJogador

const TimeJogador = ({ Time, Pos }) => (
    <p className="time-pos">
        Time: {Time} <br />
        Posição: {Pos}
    </p>
);

export default TimeJogador;

