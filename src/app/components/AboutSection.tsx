"use client"
import Image from 'next/image'
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Socket.io</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>2006 - 2014 • Sarasvati Vidya Niketan (Jaipur)</li>
                <li>2014 - 2021 • Tagore Public School (Jaipur)</li>
                <li>2021 - Present • Swami Keshvanand Institute of Technology, Management & Gramothan (Jaipur)</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Participation in Mesohacks 2022 (Devfolio)</li>
                <li>6 weeks Internship using IBM SkillsBuild in Front End Development</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className='text-white' id='about'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about_image.png"
                    width={500}
                    className=''
                    height={500}
                    alt="about image"
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4 mt-3'>About Me</h2>
                    <p className='text-base lg:text-lg'>I am a MERN stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, TypeScript,
                        Next.js , HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.</p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "}Certifications{" "}</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content || null}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection