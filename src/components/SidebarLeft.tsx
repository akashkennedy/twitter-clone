import {
  Banknote,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  ChartNoAxesColumn,
  CircleEllipsis,
  Ellipsis,
  ExternalLink,
  House,
  LogOut,
  Mail,
  Plus,
  Search,
  Settings,
  SquareSlash,
  UserRound,
  Users,
  Zap,
} from "lucide-react";
import { ScrollText } from "lucide-react";
import Button from "./Button";

const SidebarLeft = () => {
  return (
    <aside className="font-semibold text-2xl bg-white p-5 max-w-72 h-screen position absolute top-0 left-0 lg:font-normal">
      <div className="flex flex-col gap-3 pb-10 md:hidden lg:hidden">
        <div className="flex justify-between items-center">
          <div className="size-9 rounded-full bg-black"></div>
          <Plus className="rounded-full border" size={30} />
        </div>
        <div>
          <p className="text-lg font-semibold">Full Name</p>
          <p className="text-twitter-gray text-sm font-semibold">@username</p>
        </div>
        <div className="flex gap-4">
          <p className="text-twitter-gray font-medium text-sm">
            <span className="font-semibold text-black mr-1">79</span>Following
          </p>
          <p className="text-twitter-gray font-medium text-sm">
            <span className="font-semibold text-black mr-1">79</span>Follower
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-3">
        <div className="w-full">
          <img
            src="/logo.svg"
            alt=""
            className="hidden size-10 md:block lg:block"
          />
        </div>
        <div className="hidden gap-5 items-center  lg:flex md:flex p-2 rounded-full hover:bg-gray-200 transition">
          <House />
          <span className="md:hidden lg:block">Home</span>
        </div>
        <div className="hidden gap-5 items-center lg:flex md:flex p-2 rounded-full hover:bg-gray-200 transition">
          <Search />
          <span className="md:hidden lg:block">Explore</span>
        </div>
        <div className="hidden gap-5 items-center lg:flex md:flex p-2 rounded-full hover:bg-gray-200 transition">
          <Bell />
          <span className="md:hidden lg:block">Notifications</span>
        </div>
        <div className="hidden gap-5 items-center lg:flex md:flex p-2 rounded-full hover:bg-gray-200 transition">
          <Mail />
          <span className="md:hidden lg:block">Messages</span>
        </div>
        <div className="hidden gap-5 items-center lg:flex md:flex p-2 rounded-full hover:bg-gray-200 transition">
          <SquareSlash />
          <span className="md:hidden lg:block">Grok</span>
        </div>
        <div className="hidden gap-5 items-center lg:flex md:flex p-2 rounded-full hover:bg-gray-200 transition">
          <Users />
          <span className="md:hidden lg:block">Communities</span>
        </div>
        <div className="flex gap-5 items-center p-2 rounded-full lg:hover:bg-gray-200 transition">
          <UserRound />
          <span className="md:hidden lg:block">Profile</span>
        </div>
        <div className="hidden gap-5 items-center lg:flex md:hidden p-2 rounded-full hover:bg-gray-200 transition">
          <CircleEllipsis />
          <span className="md:hidden lg:block">More</span>
        </div>
        <div className="flex gap-5 items-center lg:hidden md:flex p-2 rounded-full hover:bg-gray-200 transition">
          <img src="/logo.svg" alt="" className="size-6" />
          <span className="md:hidden">Premium</span>
        </div>
        <div className="flex gap-5 items-center lg:hidden md:flex p-2 rounded-full hover:bg-gray-200 transition">
          <ScrollText />
          <span className="md:hidden">Lists</span>
        </div>
        <div className="flex gap-5 items-center md:hidden lg:hidden">
          <Bookmark />
          Bookmarks
        </div>
        <div className="flex gap-5 items-center  md:hidden lg:hidden">
          <Zap />
          Verified Orgs
        </div>
        <div className="flex gap-5 items-center md:hidden lg:hidden">
          <ChartNoAxesColumn />
          Analytics
        </div>
        <div className="flex gap-5 items-center md:hidden lg:hidden">
          <Banknote />
          Monetization
        </div>
        <div className="flex gap-5 items-center md:hidden lg:hidden">
          <ExternalLink />
          Ads
        </div>
        <div className="flex gap-5 items-center md:hidden lg:hidden">
          <BriefcaseBusiness />
          Jobs
        </div>
        <div className="flex gap-5 items-center md:hidden lg:hidden">
          <Settings />
          Settings and Privacy
        </div>
        <div className="flex gap-5 items-center md:hidden lg:hidden">
          <LogOut />
          Logout
        </div>
        <Button text="Post" type="filled" className="hidden lg:block" />
      </div>
      <div className="hidden lg:flex justify-between items-center mt-8 p-3 rounded-full hover:bg-gray-200 transition">
        <div className="size-10 rounded-full bg-black"></div>
        <div>
          <p className="text-lg font-semibold">Full Name</p>
          <p className="text-twitter-gray text-sm font-semibold">@username</p>
        </div>
        <Ellipsis />
      </div>
    </aside>
  );
};

export default SidebarLeft;
