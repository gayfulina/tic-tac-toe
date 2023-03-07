import './App.css';
import Header from "./components/Header";

function App() {
    const siteName = "Tic Tac Toe"

  return (
    <div className="App">
    <Header siteName={siteName}/>

    </div>
  );
}

export default App;
