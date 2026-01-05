import React from 'react';
import { User, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-gray-50 dark:bg-slate-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-slate-700">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            I’m a 3rd-year <span className="font-semibold text-slate-900 dark:text-white">BCA student (6th semester)</span> experienced 
            in full-stack development. My journey involves building Travel Management Systems using both <span className="font-semibold text-slate-900 dark:text-white">PHP/MySQL</span> and the <span className="font-semibold text-slate-900 dark:text-white">MERN stack</span>. 
            I have a knack for automation, having created agents with n8n + LangChain, and I am trying to actively contribute Python projects to GitHub. 
            Currently, I am sharpening my skills in <span className="font-semibold text-slate-900 dark:text-white">Data Structures & Algorithms (DSA)</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
             <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-300 rounded-xl flex items-center justify-center mb-4">
                  <Code size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Full Stack</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Building end-to-end applications with modern frameworks.</p>
             </div>
             <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-xl flex items-center justify-center mb-4">
                  <User size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Student</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Constant learner pursuing BCA and exploring new tech.</p>
             </div>
             <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-xl flex items-center justify-center mb-4">
                  <Database size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Backend & AI</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Solid grasp of databases, Python scripts, and AI integrations.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;