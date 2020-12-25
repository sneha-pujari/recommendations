import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  FUNNY: [
    {
      name: "Hyperbole and a half",
      rating: "⭐4.5/5"
    },
    {
      name: "Three Men in a boat",
      rating: "⭐3/5"
    }
  ],

  FICTION: [
    {
      name: "The Great Gatsby",
      rating: "⭐3/5"
    },
    {
      name: "Jane Eyre",
      rating: "⭐4/5"
    }
  ],
  THRILLER: [
    {
      name: "Silent Patient",
      rating: "⭐5/5"
    },
    {
      name: "The Girl on the Train",
      rating: "⭐4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("THRILLER");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        <center>Just Books!</center>
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        <center>
          {" "}
          Checkout my favorite books. Select a genre to get started{" "}
        </center>
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#1E3A8A",
              borderRadius: "0.5rem",
              padding: "1rem  1rem",
              border: "2px solid white",
              margin: "1rem 0.3rem",
              width: "10rem",
              color: "white",
              alignContent: "center"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "2rem",
                border: "1px solid #D1D5DB",
                width: "90%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
