import React from 'react'
import SectionBackground from "@/components/atoms/MainProfile/SectionBackground";
import HeaderSection from "@/components/molecules/MainProfile/HeaderSection";
import Status from "@/components/molecules/MainProfile/Status";



const MainProfile = () => {
    return (
        <SectionBackground>
            <div className="relative">
                <HeaderSection/>
                <div className="absolute right-0 top-0">
                    <Status status="available"/>
                </div>
            </div>
        </SectionBackground>
    )
}
export default MainProfile
