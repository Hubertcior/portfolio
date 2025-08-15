import { motion } from 'framer-motion';
import { useState } from 'react';
import { IconType } from 'react-icons';

type SocialMediaIconProps = {
    icon: IconType;
    colorClass?: string;
    name: string;
};

const SocialMediaIcon = ({ icon: Icon, colorClass = "text-white-100", name }: SocialMediaIconProps) => {
    const MotionIcon = motion(Icon);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="flex flex-col items-center justify-center gap-1 p-1 rounded-lg bg-gray-800 w-20 h-20 cursor-default"
        >
            <MotionIcon
                className={`w-5 h-5 transition-colors ${colorClass}`}
                animate={isHovered ? { y: [0, -8, 0] } : { y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    repeat: isHovered ? Infinity : 0,
                }}
            />
            <p>{name}</p>
        </motion.div>
    );
};

export default SocialMediaIcon;