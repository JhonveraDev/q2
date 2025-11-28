import facebook from '../../assets/images/global/facebook.svg';
import linkedin from '../../assets/images/global/linkedin.svg';
import instagram from '../../assets/images/global/instagram.svg';
import youtube from '../../assets/images/global/youtube.svg';
import spotify from '../../assets/images/global/spotify.svg';
import tiktok from '../../assets/images/global/tiktok.svg';


export const Footer = () => {
  return (
    <div className="footer">
      <p className='footer-title'>Follow us</p>
      <div className='footer-container'>
        <div className='social-networks'>
          <a href=""><img src={facebook} alt="" /></a>
          <a href=""><img src={linkedin} alt="" /></a>
          <a href=""><img src={instagram} alt="" /></a>
          <a href=""><img src={youtube} alt="" /></a>
          <a href=""><img src={spotify} alt="" /></a>
          <a href=""><img src={tiktok} alt="" /></a>
        </div>
        <a href=''>© 2025 Qargo Coffee. All rights reserved.</a>
        <a href=''>Privacy Policy</a>
        <a href=''>Terms of Use</a>
      </div>
    </div>
  )
}
