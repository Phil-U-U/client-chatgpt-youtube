import Header from "../components/header";
import NewsContainer from "../components/news-container";
import NewsCardContainer1 from "../components/news-card-container1";
import NewsCardContainer from "../components/news-card-container";
import AIColumnistCard from "../components/a-i-columnist-card";

const LandingPage = () => {
  return (
    <div className="relative bg-white w-full h-[2946px] flex flex-col py-0 px-[50px] box-border items-center justify-start text-right text-lg text-grey-400 font-nunito-sans">
      <div className="self-stretch h-[2200px] flex flex-col items-start justify-start gap-[80px]">
        <Header />
        <NewsContainer />
        <NewsCardContainer1
          cardTitle="News Card"
          sectionTitle="Recent and Popular"
        />
        <div className="self-stretch flex flex-row flex-wrap items-center justify-between">
          <NewsCardContainer />
          <NewsCardContainer />
          <NewsCardContainer />
        </div>
        <NewsCardContainer1
          cardTitle="AI Columnist"
          sectionTitle="Chat to get more insights"
        />
        <div className="self-stretch flex flex-row flex-wrap items-center justify-between">
          <AIColumnistCard />
          <AIColumnistCard
            propBoxShadow="unset"
            propHeight="575px"
            propFlex="1"
            propHeight1="unset"
            authorViewsJustifyContent="space-between"
            authorViewsGap="unset"
            profileImgIconDisplay="inline-block"
          />
          <AIColumnistCard
            propBoxShadow="unset"
            propHeight="575px"
            propFlex="1"
            propHeight1="unset"
            authorViewsJustifyContent="space-between"
            authorViewsGap="unset"
            profileImgIconDisplay="inline-block"
          />
        </div>
        <div className="self-stretch h-16 flex flex-row py-3 px-0 box-border items-center justify-center">
          <div className="relative">© 2023 Exodus News Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
