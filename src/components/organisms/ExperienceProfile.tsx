import React from 'react'
import InfoBar from "@/components/molecules/Experience&Education/InfoBar";

interface InfoBarItems{
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    imageSource: string;
    imageAlt?: string;
}

interface InfoBarItem{
    items: InfoBarItems[];
}

const infoBarItems: InfoBarItems[] = [{
    name : "Mobitouch",
    description: "Trainee",
    startDate: "July 2025",
    endDate: "September 2025",
    imageSource: "/images/logos/mobitouch.svg",
},]

const WorkExperience= () => {
    return (
        <div className="shadow-2xl flex flex-col items-start justify-start gap-4 p-6  text-white rounded-lg">
            <h1 className="text-2xl font-medium w-full text-center">Work Experience</h1>
            {infoBarItems.map((item, index) => (
                <InfoBar
                    key={index}
                    name={item.name}
                    description={item.description}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    imageSource={item.imageSource}
                    imageAlt={item.imageAlt}
                />
            ))}
        </div>
    )
}
export default WorkExperience
