import React, {FC} from 'react'
import {LuGithub, LuLinkedin, } from "react-icons/lu";
import {MdOutlineEmail} from "react-icons/md";
import SocialMediaIcon from "@/components/atoms/MainProfile/SocialMediaIcon";

const LinksSection : FC = () => {
    return (
        <div className="flex flex-row gap-2">
            <SocialMediaIcon href="https://github.com/Hubertcior" icon={LuGithub} name="github" />
            <SocialMediaIcon href="https://www.linkedin.com/in/hubert-radziwi%C5%84ski-601a89373/" icon={LuLinkedin} colorClass="text-blue-600" name="linkedin"/>
            <SocialMediaIcon href="mailto:hradziwinski@gmail.com" icon={MdOutlineEmail} name="e-mail" colorClass="text-green-500"/>
        </div>
    )
}
export default LinksSection
