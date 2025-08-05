import React , {FC} from 'react'
import InfoBar from "@/components/molecules/Experience&Education/InfoBar";

const EducationProfile: FC = () => {
    return (
        <div className="shadow-2xl flex flex-col items-start justify-start gap-4 p-6  text-white rounded-lg">
            <h1 className="text-2xl font-medium w-full text-center">Education</h1>
                <InfoBar name="University of Information Technology and Management in Rzeszów, Poland" description="Engineer, IT" startDate="2024" endDate="Present" imageSource="/images/logos/wsiiz.jpeg"/>
        </div>
    )
}
export default EducationProfile
