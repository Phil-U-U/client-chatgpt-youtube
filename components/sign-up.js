import { useMemo } from "react";

const SignUp = ({
  buttonText,
  signUpPosition,
  signUpBackgroundColor,
  signUpCursor,
  signUpBorder,
  signUpMargin,
  signUpRight,
  signUpBottom,
  signUpZIndex,
  signUpDisplay,
}) => {
  const signUpStyle = useMemo(() => {
    return {
      position: signUpPosition,
      backgroundColor: signUpBackgroundColor,
      cursor: signUpCursor,
      border: signUpBorder,
      margin: signUpMargin,
      right: signUpRight,
      bottom: signUpBottom,
      zIndex: signUpZIndex,
    };
  }, [
    signUpPosition,
    signUpBackgroundColor,
    signUpCursor,
    signUpBorder,
    signUpMargin,
    signUpRight,
    signUpBottom,
    signUpZIndex,
  ]);

  const signUp1Style = useMemo(() => {
    return {
      display: signUpDisplay,
    };
  }, [signUpDisplay]);

  return (
    <div
      className="relative rounded-3xs bg-firebrick w-[100px] h-10 flex flex-row p-2.5 box-border items-center justify-center text-center text-lg text-white font-body"
      style={signUpStyle}
    >
      <b className="flex-1 relative" style={signUp1Style}>
        {buttonText}
      </b>
    </div>
  );
};

export default SignUp;
