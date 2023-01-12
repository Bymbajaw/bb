
import './App.css';
import news from './data';
import trendingItems from './trending';
import Header from './components/Header';
import Main from './components/Main';
import Mainitems from './components/Mainitems';
import NewsCard from './components/NewsCard';
import TrendingCard from './components/TrendingCard';



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
        <div className='section1'>
          <div className='trendingItems'>
            {trendingItems.map((obj)=> {
              console.log(obj);
              return <TrendingCard {...obj} />
            })}
          </div>
        </div>
        <div className='section2'>
          <div className='news'>
            {news.map((obj)=> {
              console.log(obj);
              return <NewsCard {...obj} />
            })}
          </div>
          <div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
