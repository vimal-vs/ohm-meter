import React from 'react';
import { useState } from 'react';
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import db from './utils/firebase'
import { ref, onValue } from "firebase/database";
import './App.css'

const db_location = ref(db, 'values/');
export default function App() {
  const [dataR1, setDataR1] = useState([{r1:5},{r1:2},{r1:3}]);
  const [dataR2, setDataR2] = useState([{r2:1},{r2:5},{r2:7}]);
  const [dataR3, setDataR3] = useState([{r3:4},{r3:9},{r3:6}]);
  const data = [
    {r1:5},{r1:2},{r1:3},{r2:1},{r2:5},{r2:7},{r3:4},{r3:9},{r3:6}
  ];
  onValue(db_location, (snapshot) => {
    // if(dataR1!==snapshot.val().r1)setDataR1(snapshot.val().r1);
    // if(dataR2!==snapshot.val().r2)setDataR2(snapshot.val().r2);
    // if(dataR3!==snapshot.val().r3)setDataR3(snapshot.val().r3);
    });
  return (
    <div>
      <nav className='navBar'>
        <h1>OhmMeter</h1>
      </nav>
      <div className='chart'>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="r1" stroke="#8884d8" />
          <Line type="monotone" dataKey="r2" stroke="#8844d8" />
          <Line type="monotone" dataKey="r3" stroke="#8864d8" />
          <CartesianGrid stroke="#ccc" />
        </LineChart>
      </div>
    </div>
  )
}

