import MainProfile from "@/components/organisms/MainProfile";
import SkillProfile from "@/components/organisms/SkillProfile";
import EducationProfile from "@/components/organisms/EducationProfile";
import ExperienceProfile from "@/components/organisms/ExperienceProfile";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 grid grid-rows-2 gap-16 justify-items-center items-center">
      <div className="flex flex-col sm:flex-row gap-24 w-full justify-center items-start">
            <MainProfile />
          <ExperienceProfile />
      </div>
      <div className="flex flex-col sm:flex-row gap-24 w-full justify-center items-start">
            <SkillProfile />
          <EducationProfile />
      </div>
    </div>
  );
}
