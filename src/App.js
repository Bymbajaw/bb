import "./App.css";
// import news from './data';
// import trendingItems from './trending';
import Header from "./components/Header";
import Main from "./components/Main";
import NewsCard from "./components/NewsCard";
import TrendingCard from "./components/TrendingCard";
import news from "./components/data";

function App() {
  const trendingItems = [
    {
      id: "01",
      img: require("./image/barack.png"),
      name: "Barack Obama",
      text2: "My 2022 End of Year Lists",
      date: "Dec 23, 2022",
      read: "3 min read",
    },
    {
      id: "02",
      img: require("./image/tds.png"),
      name: "Natasha Selvaraj in Towards Data Science",
      text2: "How to Make Money While Learning Data Science in 2023",
      date: "Dec 28, 2022",
      read: "7 min read",
      icon: require("./image/star.png"),
    },
    {
      id: "03",
      img: require("./image/maria.png"),
      name: "Maria Milojkovic, MA in Lessons from History",
      text2:
        "He Used AI to See Today's Looks of The Famous People From the Past",
      date: "Dec 28, 2022",
      read: "10 min read",
      icon: require("./image/star.png"),
    },
    {
      id: "04",
      img: require("./image/ttf.png"),
      name: "Yang Zhou in TechToFreedom",
      text2:
        "9 Python Built-In Decorators That Optimize Your Code Significantly",
      date: "Jan 1, 2022",
      read: "7 min read",
      icon: require("./image/star.png"),
    },
    {
      id: "05",
      img: require("./image/hanit.png"),
      name: "Hanif Abdurraqib",
      text2: "100 Favorite Albums of 2022",
      date: "Dec 30, 2022",
      read: "9 min read",
    },
    {
      id: "06",
      img: require("./image/ttf.png"),
      name: "Christopher Clemmons in Level Up Coding",
      text2: "Structure Your React Project Like a Senior Developer",
      date: "Dec 31, 2022",
      read: "3 min read",
    },
  ];

  return (
    <div className="App">
      <header>
        <div className="container">
          <Header
          // style={objStyle}
          // onLogin={onLogin}
          // user={user}
          // setUser={setUser}
          // showModal={showModal}
          // openModal={openModal}
          />
        </div>
      </header>
      <main>
        <div className="section-1">
          <div className="container">
            <Main />
          </div>
        </div>
        <div className="section-2">
          <TrendingCard trendingItems={trendingItems} />
        </div>
        <hr className="hr" />
        <div className="section-3">
          <div className="news">
            <NewsCard news={news} />
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
}

export default App;
