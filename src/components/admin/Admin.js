import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
// import { setDatasets } from 'react-chartjs-2/dist/utils';

export default function Admin() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch((response) => response.json()).then((dt) => {
      console.log(dt.news);
      setData(dt.news);
    });
  });
  return <div>
    <Pie />
  </div>;
}
