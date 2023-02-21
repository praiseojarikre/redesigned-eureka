import React from 'react'
import {SlSocialInstagram, SlSocialTwitter,SlSocialGoogle} from 'react-icons/sl';
import {TiSocialFacebookCircular,TiSocialYoutube} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='icons'>
      <SlSocialInstagram className='ic'/>
<SlSocialTwitter className='ic'/>
<SlSocialGoogle className='ic'/>
<TiSocialFacebookCircular className='ic'/>
{/* <TiSocialYoutube className='ic'/> */}
        </div>
    </div>
  )
}

export default Footer