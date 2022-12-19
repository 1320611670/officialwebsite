import React,{useState} from 'react'
import './index.css'
import {Route,NavLink,HashRouter } from 'react-router-dom'

function App() {

  return (
      <main>
        <div className='site-title' id="site-title">
            <div className="site-background">
                <h3>你好</h3>
                <h1>欢迎加入改变世界</h1>
                <button className='btn' onClick={()=>{
                  console.log(11111111111)
                }}>加入</button>
            </div>
        </div>

        <div className="container" id="container">
        <div className="t-flx clearfix">
          <div className="label-box">
            <h2>业务架构</h2>
          </div>
        </div>
            <div className="blog">
                <div className="owl-carousel owl-theme blog-post ">
                    <div className="blog-content" >
                    <img src="./assets/rgzn.jpg" />
                        <div className="blog-title">
                            <h3>人工智能</h3>
                        </div>
                    </div>
                    <div className="blog-content">
                        <img src="./assets/xnyx.jpg" />
                        <div className="blog-title">
                            <h3>虚拟游戏</h3>
                        </div>
                    </div>
                    <div className="blog-content" >
                        <img src="./assets/jykx.jpg" />
                        <div className="blog-title">
                            <h3>基因科学</h3>
                        </div>
                    </div>
                    <div className="blog-content">
                        <img  src="./assets/nmcl.jpg" />
                        <div className="blog-title">
                        <h3>纳米材料</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="brand-item white-bg tuanduiguanli pc-tab-brand mobile-tab-brand" id="about-con-5">
      <div className="mod-con clearfix">
        <div className="t-flx clearfix">
          <div className="label-box">
            <h2>管理团队</h2>
          </div>
        </div>
        <div className="team-box clearfix">
          <div className="li li-1" t-name="姚文龙">
            <div className="mess">
              <p className="label">姚文龙</p>
              <div className="job-mess">
                <p>主要创办人</p>
                <p>董事会主席兼首席执行官</p>
              </div>
            </div>
            <div className="pic">
              <img src="./assets/ywl.jpg" alt="img" />
              <i className="block"></i>
            </div>
          </div>
          <div className="li li-2" t-name="姚嘉航">
            <div className="mess">
              <p className="label">姚嘉航</p>
              <div className="job-mess">
                <p>董事会执行董事兼公司总经理</p>
              </div>
            </div>
            <div className="pic">
              <img src="./assets/yjh.jpg" alt="img" />
              <i className="block"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="brand-item pc-tab-brand mobile-tab-brand" id="about-con-6" style={{marginTop:"30px"}}>
      <div className="mod-max-con clearfix culture-wrap">
        <div className="culture-box clearfix">
          <div className="t-box">
            <div className="pic">
				<img className="pc-box" src="./assets/bg.jpg" alt="img" />
			</div>
            <div className="mess-box">
              <div className="t-flx clearfix">
                <div className="label-box">
                  <h3>企业文化</h3>
                </div>
                <div className="b-box">
					<h4 className="item-title">价值观</h4>
					<div className="boxx">
					  <div className="x-item">
						<h5>正直</h5>
						<p className="p">坚守底线，以德为先，坦诚公正不唯上</p>
					  </div>
					  <div className="x-item">
						<h5>进取</h5>
						<p className="p">无功便是过，勇于突破有担当</p>
					  </div>
					  <div className="x-item">
						<h5>协作</h5>
						<p className="p">开放协同，持续进化</p>
					  </div>
					  <div className="x-item">
						<h5>创造</h5>
						<p className="p">超越创新，探索未来</p>
					  </div>
					</div>
				  </div>

              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
    </main>
  );
}

export default App;