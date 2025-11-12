import { useGame } from "../GameContext"

export default function StartScreen() {
    const { startGame } = useGame()
    return (
        <div className="start-screen">
        <h1>Whack a Mole</h1>
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points.</p>
        <p>How many can you get?</p>
        <button onClick={startGame}>Play</button>


        </div>
    )
}