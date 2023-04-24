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

const db_location = ref(db, '/');
export default function App() {
  const [dataR1,setDataR1] = useState([]);
  const [dataR2,setDataR2] = useState([]);
  const [dataR3,setDataR3] = useState([]);
  onValue(db_location, (snapshot) => {
    if(snapshot.val().R1!==dataR1)setDataR1(snapshot.val().R1);
    if(snapshot.val().R2!==dataR2)setDataR2(snapshot.val().R2);
    if(snapshot.val().R3!==dataR3)setDataR3(snapshot.val().R3);
    });
  return (
    <div>
      <nav className='navBar'>
        <h1>OhmMeter</h1>
      </nav>
      <div className='chart'>
        <div>R1 : {dataR1}</div>
        <div>R2 : {dataR2}</div>
        <div>R3 : {dataR3}</div>
      </div>
    </div>
  )
}

