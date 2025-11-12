import { useGame } from "../GameContext";
import Field from "../Field"

export default function PlayScreen(){
    const { score, resetScore } = useGame();

    return (
        <div className="play-screen">
            <div className="scoreboard">
                <h2>Score: {score}</h2>
                <button onClick={resetScore}>Reset</button>
            </div>

            <Field />
            </div>
    )
}

