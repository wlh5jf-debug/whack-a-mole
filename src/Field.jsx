import { useGame } from "./GameContext";

export default function Field() {
  const { molePlacement, whackMole } = useGame();
  const NUM_HOLES = 9;

  function Hole({ index }) {
    const hasMole = index === molePlacement;

    const handleClick = () => {
      if (hasMole) {
        whackMole();
      }
    };

    return (
      <li
        className={`hole${hasMole ? " mole" : ""}`}
        onClick={handleClick}
      ></li>
    );
  }

  return (
    <ul className="field">
      {[...Array(NUM_HOLES)].map((_, i) => (
        <Hole key={i} index={i} />
      ))}
    </ul>
  );
}