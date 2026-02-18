import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Profile from "../../assets/images/profile.jpg";
import { FaRegUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { MdFullscreen } from "react-icons/md";
import { GoBellFill } from "react-icons/go";

export default function Navbar({ collapsed, setCollapsed }) {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
      {/* Left: Sidebar Toggle */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="mr-4 text-gray-600"
        >
          <Menu size={20} className="text-black" />
        </Button>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative flex gap-5 cursor-pointer p-2 rounded-full">
          <MdFullscreen className="bg-[#E7F9FF] h-9 w-9 rounded-full p-2 text-teal-700"/>
          <GoBellFill size={10} className="bg-[#E7F9FF] h-9 w-9 rounded-full p-2 text-teal-800" />
          <span className="absolute top-1 right-1 h-4 w-4 bg-[#E91E63] text-white text-[10px] flex items-center justify-center rounded-full">
            5
          </span>
        </div>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer h-9 w-9 border border-gray-200">
              <AvatarImage src={Profile} alt="User" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 mt-2 border-none bg-white" align="end">
             {/* Matches the 'Account Setting / Log Out' in screenshot */}
            <DropdownMenuItem className="cursor-pointer">
              <FaRegUser/>
              Account Setting
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <TbLogout />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}