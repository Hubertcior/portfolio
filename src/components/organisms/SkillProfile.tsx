'use client'

import React from 'react'
import SkillsHeading from "@/components/atoms/Skills/SkillsHeading";
import SectionBackground from "@/components/atoms/MainProfile/SectionBackground";
import SkillSection from "@/components/molecules/Skills/SkillSection";
import { FaReact, FaHtml5, FaCss3  } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill  } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const skills = [
    {name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
    {name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    {name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    {name: "CSS", icon: FaCss3, color: "text-blue-500" },
    {name: "React", icon: FaReact, color: "text-blue-300" },
    {name: "NextJs", icon: RiNextjsFill, },
    {name: "Tailwind", icon: RiTailwindCssFill, color: "text-sky-400" },
    {name: "Motion", icon: TbBrandFramerMotion, color: "text-purple-500" },
] ;

const SkillProfile = () => {
    return (
        <SectionBackground>
            <SkillsHeading/>
            <SkillSection skills={skills} />
        </SectionBackground>
    )
}
export default SkillProfile
