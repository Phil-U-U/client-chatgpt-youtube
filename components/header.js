const Header = () => {
  return (
    <div className="self-stretch h-[139px] flex flex-row flex-wrap py-5 px-0 box-border items-center justify-between text-left text-13xl text-firebrick font-body">
      <div className="w-[231px] flex flex-row items-center justify-center">
        <b className="flex-1 relative">Exodus News</b>
      </div>
      <div className="w-[251px] flex flex-row items-baseline justify-start text-center text-5xl text-black">
        <div className="flex-1 flex flex-row p-2.5 items-center justify-center">
          <b className="relative">Sign in</b>
        </div>
        <button className="cursor-pointer [border:none] p-2.5 bg-firebrick flex-1 rounded-3xs flex flex-row items-center justify-center">
          <b className="relative text-5xl font-body text-white text-center">
            Sign up
          </b>
        </button>
      </div>
    </div>
  );
};

export default Header;
