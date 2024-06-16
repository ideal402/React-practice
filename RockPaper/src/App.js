import { useState } from 'react';
import './App.css';
import Box from './component/Box.js';
const choice = {
  rock:{
    name:"Rock",
    img:'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg',
  },
  scissors:{
    name:"Scissors",
    img:'https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png',
  },
  paper:{
    name:"Paper",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAF4iOhZolbKr57xCwOQ6eJdwNXwNOe7LYSQ&s',
  },
}
function App() {
  const [userSelect, setUserSelect] = useState(null)

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    console.log('tjsxorehla',userChoice);
  }
 
  return (
    <>
      <div className='main'>
        <Box title='You' item={userSelect}/> 
        <Box title='Computer'/>
      </div>
      <div className='main'>
          <button onClick={() => play("scissors")}>가위</button>
          <button onClick={() => play("rock")}>바위</button>
          <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
