import React from 'react'
import './Scan.scss'
import Schedule from '../../components/schedule/Schedule'



const Scan = () => {
  return (
    <div>
     
      <div style={{ margin: "18px 50px", padding: "60px 0", display: 'flex', justifyContent: "center" }}>
        <div class="card" >
          <div class="image-data">
            <div class="background-image"></div>
            <div class="publication-details">
              <a href="" class="author">
                <i class="fas fa-user"></i>
                VENTANA
              </a>
              <spam class="date"><i class="fas fa-calendar-alt"></i> March 30, 2023</spam>
            </div>
          </div>
          <div class="post-data">
            <h1 class="title">Lorem ipsum dolor sit amet.</h1>
            <h2 class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas delectus necessitatibus excepturi ea odit.</h2>
            <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, magni cumque nisi voluptates explicabo ducimus qui magnam ut officia dolorem optio quis quos vel exercitationem sed recusandae asperiores earum doloribus?
            </p>
            <div class="cta">
              <a href="#">Read more &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scan