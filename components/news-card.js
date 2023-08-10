const NewsCard = ({ imageDimensions }) => {
  return (
    <div className="rounded-3xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[300px] flex flex-col items-start justify-start gap-[10px] min-w-[240px] text-left text-base text-black font-roboto border-[1px] border-solid border-gainsboro">
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[258px] shrink-0 object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="self-stretch h-[207px] flex flex-col py-2.5 px-5 box-border items-start justify-start gap-[10px] min-w-[260px]">
        <div className="self-stretch relative font-medium text-firebrick">
          FinTech
        </div>
        <a
          className="self-stretch flex-1 relative text-lg font-medium text-[inherit] flex items-center [text-decoration:none]"
          href={`http://localhost:3000/exodus/detail_article?article_id=f0185d72-c0ab-4cc0-a9a3-ba5fb0d1ed37&article_source=TechCrunch`}
          target="_blank"
        >
          App Store payment rules won’t change as Apple’s battle with Epic Games
          heads to Supreme Court
        </a>
        <div className="self-stretch relative">Alex Wilhelm</div>
        <div className="self-stretch flex flex-row items-start justify-between text-xs text-gray">
          <div className="flex-1 relative">Monday, July 31, 2023</div>
          <button className="cursor-pointer [border:none] p-2.5 bg-black rounded-3xs w-20 h-10 flex flex-row box-border items-center justify-center">
            <b className="flex-1 relative text-xl font-roboto text-white text-center">
              TLDR
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
