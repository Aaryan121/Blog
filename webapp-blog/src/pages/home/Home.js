import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'

const Home = () => {
  return (
    <>
        <Header/>
        <div className="home">
          <Posts />
          <Sidebar/>
        </div>
    </>
  )
}

export default Home;