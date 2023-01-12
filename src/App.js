
import './App.css';
// import news from './data';
// import trendingItems from './trending';
import Header from './components/Header';
import Main from './components/Main';
import NewsCard from './components/NewsCard';
import TrendingCard from './components/TrendingCard';



function App() {

  const headList = [
    {id: 1, title: "Our story"},
    {id: 2, title: "Membership"},
    {id: 3, title: "Write"},
    {id: 4, title: "Sign in"},
  ];



  const news =[
    {id:"1", 
    img:require('./image/news5.png'), 
    head:"Understanding Long Covid",
    title:"We know more now than before, and it’s still alarming" ,
    isTrending : false, 
    category:"", 
    key:"Long Covid",
    read:"9 min read",
    createdUser:{ Name:"Dr. Tom Frieden", userId:"1", img:require('./image/user1.png')} 
    },
    {id:"2", 
    img:require('./image/news3.png'), 
    head:"Braiding Past into Future",
    title:"Nican Huehcatlahtolli, a New Futurism", 
    date:"Nov 25, 2022", 
    isTrending : true, 
    category:"", 
    key:"Futurism",
    read:"11 min read",
    createdUser:{ Name:"David Bowles", userId:"2", img:require('./image/user2.png')} 
    },
    {id:"3", 
    img:require('./image/news2.png'), 
    head:"Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
    title:"An estranged father reflects on the stigma and surprising prevalence of these family rifts.", 
    date:"Aug 21, 2022", 
    isTrending : true, 
    category:"", 
    key:"Parental Alienation",
    read:"6 min read",
    createdUser:{ Name:"Ed Erginziger", userId:"3", img:require('./image/user3.png')} 
    },
    {id:"4", 
    img:require('./image/news1.png'), 
    head:"ChatGPT Is Having a Thomas Edison Moment",
    title:"Why breakthrough technologies need to be accessible", 
    date:"Dec  8, 2022", 
    isTrending : false, 
    category:"", 
    key:"Gpt 3",
    read:"4 min read",
    createdUser:{ Name:"Thomas Smith", userId:"4", img:require('./image/user4.png')} 
    },
    {id:"5", 
    img:require('./image/news8.png'), 
    head:" Spotify’s Year-End Lists Are the Ultimate Personality Test",
    title:"Why the mass sharing of the music streaming service’s year-end lists is uniquely telling", 
    date:"Dec 6, 2022", 
    isTrending : false, 
    category:"", 
    key:"Music",
    read:"3 min read",
    createdUser:{ Name:"Allegra Hobbs", userId:"5", img:require('./image/user5.png')} 
    },
]



const trendingItems= [
  {
    id:"01",
    img:require("./image/barack.png"),
    name:"Barack Obama",
    text2:"My 2022 End of Year Lists",
    date: "Dec 23, 2022",
    read:"3 min read",
  },
  {
    id:"02",
    img:require("./image/tds.png"),
    name:"Natasha Selvaraj in Towards Data Science",
    text2:"How to Make Money While Learning Data Science in 2023",
    date: "Dec 28, 2022",
    read:"7 min read",
    icon: require("./image/star.png")
  },
  {
    id:'03',
    img:require("./image/maria.png"),
    name:"Maria Milojkovic, MA in Lessons from History",
    text2:"He Used AI to See Today's Looks of The Famous People From the Past",
    date: "Dec 28, 2022",
    read:"10 min read",
    icon:require("./image/star.png")
  },
  {
    id:'04',
    img:require("./image/ttf.png"),
    name:"Yang Zhou in TechToFreedom",
    text2:"9 Python Built-In Decorators That Optimize Your Code Significantly",
    date: "Jan 1, 2022",
    read:"7 min read",
    icon:require("./image/star.png")
  },
  {
    id:'05',
    img:require("./image/hanit.png"),
    name:"Hanif Abdurraqib",
    text2:"100 Favorite Albums of 2022",
    date: "Dec 30, 2022",
    read:"9 min read"
  },
  {
    id:'06',
    img:require("./image/ttf.png"),
    name:"Christopher Clemmons in Level Up Coding",
    text2:"Structure Your React Project Like a Senior Developer",
    date: "Dec 31, 2022",
    read:"3 min read"
  },
]





  return (
    <div className="App">
      <header>
        <div className="container">
          <Header headList={headList} />
        </div>
      </header>
      <main>
        <div className="section-1">
          <div className='container'>
            <Main  />
          </div>
        </div>
        <div className='section-2'>
          <TrendingCard trendingItems={trendingItems} />
        </div>
        <hr className='hr'/>
        <div className='section-3'>
          <div className='news'>
            <NewsCard news={news}/>
          </div>
          <div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
