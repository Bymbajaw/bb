export default function Header({headList}) {

    console.log(headList);
  return (
        <div className="head">
            <div className="headLogo">
                <a href="#"><img src="https://s3-alpha-sig.figma.com/img/a3db/731f/0b84f1d63879beb7ed83a2f240e82a0c?Expires=1673827200&Signature=TbOOk-XQIhN6n5~r00i5FfnwxmGDqdqJgZTTB0574w9FBvDK4TysmauOqZZ-BOVrkBlxRqH8IN-lm9Ou1XlyjRu8x0mir4wYtJdzlgUmO8Ixuu1m1~yjsG8knqJdLBkAw3B5cdW-LA8d8lcuB6fekL8Qtg8Q0c7smS3aByK7YZ4XVUvkOlLRfpJcWzLeJ8MMIQBrjuIJFM-ATH~cdGtmTGyTePI9jzHsiV8rR9w9sfjYULf0ichu3XGDxR1ZhLp5FssAATG3HlDH2goJGdbkUm53IoA1ZhSb8FgS10ywiH5xDLc13alx0gk11Gbn~rYXwkr5PGxTkK8ioTalcgH3Bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></a>
            </div>
            <div className="headerList">
                {headList.map((obj) => {
                    return (
                        <div key={obj.id}>
                            <p> {obj.title} </p>
                        </div>
                    )
                })}
                <button className="getstarted">Get started</button>
            </div>
        </div>
  )
}
