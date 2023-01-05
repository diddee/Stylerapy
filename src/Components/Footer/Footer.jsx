import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='left'>
            <div className='Location'>
                <h4>
                <HomeIcon className='Icon'/>
                </h4>
                <p>Lagos, Nigeria.</p>
            </div>
            <div className='Location'>
                <h4>
                <MailOutlineIcon className='Icon'/>
                </h4>
                <p>stylerapy@gmail.com</p>
            </div>
        </div>
        <div className='Right'>
            <h3>FOLLOW US..</h3>
            <p>Get Free Shipping on all your orders above N50,000 spend!</p>

            <div>
                <a href="https:facbook.com/deola lawale">
                    <FacebookIcon className='Icon'/>
                </a>
                <a href="https://twitter.com/diddee">
                    <TwitterIcon className='Icon'/>
                </a>
                <a href="https://instagram.com/_ddidee">
                    <InstagramIcon className='Icon'/>
                </a>
            </div>
        </div>
        <div className='Copyright'>
            © 2022 Stylerapy... Made with ❤ by Ddidee
        </div>

      
    </div>
  )
}

export default Footer
