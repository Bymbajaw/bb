const main1Items= [
    {
      id:"01",
      img:require("./images/1.png"),
      text1:"Barack Obama",
      text2:"My 2022 End of Year Lists",
      date: "Dec 23, 2022",
      read:"3 min read"
    },
    {
      id:"02",
      img:require("./images/2.png"),
      text1:"Natasha Selvaraj in Towards Data Science",
      text2:"How to Make Money While Learning Data Science in 2023",
      date: "Dec 28, 2022",
      read:"7 min read",
      icon:require("./images/star.png")
    },
    {
      id:'03',
      img:require("./images/3.png"),
      text1:"Maria Milojkovic, MA in Lessons from History",
      text2:"He Used AI to See Today's Looks of The Famous People From the Past",
      date: "Dec 28, 2022",
      read:"10 min read",
      icon:require("./images/star.png")
    },
    {
      id:'04',
      img:require("./images/4.png"),
      text1:"Yang Zhou in TechToFreedom",
      text2:"9 Python Built-In Decorators That Optimize Your Code Significantly",
      date: "Jan 1, 2022",
      read:"7 min read",
      con:require("./images/star.png")
    },
    {
      id:'05',
      img:require("./images/5.png"),
      text1:"Hanif Abdurraqib",
      text2:"100 Favorite Albums of 2022",
      date: "Dec 30, 2022",
      read:"9 min read"
    },
    {
      id:'06',
      img:require("./images/6.png"),
      text1:"Christopher Clemmons in Level Up Coding",
      text2:"Structure Your React Project Like a Senior Developer",
      date: "Dec 31, 2022",
      read:"3 min read"
    },
  ]




  export default function Mainitems({main1Items}) {
    console.log(main1Items);
     return (
      <div>
        {/* <img src={main1Items.img} */}
      </div>
    )
  }
  