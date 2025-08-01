import React, {FC} from 'react'

interface QuoteCardProps {
    text : string;
}

const QuoteCard : FC<QuoteCardProps> = ({text}) => {
    return (
        <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md max-w-md mx-auto mt-10">
            <p className="text-white text-lg italic text-center">
                {text}
            </p>
        </div>
    )
}
export default QuoteCard
