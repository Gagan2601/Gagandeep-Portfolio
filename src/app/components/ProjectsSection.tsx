"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectsTag from './ProjectsTag'
import { motion, useInView } from "framer-motion";

const projectData = [
    {
        id: 0,
        title: "Hacker Hire Website",
        description: "Hacker Hire is a real-time technical interview platform featuring a collaborative code editor, video conferencing, AI-based monitoring, and a shared whiteboard for diagram-based problem solving.",
        image: "/images/projects/hacker-hire.png",
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/Gagan2601/hacker-hire',
        previewUrl: 'https://hacker-hire-one.vercel.app/',
    },
    {
        id: 1,
        title: "ShadowTalk Website",
        description: "Introducing ShadowTalk – an anonymous public and private chat room app. Enjoy secure, private conversations with no data storage. Join the community and chat freely, knowing your privacy is protected.",
        image: "/images/projects/shadowtalk.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: 'https://github.com/Gagan2601/Shadow-Talk',
        previewUrl: 'https://shadow-talk.vercel.app/',
    },
    {
        id: 2,
        title: "Amazon Clone Website",
        description: "Discover the ultimate online shopping experience with our Amazon Clone! From tech gadgets to fashion trends, explore a vast range of products in an intuitive, user-friendly interface.",
        image: "/images/projects/amazon_clone.png",
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/Gagan2601/amazon-frontend',
        previewUrl: '',
    },
    {
        id: 3,
        title: "Smart Brain Website",
        description: "Welcome to Smart Brain – your go-to for flawless facial detection in images! Uncover the power of cutting-edge technology as we seamlessly identify and analyze faces with precision.",
        image: "/images/projects/magic_brain.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: 'https://github.com/Gagan2601/face-recognition',
        previewUrl: 'https://brain-magic.netlify.app/',
    },
    {
        id: 4,
        title: "NetFilms Website",
        description: "Welcome to NetFilms – your ultimate guide to the hottest trends on Netflix! Dive into a curated collection of the latest and greatest videos, ensuring you're always in the know about the most talked-about content.",
        image: "/images/projects/netFilms.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: 'https://github.com/Gagan2601/NetFilms-Next-Ts',
        previewUrl: 'https://net-films-next-ts.vercel.app/',
    },
    {
        id: 5,
        title: "iNotebook Website",
        description: "Meet iNotebook – your digital notepad for quick and easy note-taking. Jot down ideas effortlessly, stay organized, and have your thoughts at your fingertips.",
        image: "/images/projects/iNotebook.png",
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/Gagan2601/iNotebook',
        previewUrl: '',
    },
    {
        id: 6,
        title: "DailyNews Website",
        description: "Welcome to DailyNews, your global news hub offering a one-stop destination for updates from around the world. Dive into a diverse array of categories, from breaking headlines to in-depth features, ensuring you're well-informed on the latest events.",
        image: "/images/projects/newsapp.png",
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/Gagan2601/newsapp',
        previewUrl: '',
    },
    {
        id: 7,
        title: "AI Text Editor Website",
        description: "Introducing our AI powered Text Editor – a versatile tool for transforming your text effortlessly! Edit your content with precision, whether it's converting to uppercase, lowercase, or even reversing the text.",
        image: "/images/projects/textEditor.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: 'https://github.com/Gagan2601/text-editor',
        previewUrl: 'https://text-editor-gagan2601.vercel.app/',
    },
    {
        id: 8,
        title: "Todo App",
        description: "The Todo App is a simple yet powerful task management application designed to help users organize their daily activities effectively. With a clean and intuitive user interface, this app allows users to create and delete tasks effortlessly.",
        image: "/images/projects/todo_app.png",
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/Gagan2601/Todo-app',
        previewUrl: 'https://todo-app-lyart-xi.vercel.app/',
    },
];


const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const handleTagChange = (newTag: any) => {
        setTag(newTag);
    }
    const filterProjects = projectData.filter((projects) =>
        projects.tag.includes(tag)
    )
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectsTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectsTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectsTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filterProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSection