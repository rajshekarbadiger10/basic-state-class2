import { useState } from "react"; //automatically included by vs code

export default function LudoBoard(){
    let [Moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0});
    let [arr,setarr] = useState(["no moves"]);

    let updateBlue = () => {
        setMoves((prevvalue) => {
            return { ...prevvalue, blue : prevvalue.blue +1}
        });

        setarr([...arr,"blue moved"]);
    }
    let updateYellow = () => {
        setMoves({...Moves, yellow: Moves.yellow +1});
    }
    return(
        <div>
            <p>game begin</p>
            <div className="board">
                <p>{arr}</p>
                <p>Blue moves = {Moves.blue} </p>
                <button style={{bckgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>yellow moves = {Moves.yellow} </p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {Moves.green}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
                <p>Red  moves = {Moves.red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    );
}