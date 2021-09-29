import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Javascript made easy", rating: "4/5", author: "Tanay Pratap" },
    {
      name: "Javascript everything you need to know",
      rating: "3.5/5",
      author: "Akshay Saini"
    },
    { name: "Basic of javaScript", rating: "4/5", author: "Akshay Saini" }
  ],

  fiction: [
    {
      name: "Adventures of Meluha",
      rating: "5/5",
      author: "Nitin"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      author: "J.K. Rowling"
    },
    {
      name: "Game of Thrones",
      rating: "4.5/5",
      author: "George R.R. Martin"
    }
  ],
  business: [
    {
      name: "Wall Street",
      rating: "3.5/5",
      author: "Robert"
    },
    {
      name: "MoneyControl",
      rating: "5/5",
      author: "Money Control"
    },
    {
      name: "Outlook",
      rating: "5/5",
      author: "Microsoft"
    }
  ],
  Detective: [
    { name: "Hardy Boys", rating: "4/5", author: "Jim" },
    { name: "Nancy Drew Files", rating: "5/5", author: "Nancy" },
    { name: "Sherlock Homles", rating: "4.5/5", author: "Sherlock" }
  ],

  Fantasy: [
    {
      name: "Lord of the Rings",
      rating: "4.5/5",
      author: "Benedict"
    },
    {
      name: "Game of Thrones",
      rating: "4.5/5",
      author: "George R.R. Martin"
    },
    {
      name: "Adventures of Tin Tin",
      rating: "4.5/5",
      author: "Tin Tin"
    }
  ],
  Computer: [
    {
      name: "C/C++",
      rating: "4.5/5",
      author: "Bjarne Strustroup"
    },
    {
      name: "Java made Easy",
      rating: "4.5/5",
      author: "Ryan Gosling"
    },
    {
      name: "Computer Architecture",
      rating: "4.5/5",
      author: "Sandeep Upadhyay"
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
                Rating : {book.rating} <br />
                Author : {book.author}
                {""}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
