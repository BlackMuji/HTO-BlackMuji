import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': '1',
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': '2',
  'image': 'https://placeimg.com/64/64/any',
  'name': '고길동',
  'birthday': '123456',
  'gender': '남자',
  'job': '의사'
},
{
  'id': '3',
  'image': 'https://placeimg.com/64/64/any',
  'name': '김길동',
  'birthday': '112233',
  'gender': '남자',
  'job': '교수'
},]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {return (<Customer id={c.id} image={c.image} name={c.name} birthday={c.birthday} job={c.job}/> ); })
        }
      </div>
    )
  };
}

export default App;