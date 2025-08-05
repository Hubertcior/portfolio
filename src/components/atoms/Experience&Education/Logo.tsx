import React, { FC } from 'react'
import Image from "next/image";

interface LogoProps {
    src: string;
    alt?: string;
}

const Logo: FC<LogoProps> = ({ src, alt = "Logo" }) => {
    return (
        <div className="w-10 h-10 rounded-full overflow-hidden relative bg-white aspect-square">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="40px"
                className="object-contain"
            />
        </div>
    )
}

export default Logo
