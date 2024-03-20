import './App.scss'
import salikh from "./assets/salikh-photo.jpg"
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";

function App() {

  return (
    <div className='container'>
      <div className='mainImg'>
        <a href="https://www.instagram.com/salikh_prod/"><img src={salikh} alt="" /></a>
        <h1 className='name'>salikh_prod</h1>
        <p className='forAdd'>Reklama uchun Qong'iroq qiling</p>
        <div className='blocks'>
          <a className='fatherBlocs' href="https://t.me/Salikh_Prood">
            <div className='block'>
              <FaTelegram className='icon'/>
              <div className='blockText'>
                <h3>TELEGRAM</h3>
                <p>reklama uchun Telegram</p>
              </div>
            </div>
          </a>
          <a className='fatherBlocs' href="https://www.youtube.com/@SalikhProd">
            <div className='block'>
              <FaYoutube className='icon'/>
              <div className='blockText'>
                <h3>YOUTUBE</h3>
                <p>Youtube profil</p>
              </div>
            </div>
          </a>
          <a className='fatherBlocs' href="vm.tiktok.com/ZSJnfBAfq">
            <div className='block'>
              <FaTiktok className='icon'/>
              <div className='blockText'>
                <h3>TIKTOK</h3>
                <p>TikTok profil</p>
              </div>
            </div>
          </a>
          <div className='arrow'>
            <SlArrowDown/>
          </div>
          <a type='tel' className='fatherBlocs' href="tel:+998993387777">
            <div className='block'>
              <FaPhoneAlt className='icon icon3'/>
              <div className='blockText'>
                <h3>ALOQA XIZMATI</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
