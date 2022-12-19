import React from 'react'
function App() {
  return (
    <div className="mod-tab-content">
    <div className="brand-item white-bg pt pc-tab-brand mobile-tab-brand" id="about-con-1">

      <div className="mod-con clearfix fjj">
        <div className="t-flx clearfix">
          <h3 className="mod-m-title">公司简介</h3>
        </div>
        <div className="brief-text-box">
          <h4>执念是一家新兴的互联网科技公司，用创新的产品和服务提升全球各地人们的生活品质。</h4>
          <p className="desc">
            <br/>执念成立于2022年，总部位于中国杭州。公司一直秉承科技改变世界的宗旨。我们是一群不安于现状不甘心默默无为的人，想要建立一个新时代。<br/><br/>执念还提供云计算、广告、金融科技等一系列企业服务，支持合作伙伴实现数字化转型，促进业务发展。<br/>          </p>
          <i className="more-awant-icon"></i>
        </div>
        <div className="m-mission clearfix-mission mobile-tab-brand" id="about-con-2-m">
          <div className="t-flx clearfix clearfix-mission">
            <h3 className="mod-m-title">愿景及使命</h3>
          </div>
          <div className="brief-text-box clearfix-mission">
            <h4>用户为本，科技向善</h4>
            <p className="desc">一切以用户价值为依归，<br/>将社会责任融入产品及服务之中；<br/>推动科技创新与文化传承，<br/>为了天下成为更好的天下，<br/>促进社会的可持续发展。            </p>
          </div>
          <img className="text-bg" src="/img/brief/text-bg.png" alt="img" />
        </div>
        <div className="mission pc-tab-brand" id="about-con-2">
          <div className="l-mess mess">
            <p className="label">愿景及使命</p>
          </div>
          <div className="r-mess mess">
            <p className="label">用户为本，科技向善</p>
            <p className="desc">一切以用户价值为依归，将社会责任融入产品及服务之中；<br/>推动科技创新与文化传承，助力各行各业升级，促进社会的可持续发展。</p>          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;