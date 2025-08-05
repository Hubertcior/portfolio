import React from 'react'
import PlaceName from "@/components/atoms/Experience&Education/PlaceName";
import Period from "@/components/atoms/Experience&Education/Period";
import Logo from "@/components/atoms/Experience&Education/Logo";

interface InfoBarProps{
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    imageSource: string,
    imageAlt?: string;
}

const InfoBar  = ({name, description, startDate, endDate, imageSource, imageAlt = "logo"} : InfoBarProps) => {
    return (
        <div className="flex flex-row items-center justify-between gap-4 py-2 px-4 rounded-xl shadow-md w-[500px] h-[92px]">
            <div className="flex flex-row items-center gap-4">
                <Logo src={imageSource} alt={imageAlt} />
                <PlaceName name={name} descripton={description} />
            </div>
            <Period startDate={startDate} endDate={endDate} />
        </div>
    )
}
export default InfoBar
