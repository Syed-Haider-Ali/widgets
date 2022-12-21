import React, { useState } from 'react'
import Translate from './components/Translate'
import DropDown from './components/Dropdown'
import Accordian from './components/Accordian'
import Search from './components/Search'
import Route from './components/Route'
import Header from './components/Header'
// import Search from './components/Search2'


const items = [
  {
    title: 'AAA',
    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' 
  },
  {
    title: 'BBB',
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
  },{
    title: 'CCC',
    content:'CCC CCC CCC CCC CCC CCC'
  },{
    title: 'DDD',
    content:'DDD DDD DDD DDD DDD DDD'
  }

]

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'Shades of Blue',
    value: 'blue'
  },
  {
    label: 'Dark purple',
    value: 'purple'
  },
]




const App = ()=>{
  // const [counter, setCounter] = useState(0)

  // const onBtnClick = ()=>{
  //   setCounter(counter + 1)
  // }
  const [selected, setSelected] = useState(options[0])

  // const showAccoridan = ()=>{
  //   if (window.location.pathname === '/')
  //     return <Accordian items={items}/>
  // }
  // const showDropdown = ()=>{
  //   if (window.location.pathname === '/dropdown')
  //     return <DropDown selected={selected} onLabelSelected={setSelected} options={options} label={'select a color'}/>
  // }
  
  // const showList =()=>{
  //   if (window.location.pathname === '/search')
  //     return <Search/>
  // }
   
  // const showTranslate = ()=>{
  //   if (window.location.pathname === '/translate')
  //     return <Translate/>
  // }


  return(
    <div className='container'>
      <Header/>
      <h1>App component</h1>
      {/* <button className='btn btn-primary' onClick={onBtnClick}>Counter</button>
      <h2>Current Count: {counter} </h2> */}
      {/*  */}
      
      {/* {showAccoridan()}
      {showDropdown()}
      {showList()}
      {showTranslate()} */}
      {/* instead this - making a separate route component  */}

      <Route path='/'>
        <Accordian items={items}/>
      </Route>
      <Route path='/dropdown'>
        <DropDown 
          selected={selected} 
          onLabelSelected={setSelected} 
          options={options} 
          label={'select a color'}
        />
      </Route>
      <Route path='/search'>
        <Search/>
      </Route>
      <Route path='/translate'>
        <Translate/>
      </Route>
    
    </div>
  )
}

export default App;