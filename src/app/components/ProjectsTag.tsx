import React, { MouseEventHandler } from 'react'

interface Tags {
    name: string;
    onClick: Function;
    isSelected: boolean;
}

const ProjectsTag: React.FC<Tags> = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-white border-primary-800"
        : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>{name}</button>
    )
}

export default ProjectsTag