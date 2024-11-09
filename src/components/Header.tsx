const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center sticky top-0 backdrop-blur-xl border-b p-5 flex-wrap md:p-0">
        <div className="md:hidden lg:hidden">
          <div className="size-9 rounded-full bg-black "></div>
        </div>
        <div>
          <img
            src="/logo.svg"
            alt="Logo"
            className="size-9 md:hidden lg:hidden"
          />
        </div>
        <button className="rounded-full bg-violet-700 text-white font-semibold px-2 md:hidden lg:hidden">
          Upgrade
        </button>
        <div className="hidden">
          <input type="search" />
        </div>
        <nav className="flex justify-around items-center h-16 mt-5 w-full md:mt-2">
          <div className="cursor-pointer  font-semibold text-lg">For You</div>
          <div className=" font-semibold text-lg">Following</div>
        </nav>
      </header>
    </>
  );
};

export default Header;
