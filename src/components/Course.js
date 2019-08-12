import React from 'react';
import Harj1 from './Harj1.js';
import List from './List.js';
import Table from './table.js';
import Lessons from './lessons.js';

const part1header = "React alkeet, osa 1";
const part1date = "12.8.2019";
const part1content = ["Create_react_app", "Git bash", "JSX", "DOM", "BReak it", ".map", "Propsit toiminnasta"];

const headers = ["Kurssi", "Opettaja", "Luokka"];
const contents = [["JavaScript", "Tiina Partanen", "B2074"], ["Java", "Eerikki Maula", "B2069"]];

const Course = () => {
  return (
    <div className="">
      <Harj1 name="Toni Simoska" email="toni.simoska@edu.tampere.fi" link="google.com" time={Date()} />
      <br />
      <List header={part1header} date={part1date} content={part1content} />
      <br />
      <Table headers={headers} contents={contents} />
      <br />
      <Lessons />
    </div>
  );
}
export default Course;
