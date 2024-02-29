import React from 'react'
import './Scan.scss'




const Scan = () => {
  return (
    <div>
     <h1  className="mb-5" style={{textAlign: 'center', fontSize:'36px', paddingTop:'20px'}}>Сканер</h1>
      <div style={{ margin: "18px 50px", display: 'flex', justifyContent: "center" }}>
        <div className="card" >
          <div className="image-data">
            <div className="background-image"></div>
            <div className="publication-details">
              <a href="" className="author">
                <i className="fas fa-user"></i>
                VENTANA
              </a>
              <spam className="date"><i className="fas fa-calendar-alt"></i> March 30, 2023</spam>
            </div>
          </div>
          <div className="post-data">
            <h1 className="title">Lorem ipsum dolor sit amet.</h1>
            <h2 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
            <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, magni cumque nisi voluptates explicabo ducimus qui magnam ut officia dolorem optio quis quos vel exercitationem sed recusandae asperiores earum doloribus?
            </p>
            <div className="cta">
              <a href="#">Read more &rarr;</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Scan