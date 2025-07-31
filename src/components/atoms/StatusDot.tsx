import React, {FC} from 'react'
import clsx from "clsx";

type Status = 'available' | 'busy';

type StatusDotProps = {
    status: Status;
}

const statusColor : Record<Status, string> = {
    available : 'bg-green-500',
    busy : 'bg-red-500',
}

const StatusDot : FC<StatusDotProps> = ({status}) => {
    return (
        <div className="flex flex-row items-center">
            <span
            className={clsx(
                'w-3 h-3 rounded-full',
                statusColor[status],
            )}
            />
            <span className="ml-2 text-sm">
                {status === 'available' ? 'Open to work' : 'Busy'}
            </span>
        </div>
    )
}
export default StatusDot
