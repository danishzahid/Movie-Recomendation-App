import React from "react";
import { useState } from "react";
import "./styles.css";

const movieDB = {
  drama: [
    {
      name: "The Shawshank Redemption",
      rating: "IMDb : 9.3/10"
    },
    {
      name: "3 Idiots",
      rating: "IMDb : 8.4/10"
    },
    {
      name: "Swades",
      rating: "IMDb : 8.2/10"
    }
  ],
  action: [
    {
      name: "John Wick",
      rating: "IMDb : 7.4/10"
    },
    {
      name: "No Time to Die",
      rating: "IMDb : 7.3/10"
    },
    {
      name: "Gangs of Wasseypur",
      rating: "IMDb : 8.2/10"
    }
  ],
  comedy: [
    {
      name: "Dhamaal",
      rating: "IMDb : 7.4/10"
    },
    {
      name: "Hera Pheri",
      rating: "IMDb : 8.1/10"
    },
    {
      name: "Dumb and Dumber",
      rating: "IMDb : 7.3/10"
    }
  ],
  scifi: [
    {
      name: "The Matrix",
      rating: "IMDb : 8.7/10"
    },
    {
      name: "2001: A Space Odyssey",
      rating: "IMDb : 8.3/10"
    },
    {
      name: "The Martian",
      rating: "IMDb : 8/10"
    }
  ],
  romcom: [
    {
      name: "Pretty Woman",
      rating: "IMDb : 7.1/10"
    },
    {
      name: "Notting Hill",
      rating: "IMDb : 7.2/10"
    },
    {
      name: "RHTDM",
      rating: "IMDb : 7.5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("scifi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎥Movie Recomendation</h1>
      <p>Select genere and checkout my favs</p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
