// export default function Header({headList}) {

//     console.log(headList);
//   return (
//         <div className="head">
//             <div className="headLogo">
//                 <a href="#"><img src="https://s3-alpha-sig.figma.com/img/a3db/731f/0b84f1d63879beb7ed83a2f240e82a0c?Expires=1673827200&Signature=TbOOk-XQIhN6n5~r00i5FfnwxmGDqdqJgZTTB0574w9FBvDK4TysmauOqZZ-BOVrkBlxRqH8IN-lm9Ou1XlyjRu8x0mir4wYtJdzlgUmO8Ixuu1m1~yjsG8knqJdLBkAw3B5cdW-LA8d8lcuB6fekL8Qtg8Q0c7smS3aByK7YZ4XVUvkOlLRfpJcWzLeJ8MMIQBrjuIJFM-ATH~cdGtmTGyTePI9jzHsiV8rR9w9sfjYULf0ichu3XGDxR1ZhLp5FssAATG3HlDH2goJGdbkUm53IoA1ZhSb8FgS10ywiH5xDLc13alx0gk11Gbn~rYXwkr5PGxTkK8ioTalcgH3Bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></a>
//             </div>
//             <div className="headerList">
//                 {headList.map((obj) => {
//                     return (
//                         <div key={obj.id}>
//                             <p> {obj.title} </p>
//                         </div>
//                     )
//                 })}
//                 <button className="getstarted">Get started</button>
//             </div>
//         </div>
//   )
// }

export default function Header({
  style,
  onLogin,
  user,
  setUser,
  showModal,
  openModal,
}) {
  const cates = [
    { id: 1, title: "Our story", link: "about" },
    { id: 2, title: "Membership", link: "membership" },
    { id: 3, title: "Write", link: "write" },
    { id: 5, title: "Get started", link: "#" },
    { id: 4, title: "Sign In", link: "#" },
  ];

  return (
    <div style={style} className=" header">
      <div className="container d-flex justify-content-between align-items-center">
        <img
          width={150}
          height={30}
          className="img"
          src={"https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"}
          alt="logo"
        />
        <nav>
          <ul className="d-flex align-items-center">
            {cates.map((a, index) => (
              <>
                <li className="list-item" key={index}>
                  {a.id == 4 ? (
                    user ? (
                      user
                    ) : (
                      <span className="btn btn-primary" onClick={openModal}>
                        {a.title}
                      </span>
                    )
                  ) : (
                    <a className="title" href={a.link}>
                      {a.title}
                    </a>
                  )}
                </li>
              </>
            ))}

            {user && (
              <button className="btn btn-warning" onClick={() => setUser("")}>
                Log Out
              </button>
            )}
          </ul>
        </nav>
      </div>

      {/* <LoginModal
        showModal={showModal}
        onLogin={onLogin}
        setShowModal={openModal}
      /> */}
    </div>
  );
}
