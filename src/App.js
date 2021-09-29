import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Javascript made easy", rating: "4/5" },
    { name: "Javascript everything you need to know", rating: "3.5/5" }
  ],

  fiction: [
    {
      name: "Adventures of Meluha",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Wall Street",
      rating: "3.5/5"
    },
    {
      name: "MoneyControl",
      rating: "5/5"
    }
  ],
  Detective: [
    { name: "Hardy Boys", rating: "4/5" },
    { name: "Nancy Drew Files", rating: "5/5" },
    { name: "Sherlock Homles", rating: "4.5/5" }
  ],

  Fantasy: [
    {
      name: "Lord of the Rings",
      rating: "4.5/5"
    },
    {
      name: "Game of Thrones",
      rating: "4.5/5"
    }
  ],
  Computer: [
    {
      name: "C/C++",
      rating: "4.5/5"
    },
    {
      name: "Java made Easy",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1
        style={{
          padding: "2rem",
          backgroundColor: "#FFD200",
          textAlign: "center",
          color: "yellow",
          borderTopLeftRadius: "2rem",
          borderBottomRightRadius: "2rem"
        }}
      >
        books recommendation
      </h1>

      <div>
        {Object.keys(bookDB).map((booksGenre) => (
          <button
            onClick={() => genreClickHandler(booksGenre)}
            style={{
              background: "#ffffb5",
              borderRadius: "1rem",
              padding: "1rem",
              border: "1px solid yellow",
              margin: "1rem"
            }}
          >
            {booksGenre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                background: "#ffffb5",
                padding: "1rem",
                border: "1px solid yellow",
                margin: "1rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> Name : {book.name} </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                Rating : {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
