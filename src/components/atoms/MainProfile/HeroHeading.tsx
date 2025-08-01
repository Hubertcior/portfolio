import React from 'react'

const STATIC_CONTENT = {
    greeting : "Hi I'm",
    name : "Hubert",
    role : "Frontend Developer",
    location : "from Poland",
} as const

const HeroHeading : React.FC = () => {
    return (
        <h1>
            <span className="block">
                {STATIC_CONTENT.greeting}{" "}
                <span className="text-4xl font-bold">{STATIC_CONTENT.name}</span>
            </span>
            <span className="block text-2xl">
                {STATIC_CONTENT.role} <span className="text-gray-500">|</span>
                <span style={{
                    background: 'linear-gradient(180deg, white 60%, red 40%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                }}>{STATIC_CONTENT.location}</span>
            </span>
        </h1>
    )
}
export default HeroHeading
