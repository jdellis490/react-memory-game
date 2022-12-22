import React, { useState } from "react";
import { useBetween } from "use-between";
import { Timer } from "./Timer";


const ScoreKeeper = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(JSON.parse(localStorage.getItem('bestscore')));

//   const gameEnd = (card) => {
//       if(Card.length === (card.stat = 'correct')) {
//           const highScore = Math.min(score, bestScore);
//           setBestScore(score);
//           localStorage.setItem('bestScore', highScore);
//       }
//   }

  return (
    <div className="scorekeeper">
      <span>Score:</span> {score}
      <div className="highscore">
        <span>High Score:</span> {bestScore}
      </div>
    </div>
  );
};

export default ScoreKeeper;
