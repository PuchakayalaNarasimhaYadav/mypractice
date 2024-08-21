import Image from "next/image"
import { MdContentPasteSearch, MdDownloadForOffline, MdPictureAsPdf } from "react-icons/md";
import searchicon from '../../Assets/Search_icon.svg'
export default function NavbarSearch(){
    let SerachItems=[
        {
            text:'Catalog Search',
            icon:<MdPictureAsPdf size={20} color="04578D"/>
        },
        {
            text:'COA',
            icon:<MdContentPasteSearch size={20} color="04578D"/>
        },
        {
            text:'Page List',
            icon:<MdDownloadForOffline size={20} color="04578D"/>
        },
    ]
    return(
        <div className="flex flex-col   gap-1 z-40">
            <div className="w-full bg-[#D0DBEE] flex items-center">
                <div className="grow-0 px-2">
                    <Image src={searchicon} alt="logo" className=""/>
                </div>
                <div className="grow">
                    <input type="text" className="bg-[#D0DBEE] w-full outline-none  p-2 rounded-sm  " placeholder='CAS#, Name,Code,Keyword...'/>
                </div>
            </div>
            <div  className=" flex  gap-5  justify-between lg:justify-end  items-center font-semibold cursor-pointer">
                {
                    SerachItems && SerachItems.map((items,id)=>(
                        <div key={id} className="flex gap-1 ">
                            <p  className="  text-[#04578d]  text-sm">{items.text}</p>
                            <p>{items.icon}</p>
                        </div>
                    )) 
                }
            </div>
        </div>
    )
}