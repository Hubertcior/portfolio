import React from 'react'
import Image from 'next/image';

const STATIC_CONFIG = {
    src : '/images/profile.jpg',
    alt : 'Profile Image',
    priority : true,
};

const SIZES = {
    small : 64,
    medium : 128,
    large : 256,
};

interface ProfileImageProps {
    size?: keyof typeof SIZES;
}

const ProfileImage : React.FC<ProfileImageProps> = ({size = "medium"}) => {

    const imageSize = SIZES[size] || SIZES.medium;

    return (
        <div
            className={`inline-block rounded-full overflow-hidden border-2 border-gray-200`}
            style={{ width: imageSize, height: imageSize }}
        >
            <Image
                src={STATIC_CONFIG.src}
                alt={STATIC_CONFIG.alt}
                priority={STATIC_CONFIG.priority}
                width={imageSize}
                height={imageSize}
            />
        </div>
    )
}
export default ProfileImage;
