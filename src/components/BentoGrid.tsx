import React from 'react';

const projects = [
    {
        id: 1,
        title: 'Project Alpha',
        description: 'A revolutionary app that changes everything.',
        className: 'md:col-span-2 md:row-span-2',
    },
    {
        id: 2,
        title: 'Beta Dashboard',
        description: 'Data visualization at its finest.',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 3,
        title: 'Gamma Tools',
        description: 'Utilities for the modern web.',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 4,
        title: 'Delta Design',
        description: 'Creative assets and resources.',
        className: 'md:col-span-2 md:row-span-1',
    },
];

export default function BentoGrid() {
    return (
        <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">SELECTED WORK</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`group relative p-6 border border-gray-800 bg-gray-900/50 hover:border-accent transition-colors duration-300 flex flex-col justify-end overflow-hidden ${project.className}`}
                    >
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="text-2xl font-bold mb-2 relative z-10">{project.title}</h3>
                        <p className="text-gray-400 relative z-10">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
