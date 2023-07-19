"use client"

import { IconType } from 'react-icons';
import { BsCameraReelsFill, BsCollectionPlay } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import {AiOutlineYoutube} from "react-icons/ai"
import {SiYoutubemusic} from "react-icons/si"
import {usePathname, useRouter} from "next/navigation"
 
type SideNavigationProps = {
    
}

interface MenuItem {
    icon:IconType;
    text:string;
    pathname: string;
}

const MenuItem: Array<MenuItem> = [
    {
        icon: HiHome,
        text: "Home",
        pathname: "/",
    },
    {
        icon: BsCameraReelsFill,
        text: "Shorts",
        pathname: "/shorts",
    },
    {
        icon: BsCollectionPlay,
        text: "Subscriptions",
        pathname: "/feed/subscriptions",
    },
    {
        icon: AiOutlineYoutube,
        text: "Originals",
        pathname: "/nothing/originals",
    },
    {
        icon: SiYoutubemusic,
        text: "Youtube Music",
        pathname: "/ganne/music",
    }
]

const SideNavigation:React.FC<SideNavigationProps> = () => {

    const pathname = usePathname()
    console.log("Here is the Pathname", pathname)
    const router = useRouter()
    const handleClickItem = (item: MenuItem) => {
        router.push(item.pathname)
    }
    
    return (
         <div className="p-[4px] lg:px-2 lg:w-[260px]">
            {MenuItem.map(item => (
                <div className={`flex flex-col lg:gap-6 lg:flex-row items-center gap-1 p-3 hover:bg-zinc-700 ${item.pathname === pathname && "bg-zinc-700 hover:bg-zinc-600"} rounded-lg`}
                onClick={() => handleClickItem(item)}
                >
                    <item.icon size={30}/>
                    <span className="text-xs lg:text-base">{item.text}</span>
                </div>
                
            ) )}
        </div>
    )
}
export default SideNavigation;