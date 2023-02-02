import React from 'react'
import footerimg from "../assets/footer-img.png"
import arrow from '../assets/Arrow.png'

function Footer() {
    return (
        <div className='footer '>
            <div className='relative'>
                <div className='absolute flex justify-between w-full'>
                <ul className='flex flex-col  ml-32 mt-40'>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> <img src={arrow} alt="" /> About</li>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> <img src={arrow} alt="" /> Beers</li>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> <img src={arrow} alt="" /> Food</li>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> <img src={arrow} alt="" /> Shop</li>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> <img src={arrow} alt="" /> Contact</li>
                    <li className='footer-li pb-6 flex gap-5 mt-20'> @coppyright 2021</li>

                </ul>

                <ul className='flex flex-col  mr-32 mt-40'>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> 298,100 Ft Rd,</li>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> Indira Nagar II Stage,</li>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> Bengaluru 560038</li>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> Karnataka</li>

                    <li className='footer-li pb-6 flex gap-5 uppercase'> +91 90197 13388,</li>
                    <li className='footer-li pb-6 flex gap-5 uppercase'> toitblr@toit.in</li>

                    <li className='footer-li pb-6 flex gap-5 mt-20'> All Rights Reserved</li>

                </ul>
                </div>
                <img src={footerimg} alt="" className='footer-image  absolute bottom-0' />

              
            </div>
        </div>

    )
}

export default Footer
Footer