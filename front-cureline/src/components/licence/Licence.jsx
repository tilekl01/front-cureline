import React, { useEffect, useState } from 'react'
import "./Licence.css"



const Licence = () => {

  const styles = {
        width: '450px',
        height: '550px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',
        paddingRight: '50px',
        backgroundColor: 'white',

        display: 'flex',
        boxShadow: '0px 0px 10px #ccc',
        borderRadius: '1px',
        '@media (min-width: 600px)': {
          width: '50%',
        },
        '@media (min-width: 900px)': {
          width: '33.33%',
        },
      };
    



   
  



    return (

        <div className='main'>

    <h1  className="mb-5" style={{fontSize: "36px"}}    >Лицензия</h1>
  
    <div className='flex-container images-list' style={{ display: '-webkit-inline-box', textAlign: 'center' }}>
       <div>
         <img
          className="imglic"
          style={styles}
          src='https://zamaninvest.kg/wp-content/uploads/2017/09/%D0%A1%D0%BA%D0%B0%D0%BD0005.jpg'
          alt='License Image'
        />

       </div>
    </div>
    <div className='flex-container images-list' style={{ display: '-webkit-inline-box', textAlign: 'center' }}>
       <div>
         <img
          className="imglic"
          style={styles}
          src='https://zamaninvest.kg/wp-content/uploads/2017/09/%D0%A1%D0%BA%D0%B0%D0%BD0005.jpg'
          alt='License Image'
        />

       </div>
    </div> <div className='flex-container images-list' style={{ display: '-webkit-inline-box', textAlign: 'center' }}>
       <div>
         <img
          className="imglic"
          style={styles}
          src='https://zamaninvest.kg/wp-content/uploads/2017/09/%D0%A1%D0%BA%D0%B0%D0%BD0005.jpg'
          alt='License Image'
        />

       </div>
    </div>
    </div>
  );
};



export default Licence;

