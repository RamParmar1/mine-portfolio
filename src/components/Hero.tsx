import React from 'react';
import { Github, ArrowRight, Linkedin } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from '../constants';
import profileImage from './profile.jpg';


const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Animated Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-20 translate-x-1/3 -translate-y-1/4 animate-blob">
         <div className="w-[500px] h-[500px] bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-normal"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-30 dark:opacity-20 -translate-x-1/3 translate-y-1/4 animate-blob animation-delay-2000">
         <div className="w-[500px] h-[500px] bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-normal"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -z-10 opacity-30 dark:opacity-10 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000">
         <div className="w-[600px] h-[600px] bg-pink-300 dark:bg-indigo-900 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-normal"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-sm font-medium tracking-wide">
                Aspiring Full Stack Developer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Ram Parmar</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto lg:mx-0">
                Building scalable web apps & digital solutions with modern tech.
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Third-year BCA student passionate about the MERN stack and Python automation. 
              Creating seamless user experiences and robust backends.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <div className="flex gap-4 w-full sm:w-auto justify-center">
                <a 
                  href={LINKEDIN_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-[#0077b5] hover:bg-[#006396] rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn
                </a>
                <a 
                  href={GITHUB_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <Github className="mr-2 w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse blur-2xl"></div>
              <img 
                src={profileImage} 
                alt="Ram Parmar" 
                className="relative w-full h-full object-cover rounded-full border-8 border-white dark:border-slate-800 shadow-2xl z-10 transition-transform hover:scale-105 duration-500"
              />
              
              {/* Floating badges with glassmorphism */}
              <div className="absolute top-10 -right-4 lg:-right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 hidden sm:flex items-center gap-3 animate-bounce border border-white/20 dark:border-slate-700/50" style={{ animationDuration: '3s' }}>
                <span className="text-2xl">🚀</span>
                <div>
                   <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Status</p>
                   <p className="text-sm font-bold text-slate-900 dark:text-white">Open to Work</p>
                </div>
              </div>
              
              <div className="absolute bottom-10 -left-4 lg:-left-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 hidden sm:flex items-center gap-3 animate-bounce border border-white/20 dark:border-slate-700/50" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
                <span className="text-2xl">💻</span>
                <div>
                   <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Stack</p>
                   <p className="text-sm font-bold text-slate-900 dark:text-white">MERN & Python</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;