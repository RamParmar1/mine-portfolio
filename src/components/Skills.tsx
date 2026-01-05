import React from 'react';
import { SKILLS, LEETCODE_URL } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      {/* Decorative background element */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Expertise</span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
             A diverse stack of languages and tools I use to build seamless applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-lg dark:hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-16 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                <i className={`${skill.iconClass} text-5xl`}></i>
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
          
          {/* DSA / LeetCode Card */}
          <a 
            href={LEETCODE_URL}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg dark:hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
             <div className="h-16 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
               <span className="text-4xl font-bold font-mono text-slate-700 dark:text-slate-300 group-hover:text-primary">{'<DSA/>'}</span>
             </div>
             <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Problem Solving</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;