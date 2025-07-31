import React, { ReactNode} from 'react'

type SectionBackgroundProps = {
    children: ReactNode;
}

const SectionBackground : React.FC<SectionBackgroundProps> = ({ children }) => {
    return (
        <div className="bg-black rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
            {children}
        </div>
    )
}
export default SectionBackground
