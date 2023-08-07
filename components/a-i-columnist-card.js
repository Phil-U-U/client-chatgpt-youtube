import { useMemo } from "react";
import SignUp from "./sign-up";

const AIColumnistCard = ({
  propBoxShadow,
  propHeight,
  propFlex,
  propHeight1,
  authorViewsJustifyContent,
  authorViewsGap,
  profileImgIconDisplay,
}) => {
  const aIColumnistCardStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      height: propHeight,
    };
  }, [propBoxShadow, propHeight]);

  const aIColumnistIntroStyle = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight1,
    };
  }, [propFlex, propHeight1]);

  const authorViewsStyle = useMemo(() => {
    return {
      justifyContent: authorViewsJustifyContent,
      gap: authorViewsGap,
    };
  }, [authorViewsJustifyContent, authorViewsGap]);

  const signUp1Style = useMemo(() => {
    return {
      display: profileImgIconDisplay,
    };
  }, [profileImgIconDisplay]);

  return (
    <div
      className="rounded-3xs w-[360px] h-[575px] flex flex-col items-start justify-start min-w-[280px] text-left text-5xl text-grey-scale-black font-body"
      style={aIColumnistCardStyle}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[278px] shrink-0 object-cover"
        alt=""
        src="/profile-img@2x.png"
      />
      <div
        className="self-stretch flex-1 rounded-t-none rounded-b-13xl bg-white shadow-[0px_801px_224px_rgba(0,_0,_0,_0),_0px_513px_205px_rgba(0,_0,_0,_0.01),_0px_288px_173px_rgba(0,_0,_0,_0.03),_0px_128px_128px_rgba(0,_0,_0,_0.04),_0px_32px_71px_rgba(0,_0,_0,_0.05),_0px_0px_0px_rgba(0,_0,_0,_0.05)] flex flex-col p-8 items-start justify-start gap-[32px]"
        style={aIColumnistIntroStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div
            className="self-stretch flex flex-row items-center justify-center gap-[10px]"
            style={authorViewsStyle}
          >
            <b className="flex-1 relative">Christopher Brown</b>
            <div className="relative text-xl leading-[120%] font-helvetica text-firebrick">
              900K Views
            </div>
          </div>
          <div className="self-stretch relative text-lg leading-[160%] text-grey-scale-black-75">
            <p className="m-0">{`Tech Enthusiast & Software Engineer,`}</p>
            <p className="m-0">passionate about technologies</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-4xl text-orange font-helvetica">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <b className="relative leading-[120%]">4.8</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/star-1.svg"
            />
          </div>
          <SignUp
            buttonText="Chat"
            signUpPosition="unset"
            signUpBackgroundColor="#000"
            signUpCursor="pointer"
            signUpBorder="none"
            signUpMargin="unset"
            signUpRight="unset"
            signUpBottom="unset"
            signUpZIndex="unset"
            signUpDisplay="inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default AIColumnistCard;
