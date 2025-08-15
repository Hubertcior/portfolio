import React, { FC } from 'react'
import Image from "next/image";

interface LogoProps {
    src: string;
    alt?: string;
}

const Logo: FC<LogoProps> = ({ src, alt = "Logo" }) => {
    return (
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white relative">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="40px"
            />
        </div>
    )
}

export default Logo
