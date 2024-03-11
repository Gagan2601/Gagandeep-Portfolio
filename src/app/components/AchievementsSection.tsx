"use client";
import React from "react";
import dynamic from "next/dynamic";

interface AnimatedNumbersConfigs {
    type: string;
    duration: number;
}

interface AnimatedNumbersProps {
    includeComma: boolean;
    animateToNumber: number;
    locale: string;
    className: string;
    transitions: (index: number) => AnimatedNumbersConfigs;
}


const AnimatedNumbers = dynamic<AnimatedNumbersProps>(
    () => import("react-animated-numbers") as Promise<{
        default: React.FC<AnimatedNumbersProps>;
    }>,
    { ssr: false }
);

const achievementsList = [
    {
        metric: "Projects",
        value: "10",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100,000",
    },
    {
        metric: "Awards",
        value: "7",
    },
    {
        metric: "Years",
        value: "3",
    },
];

const AchievementsSection = () => {
    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                        >
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                {achievement.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale="en-US"
                                    className="text-white text-4xl font-bold"
                                    transitions={(index: number) => ({
                                        type: "spring",
                                        duration: index + 0.5
                                    })}
                                />
                                {achievement.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchievementsSection;