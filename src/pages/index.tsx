import React, { Component,useState,useEffect} from 'react'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';
import {Route,NavLink,HashRouter,Link} from 'react-router-dom'
import './index.css'
const getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }

 const getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }
const geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  }

function App(props:any) {
    // const [state,setState]= useState(false);
    // useEffect(()=>{
    //     if(window.location.pathname !== '/'){
    //         setState(true)
    //     }
    //     if(window.location.pathname === '/'){
    //         setTimeout(() => {
    //             setState(true)
    //             window.open('/home',"_self")
    //         }, 3000);
    //     }
    // },[])

  return (
    <>
    {
  <nav className="nav">
        <div className="nav-menu flex-row">
            <div className="nav-brand">
                <a href="#" className='text-gray'>官网</a>
            </div>
            <div className="toggle-collapse">
                <div className="toggle-icons">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div>
                <ul className="nav-items">
                    <li className="nav-link" id="home">
                    <Link to="/home.html" onClick={()=>{
                    }}>首页</Link>
                        {/* <a href="/home" id="homename">首页</a> */}
                    </li>
                    <li className="nav-link" id="intro"onClick={()=>{
                    }}>
                    <Link to="/intro.html">简介</Link>
                        {/* <a href="/intro" id="introName">简介</a> */}
                    </li>
                    <li className="nav-link">
                        <a href="#">人才</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">技术支持</a>
                    </li>
                </ul>
            </div>
            <div className="socal text-gray">
                <a href="#"><i className="fab fa-weixin" aria-hidden="true"></i></a>
                <a href="#"><i className="fab fa-weibo" aria-hidden="true"></i></a>
                <a href="#"><i className="fab fa-qq" aria-hidden="true"></i></a>
            </div>
        </div>
    </nav>
  
    }
  {props.children}
</>
  );
}

export default App;