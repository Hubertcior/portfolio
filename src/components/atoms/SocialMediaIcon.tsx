import React, {FC} from 'react'
import { IconType } from 'react-icons'
import Link from "next/link";

type SocialMediaIconProps = {
    href: string;
    icon: IconType;
    colorClass?: string;
    name : string;
}

const SocialMediaIcon : FC<SocialMediaIconProps> = ({href, icon : Icon, colorClass = "text-white", name})  => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 p-1 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <Icon className={`w-5 h-5 transition-colors ${colorClass}`} />
            <p>{name}</p>
        </Link>
    )
}
export default SocialMediaIcon
