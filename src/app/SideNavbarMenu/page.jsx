'use client'
import { FaLongArrowAltRight } from "react-icons/fa";
import ProductsMenu from "./ProductsMenu/page";
import ResourcesMenu from './ResourcesMenu/page'
import { useState } from "react";
export default function SideNavbarMenu(){
    const [displayMenu, setDisplayMenu] = useState(null)
    let NavItems=[
        {
            id:1,
            num:'01',
            icon:<FaLongArrowAltRight />,
            Title:'Home'
        },
        {
            id:2,
            num:'02',
            icon:<FaLongArrowAltRight />,
            Title:'Products'
        },
        {   id:3,
            num:'03',
            icon:<FaLongArrowAltRight />,
            Title:'Resources'
        },
    ]
    const toggleMenu = (menuTitle) => {
        setDisplayMenu(menuTitle === displayMenu ? null : menuTitle);
    };
    return(
        <div className="flex flex-col lg:flex-row p-3 h-[85vh] overflow-auto mt-20">
            <div className=" p-10  z-30 flex flex-col justify-center gap-10   flex-0">
                {
                    NavItems && NavItems.map((item,index)=>(
                        <div key={index}> 
                            <p className="font-medium">{item.num}</p>
                            <div className="flex items-center gap-4">
                                <p >{item.icon}</p>
                                <p className="lg:text-5xl text-4xl font-light cursor-pointer" onClick={() => toggleMenu(item.Title)}>{item.Title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {displayMenu === 'Products' && 
                <div className="flex-1">
                <ProductsMenu />
                </div>
            }
            {
            displayMenu === 'Resources' && 
                <div>
                    <ResourcesMenu />
                </div>
            }
        </div>
    )
}