import { PlayButtonComponent } from "./components/PlayButtonComponent";
import "./App.css";

const DraggableArea = () => <div className="draggable"></div>;

function App() {
  return (
    <main className="container">
      <DraggableArea />
      <div className="logo">HyperCore</div>
      <div className="news-section">
        <h2>Notícias</h2>
        <div className="news-item">🔹 Atualização 1.1 chegando em breve!</div>
        <div className="news-item">🔹 Novo sistema de veículos lançado!</div>
      </div>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
      <PlayButtonComponent />
    </main>
  );
}

export default App;
