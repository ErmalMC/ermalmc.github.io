import React, { useState } from 'react';

const TimelineItem = ({ logo, institution, role, period, achievements, badges, isLast, githubUrl, liveUrl }) => (
    <div className="relative flex items-start space-x-4 pb-8">
        {/* Timeline line */}
        {!isLast && (
            <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-600"></div>
        )}

        {/* Institution logo */}
        <div
            className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-700">
            {typeof logo === 'string' ? (
                logo.startsWith('/') || logo.startsWith('http') ? (
                    <img
                        src={logo}
                        alt={`${institution} Logo`}
                        className="w-14 h-14 object-contain rounded"
                    />
                ) : (
                    <span className="text-2xl">{logo}</span>
                )
            ) : (
                logo
            )}
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
            {/* Date */}
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">{period}</p>

            {/* Institution and role */}
            <div className="flex items-center gap-2">
                <h3 className="text-black dark:text-white text-lg font-semibold">
                    {institution}
                </h3>
            </div>
            <p className="text-blue-400 text-sm mb-3">{role}</p>

            {/* Achievements */}
            <ul className="space-y-2 text-black dark:text-white text-sm mb-4">
                {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-gray-500 mr-2 mt-1.5 text-l">•</span>
                        <span className="leading-snug font-medium">{achievement}</span>
                    </li>
                ))}
            </ul>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
                {/* GitHub Link Badge */}
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-white border border-gray-700 hover:bg-gray-900 transition"
                    >
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                    </a>
                    )}

                {/* Live Demo Badge */}
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white border border-green-500 hover:bg-green-700 transition"
                    >
                        🚀 Live Demo
                    </a>
                    )}

                {/* Technology Badges */}
                {badges && badges.length > 0 && badges.map((badge, index) => (
                    <span key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 cursor-default">
                        🌐 {badge}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const ProfessionalTimeline = () => {
    const [activeTab, setActiveTab] = useState('Projects');

    const workData = [
        {
            period: "Dec 2024 - Apr 2025",
            institution: "BEST Skopje",
            role: "Information Technology Responsible",
            logo: (
                <img
                    src="/BESTlogo.png"
                    alt="BEST Logo"
                    className="w-14 h-14 object-contain rounded"
                />
            ),
            achievements: [
                "Directed a team of six student developers in creating and maintaining the job-fair platform, ensuring seamless coordination and on-time delivery.",
                "Mentored team members through regular code reviews and training sessions, nurturing their professional development and fostering a collaborative culture.",
                "Leveraged Angular to build dynamic, responsive front-end interfaces and Spring Boot to deliver scalable, secure back-end services."
            ],
            badges: ["Angular", "SpringBoot", "MySQL"],
            liveUrl:'https://vjobfair.org.mk/'
        },
    ];

    const educationData = [
        {
            period: "Oct 2022 - Jun 2026",
            institution: "Faculty of Computer Science and Engineering",
            role: "Bachelor of Science in Information Science",
            logo: (
                <img
                    src="/finki-logo.png"
                    alt="FINKI Logo"
                    className="w-14 h-14 object-contain rounded"
                />
            ),
            achievements: [
                <>
                    Co-authored a research paper titled{" "}
                    <a
                        href="/public/Robotic_Strategies_for_Orbital_Sustainability.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition"
                    >
                        'Robotic Strategies for Orbital Sustainability: A Comparative Analysis of Capture Techniques, Guidance Systems, and Servicing Integration'
                    </a>
                    , focusing on space debris removal and long-term satellite servicing.
                </>,
                "Analyzed and compared cutting-edge orbital robotics systems, proposing improvements to existing guidance and capture mechanisms.",
                "Developed a compact folding robot prototype designed for constrained environments, utilizing modular mechanical components and embedded systems."
            ],
            badges: []
        },
    ];

    const projectData = [
        {
            period: "2026",
            institution: "PureForm",
            role: "Full Stack Developer",
            logo: "🏋️‍♂️",
            achievements: [
                "Built a comprehensive fitness tracking platform with workout logging, nutrition tracking, and progress analytics using React and .NET 9",
                "Designed RESTful API with JWT authentication, clean architecture principles, and repository pattern for scalable backend services",
                "Implemented macro calculator and integrated 100+ food database with smart search and meal logging features",
                "Created responsive UI with real-time updates, data visualization charts, and intuitive user experience using TailwindCSS"
            ],
            badges: ["React", ".NET 9", "MySQL", "TailwindCSS"],
            githubUrl: "https://github.com/ErmalMC/PureForm",
            liveUrl: "https://pure-form-one.vercel.app",
        },
        {
            period: "2026",
            institution: "EVBGLASS",
            role: "Frontend Developer",
            logo: "🏭",
            achievements: [
                "Delivered production-ready corporate website for glass manufacturing company",
                "Engineered fully responsive React application with TailwindCSS, ensuring seamless experience across all devices",
                "Architected custom i18n solution supporting Macedonian, English, and Albanian without third-party libraries",
                "Developed dynamic product catalog featuring real-time search and interactive image galleries with error handling",
                "Managed end-to-end client collaboration from initial requirements to production deployment"
            ],
            badges: ["React", "TailwindCSS", "Multilingual", "Responsive", "Client Project"],
            liveUrl: "https://evbglass.mk",
        },
        
    ];

    const currentData =
        activeTab === 'Experience' ? workData :
        activeTab === 'Education' ? educationData :
            projectData;

    return (
        <div className="w-full">
            {/* Tab Navigation */}
            <div className="flex w-full justify-center bg-gray-200 dark:bg-gray-800 rounded-lg p-1 mb-8">
                <button
                    onClick={() => setActiveTab('Experience')}
                    className={`flex-1 px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === 'Experience'
                            ? 'bg-gray-400 dark:bg-gray-900 text-black dark:text-white shadow-sm'
                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                    Experience
                </button>
                <button
                    onClick={() => setActiveTab('Education')}
                    className={`flex-1 px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === 'Education'
                            ? 'bg-gray-400 dark:bg-gray-900 text-black dark:text-white shadow-sm'
                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                    Education
                </button>
                <button
                    onClick={() => setActiveTab('Projects')}
                    className={`flex-1 px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === 'Projects'
                            ? 'bg-gray-400 dark:bg-gray-900 text-black dark:text-white shadow-sm'
                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                    Projects
                </button>
            </div>

            {/* Timeline Content */}
            <div className="relative w-fit">
                {currentData.map((item, index) => (
                    <TimelineItem
                        key={`${activeTab}-${index}`}
                        {...item}
                        isLast={index === currentData.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfessionalTimeline;