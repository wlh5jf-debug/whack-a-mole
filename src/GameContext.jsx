import { createContext, useContext, useState} from "react"

const GameContext = createContext();

export function GameProvider({children}){
    const [playing, setPlaying] = useState(false)
    const [score, setScore] = useState(0)
    const [molePlacement, setMolePlacement] = useState(Math.floor(Math.random() * 9));


const startGame = () => {
    setScore(0)
    setPlaying(true)
    setMolePlacement((Math.floor(Math.random() * 9)))
}

const whackMole = () => {
    setScore(previous => previous + 1)
    setMolePlacement(Math.floor(Math.random() * 9))
}

const resetScore = () => {
    setPlaying(false)
    setScore(0) }


    const value = {playing, score, molePlacement, startGame, whackMole, resetScore};
return ( 
    <GameContext.Provider value={value}>{children}</GameContext.Provider>

)

}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used within a GameProvider");
  return context;
}

