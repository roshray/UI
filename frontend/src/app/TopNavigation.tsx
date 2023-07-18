import {BsYoutube, BsMicFill} from "react-icons/bs"
import {HiOutlineMenu} from "react-icons/hi"
import {GrSearch} from "react-icons/gr"

type TopNavigationProps = {

}

const TopNavigation:React.FC<TopNavigationProps> = () => {
    
    return (
        <div className="flex justify-between items-center border-2 border-red-500 p-4">
            <div className="flex items-center gap-6">
                <HiOutlineMenu size={26}/>
                <div className="flex gap-1 items-center">
                    <BsYoutube size={30} className="text-red-500"/>
                    <span className="text-xl font-semibold">
                        YouTube
                    </span>
                </div> 
            </div>
            <div className="hidden md:flex gap-2 min-w-[300px] lg:w-[620px]">
                <div className="flex w-full">
                    <input 
                        placeholder="search" 
                        className="px-4 py-2 text-zinc-200 bg-zinc-900 rounded-bl-full rounded-tl-full border-[1px] border-zinc-700 placeholder:text-zinc-400 focus:bg-black focus:outline-none focus:ring-[1px] focus:ring-sky-500" 
                    />
                    <div className="bg-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full">
                        <GrSearch size={20}/>
                    </div>

                    <div className="flex items-center bg-zinc-800 rounded-full p-4 hover:bg-zinc-500 cursor-pointer">
                        <BsMicFill />
                    </div>
                </div>
            </div>
            <div className="border border-green-500">USER</div>
        </div>
    )
}

export default TopNavigation