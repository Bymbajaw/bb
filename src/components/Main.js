export default function Main() {
  return (
        <div className="main">
            <div className="mainstay">
                <h1>Stay curious.</h1>
                <p>Discover stories, thinking, and expertise from writers on any topic.</p>
                <button className="startreading">Start reading</button>
            </div>
            <div className="mainimg">
                <img src={require("../image/svg.png")} alt="" />
            </div>
        </div>
  )
}
