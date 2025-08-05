'use client'

import React, {FC} from 'react'
import SkillBadge from "@/components/atoms/Skills/SkillBadge";
import { IconType } from 'react-icons'

interface Skill {
    name: string;
    icon: IconType;
    color?: string;
}

interface SkillSectionProps {
    skills: Skill[];
}

const SkillSection : FC<SkillSectionProps> = ({skills}) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-5">
            {skills?.map((skill, index) => (
                <SkillBadge name={skill.name} icon={skill.icon} key={index} colorClass={skill.color}/>
            ))}
        </div>
    )
}
export default SkillSection
