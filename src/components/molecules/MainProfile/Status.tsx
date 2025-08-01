import React, {FC} from 'react'
import AnimatedStatusBorder from "@/components/atoms/MainProfile/AnimatedStatusBorder";
import StatusDot from "@/components/atoms/MainProfile/StatusDot";

type Status = 'available' | 'busy';

interface IProps {
    status : Status;
}

const Status : FC<IProps> = ({status}) => {

    const ProfileStatus = status;

    return (
        <AnimatedStatusBorder status={ProfileStatus} >
            <StatusDot status={ProfileStatus}/>
        </AnimatedStatusBorder>
    )
}
export default Status
