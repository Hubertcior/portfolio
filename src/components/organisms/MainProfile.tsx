import React from 'react'
import SectionBackground from "@/components/atoms/SectionBackground";
import HeaderSection from "@/components/molecules/HeaderSection";
import StatusDot from "@/components/atoms/StatusDot";


const MainProfile = () => {
    return (
        <SectionBackground>
            <HeaderSection/>
            <StatusDot status="available" />
        </SectionBackground>
    )
}
export default MainProfile
