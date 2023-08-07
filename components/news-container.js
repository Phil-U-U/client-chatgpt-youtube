const NewsContainer = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-between text-left text-21xl text-black font-body">
      <div className="flex-1 h-[281px] flex flex-col items-start justify-between min-w-[280px]">
        <div className="self-stretch flex flex-row items-start justify-start">
          <b className="flex-1 relative">Let news flow into your mind</b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-5xl">
          <div className="flex-1 relative">
            <p className="m-0">{`Enjoy the next generation news experience `}</p>
            <p className="m-0">in the era of AI 2.0</p>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-2.5 bg-firebrick rounded-3xs w-[125px] h-[49px] flex flex-row box-border items-center justify-center">
          <b className="relative text-5xl font-body text-white text-center">
            Sign up
          </b>
        </button>
      </div>
      <div className="flex-1 flex flex-row items-center justify-center min-w-[280px]">
        <img
          className="relative w-[280px] h-[278px] object-cover"
          alt=""
          src="/rectangle-1@2x.png"
        />
      </div>
    </div>
  );
};

export default NewsContainer;
