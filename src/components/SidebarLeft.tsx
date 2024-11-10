import {
  Banknote,
  Bookmark,
  BriefcaseBusiness,
  ChartNoAxesColumn,
  ExternalLink,
  LogOut,
  Plus,
  Settings,
  UserRound,
  Zap,
} from "lucide-react";
import { ScrollText } from "lucide-react";

const SidebarLeft = () => {
  return (
    <aside className="font-semibold text-2xl bg-white p-5 max-w-72 h-screen position absolute top-0 left-0">
      <div className="flex flex-col gap-3  pb-10">
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
      <div className="flex flex-col gap-6">
        <div className="hidden">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="flex gap-5 items-center">
          <UserRound />
          Profile
        </div>
        <div className="flex gap-5 items-center">
          <img src="/logo.svg" alt="" className="size-6" />
          Premium
        </div>
        <div className="flex gap-5 items-center">
          <ScrollText />
          Lists
        </div>
        <div className="flex gap-5 items-center">
          <Bookmark />
          Bookmarks
        </div>
        <div className="flex gap-5 items-center">
          <Zap />
          Verified Orgs
        </div>
        <div className="flex gap-5 items-center">
          <ChartNoAxesColumn />
          Analytics
        </div>
        <div className="flex gap-5 items-center">
          <Banknote />
          Monetization
        </div>
        <div className="flex gap-5 items-center">
          <ExternalLink />
          Ads
        </div>
        <div className="flex gap-5 items-center">
          <BriefcaseBusiness />
          Jobs
        </div>
        <div className="flex gap-5 items-center">
          <Settings />
          Settings and Privacy
        </div>
        <div className="flex gap-5 items-center">
          <LogOut />
          Logout
        </div>
      </div>
    </aside>
  );
};

export default SidebarLeft;
