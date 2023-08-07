const NewsCardContainer1 = ({ cardTitle, sectionTitle }) => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-between text-left text-4xl text-firebrick font-helvetica">
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[280px]">
        <b className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase">
          {cardTitle}
        </b>
        <b className="self-stretch relative text-21xl leading-[120%] text-grey-scale-black">
          {sectionTitle}
        </b>
      </div>
      <div className="w-[210px] flex flex-row items-center justify-between">
        <div className="w-[100px] flex flex-row items-center justify-between">
          <img
            className="relative w-[100px] h-[100px]"
            alt=""
            src="/left-button.svg"
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[100px] flex flex-row items-center justify-between">
          <img
            className="relative w-[100px] h-[100px]"
            alt=""
            src="/right-button.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default NewsCardContainer1;
