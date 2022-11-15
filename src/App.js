import "./App.css";
import PictureOfTheDay from "./PictureOfTheDay";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Astronomy Picture of the Day</h1>
          <p>
            Discover the cosmos! Each day a different image or photograph of our
            fascinating universe is featured, along with a brief explanation
            written by a professional astronomer.
          </p>
        </header>
        <main>
          <PictureOfTheDay />
        </main>
      </div>
    </div>
  );
}
