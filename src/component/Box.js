import React from 'react'
import {useState} from 'react'

const Box = (props) => {
  const [result, setResult] = useState('TIE');
  console.log(props)
  return (
    <div className='box'>
        <div><h2>{[props.title]}</h2></div>
        <img className= 'item-img' src={props.item && props.item.img} />
        <div>{result}</div>
    </div>
  )
}

export default Box

