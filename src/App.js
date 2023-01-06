
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Mainitems from './components/Mainitems';
function App() {

  const headList = [
    {id: 1, title: "Our story"},
    {id: 2, title: "Membership"},
    {id: 3, title: "Write"},
    {id: 4, title: "Sign in"},
  ];




  return (
    <div className="App">
      <header>
        <div className="container">
          <Header headList={headList} />
        </div>
      </header>
      <main>
        <div className="container">
          <Main  />
        </div>
        <Mainitems />
      </main>
    </div>
  );
}

export default App;
