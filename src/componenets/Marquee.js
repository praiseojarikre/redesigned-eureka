import React from 'react'
import Marquee from 'react-fast-marquee';

const Marque = () => {
     let salesInfo = 'ππ₯»π₯»π₯»Flash sales!!! π π π‘π’πππ'
 return (
    <div>
    <Marquee speed={70} gradient={false} style={{backgroundColor:'pink', color:'white'}} >
    <h2> {salesInfo}</h2>
    </Marquee>
    </div>
  )
}

export default Marque