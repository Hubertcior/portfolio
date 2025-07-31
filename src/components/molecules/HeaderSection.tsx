import React from 'react'
import ProfileImage from "@/components/atoms/ProfileImage";
import HeroHeading from "@/components/atoms/HeroHeading";
import LinksSection from "@/components/molecules/LinksSection";


const HeaderSection : React.FC = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <ProfileImage/>
            <div className="flex flex-col">
                <HeroHeading/>
                <div className="mt-2">
                    <LinksSection/>
                </div>
            </div>
        </div>
    )
}
export default HeaderSection
