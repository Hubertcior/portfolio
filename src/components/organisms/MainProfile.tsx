import React from 'react'
import SectionBackground from "@/components/atoms/MainProfile/SectionBackground";
import HeaderSection from "@/components/molecules/MainProfile/HeaderSection";
import Status from "@/components/molecules/MainProfile/Status";
import QuoteCard from "@/components/atoms/WriteOnceUseEverywhere/QuoteCard";

const MainProfile = () => {
    return (
        <SectionBackground>
            <div className="relative w-full h-full">
                <HeaderSection/>
                <div className="absolute right-0 top-0">
                    <Status status="available"/>
                </div>
                <div className="absolute right-[-100] bottom-[-80] z-50 pointer-events-none select-none -rotate-6 ">
                    <QuoteCard text="Write once, use everywhere."/>
                </div>
            </div>
        </SectionBackground>
    )
}
export default MainProfile
