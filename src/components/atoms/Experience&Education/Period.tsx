import React from 'react'

interface PeriodProps {
    startDate: string;
    endDate: string;
}

const Period : React.FC<PeriodProps> = ({startDate,endDate}) => {
    return (
        <p className="text-gray-300 font-semibold rounded px-3 py-1 text-sm  inline-block">
            {startDate} - {endDate}
        </p>
    )
}
export default Period
