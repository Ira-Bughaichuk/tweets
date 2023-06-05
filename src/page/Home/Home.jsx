import React from 'react'
import s from './Home.module.scss'
import bg from '../../images/bg-1.jpg';
function Home() {
  return (
        <div className={s.homeContainer}>
            <h1 className={s.title}>Welcome to out tweets</h1>
           <img src={bg} alt="Tweet" className={s.image}/>
        </div>
    
  )
}

export default Home