"use client"
import Image from 'next/image'
import BrandLogo from '../Assets/Logo.34acbafd97e95a075b553e558063817d.svg'
import { RiEqualizerLine } from 'react-icons/ri'
import { FaShoppingCart } from 'react-icons/fa'
import NavbarSearch from './NavbarSearch/page'
import Hamburger from 'hamburger-react'
import { useEffect, useState } from 'react'
import SideNavbarMenu from '../SideNavbarMenu/page'
export default function Navbar(){
    const [showSideBar , setShowSideBar] = useState(false);
    useEffect(()=>{
        if(showSideBar === true){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='auto'
        }
    },[showSideBar])
    return(
        <>
        <div className=' flex sticky top-0  lg:z-50 gap-2 bg-[#ffffff70] z-50 backdrop-blur-lg'>
                <div className=" flex-1 pt-5 flex gap-3 lg:gap-1 justify-between lg:justify-center " >
                        <div className='flex justify-start items-center sm:items-start  '>
                            <Image src={BrandLogo} alt="logo" className=" h-7 min-h-7 sm:h-9 object-contain"/> 
                        </div>
                        <div className='flex gap-3  sm:gap-6  justify-center sm:justify-end items-center sm:items-start sm:w-3/5'>
                            <div className='hidden lg:block flex-1 '>
                                <NavbarSearch />
                            </div>
                            <div className="flex-col justify-center items-center font-semibold sm:block hidden">
                                <RiEqualizerLine size={25} color="04578D" className='font-thin cursor-pointer '/>
                                <p className='text-[#04578d] text-[10px]'>Stucture</p>
                                <p className='text-[#04578d] text-[10px]'>Search</p>
                            </div>  
                            <div >
                                <p className='translate-y-1 relative cursor-pointer'><FaShoppingCart color="04578D" size={28} /></p>
                                <p className='absolute w-[20px] h-[20px] bg-red-500 rounded-full top-[30px] text-center text-white'>0</p>
                            </div>
                            <div >
                                <button className="bg-[#04578D] text-white rounded-full py-1 px-3 sm:py-2 sm:px-6 text-center text-xs sm:text-sm" >Login</button>
                            </div>
                        </div>
                    </div>
                    <div className=' flex    pt-5 items-center lg:items-start   '>
                            <div className="bg-[#50B9FF] px-4 lg:py-0 lg:px-4 flex items-center  flex-nowrap rounded-l-full  text-[#fff] " type="buttoin">
                                <p className='text-xs lg:text-sm'>Menu</p>
                                <Hamburger  direction="right"size={18} toggle={setShowSideBar} toggled={showSideBar}/>
                            </div>
                    </div>
            </div>
            <div className='block lg:hidden px-4 border-0 py-2 fixed right-0 left-0 z-50 backdrop-blur-lg border-none bg-[#ffffff70] ' >
                <NavbarSearch/> 
            </div>
            <div>
                {   
                    showSideBar &&
                    <div className="fixed top-0 left-0 h-screen   z-30 w-full  px-1 NavSidebar ">
                    <SideNavbarMenu/>
                    </div>
                }
            </div>

        </>
    )
}