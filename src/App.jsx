
import { useGame } from "./GameContext"
import StartScreen from "./GameScreens/StartScreen"
import PlayScreen from "./GameScreens/PlayScreen";

export default function App() {
    const { playing } = useGame();

    return playing ? <PlayScreen /> : <StartScreen />

  }