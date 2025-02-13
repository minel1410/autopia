
import {
  House,
  UserRound,
  Inbox,
  Plus,
  BookMarked
} from "lucide-react";


const BottomBar = () => {

    return (
      <div className="w-full bg-black -t h-14 fixed bottom-0 z-50 md:hidden flex items-center justify-between px-4">
        <div className="h-12  w-12 flex flex-col  items-center justify-center rounded-lg">
          <House className="text-white font-extralight" />
          <p className="text-[12px] font-extralight">Home</p>
        </div>
        <div className=" h-12 w-12 flex flex-col  items-center justify-center rounded-lg">
          <BookMarked className="text-white" />
          <p className="text-[12px] font-extralight">Saved</p>
        </div>
        <div className="h-9 w-14 bg-white  flex flex-col  items-center justify-center rounded-lg">
          <Plus className="text-black" />
        </div>
        <div className="h-12 w-12  flex flex-col bg-white items-center justify-center rounded-lg">
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          <Inbox className="text-black" />
          <p className="text-[12px] text-black font-extralight">Inbox</p>
        </div>
        <div className="h-12 w-12 flex flex-col  items-center justify-center rounded-lg">
          <UserRound className="text-white" />
          <p className="text-[12px] font-extralight">Profile</p>
        </div>
      </div>
    );
}

export default BottomBar