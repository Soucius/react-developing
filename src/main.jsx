import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}

function Header() {
  const headerStyles = {
    color: "red",
    fontSize: "30px",
    textTransform: "uppercase",
  };

  return (
    <div id="header">
      <h1 style={headerStyles}>Header</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        ducimus molestiae consequatur distinctio assumenda reprehenderit
        possimus aliquam! Quaerat quas vel id unde ipsum autem. Iusto optio
        perferendis deserunt sit earum.
      </p>
    </div>
  );
}

function MovieList() {
  const movie_list = [
    {
      id: 1,
      image: "1.jpg",
      title: "Captain America",
      description: "A nice film.",
      is_active: false,
      is_new: true,
    },
    {
      id: 2,
      image: "2.jpg",
      title: "Car Thives",
      description: "A nice film.",
      is_active: false,
      is_new: true,
    },
    {
      id: 3,
      image: "3.jpg",
      title: "The Codes of War",
      description: "A nice film.",
      is_active: true,
      is_new: false,
    },
    {
      id: 4,
      image: "4.jpg",
      title: "Moana 2",
      description: "A nice film.",
      is_active: true,
      is_new: true,
    },
  ];

  return (
    <div>
      <h2 className="title">Movie List</h2>

      {movie_list.filter((m) => m.is_active).length == 0 ? (
        <div>Film not found</div>
      ) : (
        <div id="movie-list">
          {movie_list.map((m, index) => (
            <Movie key={index} movieObj={m} />
          ))}
        </div>
      )}
    </div>
  );
}

function Movie({ movieObj }) {
  return (
    <>
      {movieObj.is_active && (
        <div className="movie">
          <img src={"/img/" + movieObj.image} alt="" />

          <h3 className={`f30 red ${movieObj.is_new ? "new f30" : ""}`}>
            {movieObj.title}
          </h3>

          <p>{movieObj.description}</p>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
