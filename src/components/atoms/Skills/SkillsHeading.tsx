import React from 'react'
import { BsStack } from "react-icons/bs";

const STATIC_SKILLS_HEADING = "My stack" as const;

const SkillsHeading = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-4 ">
            <BsStack/>
            <h1 className="text-white text-3xl font-bold">{STATIC_SKILLS_HEADING}</h1>
            <BsStack/>
        </div>
    )
}
export default SkillsHeading
