export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="./assets/profile.jpeg" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m Rahul Vishwakarma
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />

            </h3>
            <a href="tel:+919990995310">+91 9990995310</a>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">React native Developer</h1>
            <p className="max-w-2xl mx-auto font-Ovo">I am a React Native Mobile App Developer from India with 2+ years of experience building high-performance Android and iOS applications. I have developed and published production-ready apps using React Native, Redux, Firebase, Maps, and modern mobile development tools.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                {/* <a href="./assets/dev-icon.png" download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a> */}

                <a
                    href="/resume.pdf"
                    download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 
             hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 
             bg-white dark:bg-transparent dark:text-white"
                >
                    My Resume
                    <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}