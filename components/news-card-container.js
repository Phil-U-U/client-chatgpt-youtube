import SignUp from "./sign-up";

const NewsCardContainer = () => {
  return (
    <div className="rounded-3xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[360px] h-[480px] flex flex-col items-start justify-start relative gap-[10px] min-w-[260px] text-left text-base text-black font-body border-[1px] border-solid border-gainsboro">
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[258px] shrink-0 object-cover z-[0]"
        alt=""
        src="/news-card-img@2x.png"
      />
      <div className="self-stretch h-[193px] flex flex-col py-2.5 px-[30px] box-border items-start justify-start gap-[20px] z-[1]">
        <b className="self-stretch relative text-xl text-firebrick">FinTech</b>
        <b className="self-stretch relative text-lg">
          TitleTwitter’s rebrand is a go, and we’re Blazing Our Collective Glory
        </b>
        <div className="self-stretch relative">Alex Wilhelm</div>
        <div className="self-stretch relative text-gray">
          Monday, July 31, 2023
        </div>
      </div>
      <SignUp
        buttonText="TLDR"
        signUpPosition="absolute"
        signUpBackgroundColor="#000"
        signUpCursor="pointer"
        signUpBorder="none"
        signUpMargin="0 !important"
        signUpRight="10px"
        signUpBottom="15px"
        signUpZIndex="2"
        signUpDisplay="inline-block"
      />
    </div>
  );
};

export default NewsCardContainer;
