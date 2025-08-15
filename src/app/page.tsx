import MainProfile from "@/components/organisms/MainProfile";
import SkillProfile from "@/components/organisms/SkillProfile";
import EducationProfile from "@/components/organisms/EducationProfile";
import ExperienceProfile from "@/components/organisms/ExperienceProfile";

export default function Home() {
  return (
    <div className="font-sans gap-4 min-h-screen pt-2 pb-20 sm:pt-8 sm:pb-20 flex flex-col items-center">
      <div className="flex flex-col gap-16  w-full justify-center items-center">
        <MainProfile />
        <ExperienceProfile />
      </div>
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <SkillProfile />
        <EducationProfile />
      </div>
    </div>
  );
}
