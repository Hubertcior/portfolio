import React, {FC} from 'react'
import { IconType } from 'react-icons'

type SocialMediaIconProps = {
    icon: IconType;
    colorClass?: string;
    name : string;
}

const SocialMediaIcon : FC<SocialMediaIconProps> = ({icon : Icon, colorClass = "text-white-100", name})  => {
    return (
        <div className="flex flex-col items-center justify-center gap-1 p-1 rounded-lg bg-gray-800 w-20 h-20 cursor-default">
            <Icon className={`w-5 h-5 transition-colors ${colorClass}`} />
            <p>{name}</p>
        </div>
    )
}
export default SocialMediaIcon
