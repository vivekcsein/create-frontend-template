"use client";

import React, { useState, useEffect } from "react";
import "../../../styles/scss/context/games/CardGames.scss";
type Card = {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const CardGamev1 = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);

  const cardValues = ["🍎", "🍌", "🍇", "🍓", "🍍", "🍒", "🥝", "🍉"];

  // Initialize the cards
  useEffect(() => {
    const shuffledCards = [...cardValues, ...cardValues]
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
  }, []);

  const handleCardClick = (card: Card) => {
    if (card.isFlipped || card.isMatched || flippedCards.length === 2) return;

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);
    setFlippedCards((prev) => [...prev, card]);

    if (flippedCards.length === 1) {
      setMoves((prev) => prev + 1);
      const [firstCard] = flippedCards;

      if (firstCard.value === card.value) {
        // Match found
        setCards((prevCards) =>
          prevCards.map((c) =>
            c.value === card.value ? { ...c, isMatched: true } : c
          )
        );
        setFlippedCards([]);
      } else {
        // No match, flip back after a delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((c) =>
              c.id === firstCard.id || c.id === card.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const shuffledCards = [...cardValues, ...cardValues]
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
  };

  return (
    <div className="memory-game">
      <h1>Memory Game </h1>
      <p> Moves: {moves} </p>
      <div className="grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? "flipped" : ""} ${
              card.isMatched ? "matched" : ""
            }`}
            onClick={() => handleCardClick(card)}
          >
            <div className="front"> {card.value} </div>
            <div className="back">? </div>
          </div>
        ))}
      </div>
      <button onClick={resetGame} className="reset-button">
        Reset Game
      </button>
    </div>
  );
};

export default CardGamev1;
