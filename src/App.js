import { useState } from 'react';
import { supabase } from './supabaseClient';
/*import React, { useState } from 'react';*/
/*import { Grid } from 'gridjs';*/
/*import "gridjs/dist/theme/mermaid.css";*/
/*import logo from './logo.svg';*/
import './App.css';
/*import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';*/

/*function AlertHeading() {
  return (
    <Alert variant="success">
      <AlertHeading>Hello, welcome to my personal workout tracking webpage!</AlertHeading>
      <p>
        The purpose of this webpage is to store my workout data, and track my progress through comparing data. I am doing this by logging my workouts as I go through the week in a SupaBase table and updating them to my site. I categorized this data into two tables. One table for my plan and what muscle groups I work out on specific days. The other table is where my workout data is stored from whatever day it is and what I completed that day. This data includes the day, workout, how many reps,  how many sets, and the weight in pounds. 
      </p>
      <hr />
      <p className="alert">
        This webpage was done for MI449, advanced Web Development and Databases, as my final project to wrap up the class at Michigan State University. 
      </p>
    </Alert>
  );
}*/

function Welcome() {
  return (
    <div className="Welcome">
      <h1>Tyler's Workout Plan and Progress!</h1>
      <p>The purpose of this webpage is to store my workout data, and track my progress through comparing data. I am doing this by logging my workouts as I go through the week in a SupaBase table and updating them to my site. I categorized this data into two tables. One table for my plan and what muscle groups I work out on specific days. The other table is where my workout data is stored from whatever day it is and what I completed that day. This data includes the day, workout, how many reps,  how many sets, and the weight in pounds.</p>
      <hr />
      <p>This webpage was done for MI449, advanced Web Development and Databases, as my final project to wrap up the class at Michigan State University.</p>
    </div>
  )
}

function Days() {
  return (
    <div className="Before">
      <p>I will start by outlining for you what muscle groups I hit on each weekday in a table format.</p>
    </div>
  )
}

function Table() {
  const [myWorkouts, setMyWorkouts] = useState([]);
  async function getWorkouts() {
    let {data: workouts,} = await supabase
      .from('workouts')
      .select('*')
      setMyWorkouts(workouts);
  }
  getWorkouts();
  return (
    <table className="tableEdit">
      {
        myWorkouts.map(b => (
          <tr>
            <td>{b.day}</td>
            <td>{b.muscle}</td>
          </tr>
        ))
      }
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Welcome />
        <Days />
        <Table />
      </header>
    </div>
  );
}

/*function Card1() {
  return (
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}*/

/*function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <Card1 />
      </header>
    </div>
  );
}*/


export default App;
