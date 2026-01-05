import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of full-stack applications and automation tools I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <article 
              key={project.id} 
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-slate-900/50 hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden group border border-gray-100 dark:border-slate-800"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-slate-800">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <span className="text-white font-medium flex items-center gap-2">
                    <Code2 size={16} /> View Details
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="mb-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-300 text-xs font-semibold rounded-md border border-blue-100 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between gap-4">
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;