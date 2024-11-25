import React from 'react'
import rect from '../assets/rect.png'
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import cart from '../assets/cart.png'

export default function HomePageBanner() {
    return (
        <div>
            <div className="banner lg:mx-[43px] relative">
                <div className="w-full h-full z-30">
                    <img src={rect} alt="" className="w-full lg:mt-[47px]  max-h-[400px]  lg:max-h-none h-full object-cover " /> 
                </div>
                <div className="lg:absolute lg:top-0 lg:left-0 absolute top-0 left-0 rounded-t-[50px] z-50 right-0 h-[90px] bannerx  lg:block hidden " >
                    <div className="text-white flex justify-evenly items-center pt-[10px]">
                        <div>
                            <img src={logo} alt="" className='opacity-100'/>
                        </div>
                        <div className="flex gap-5 text-[18px] font-bold items-center">
                            <div>Home</div>
                            <div>Shop</div>
                            <div>Our Story</div>
                            <div>Custom Paddles</div>
                            <div>Join the Team!</div>
                        </div>
                        <div className="flex gap-5">
                            <img src={user} alt="" className="w-[35px] h-[35px]" />
                            <img src={cart} alt="" className="w-[35x] h-[35px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
