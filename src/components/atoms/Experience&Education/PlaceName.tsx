import React from 'react'

interface IProps {
    name : string
    descripton?: string
}

const PlaceName : React.FC<IProps> = ({name, descripton}) => {
    return (
        <div>
        <p className="text-white font-bold text-xs">{name}</p>
        {descripton && (
            <p className="text-gray-400 text-xs mt-1">{descripton}</p>
        )}
        </div>
    )
}
export default PlaceName
