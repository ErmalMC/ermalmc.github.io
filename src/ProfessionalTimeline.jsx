import React, { useState } from 'react';

const TimelineItem = ({ logo, institution, role, period, achievements, badges, isLast }) => (
    <div className="relative flex items-start space-x-4 pb-8">
        {/* Timeline line */}
        {!isLast && (
            <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-600"></div>
        )}

        {/* Institution logo */}
        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-700">
            {logo}
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
            {/* Date */}
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">{period}</p>

            {/* Institution and role */}
            <h3 className="text-black dark:text-white text-lg font-semibold">{institution}</h3>
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
            {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 cursor-pointer">
              🌐 {badge}
            </span>
                    ))}
                </div>
            )}
        </div>
    </div>
);

const ProfessionalTimeline = () => {
    const [activeTab, setActiveTab] = useState('Experience');

    const workData = [
        {
            period: "Dec 2024 - Apr 2025",
            institution: "BEST Skopje",
            role: "Information Technology Responsible",
            logo:  (
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
            ]
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
                "Co-authored a research paper titled 'Robotic Strategies for Orbital Sustainability: A Comparative Analysis of Capture Techniques, Guidance Systems, and Servicing Integration', focusing on space debris removal and long-term satellite servicing.",
                "Analyzed and compared cutting-edge orbital robotics systems, proposing improvements to existing guidance and capture mechanisms.",
                "Currently developing a compact folding robot prototype designed for constrained environments, utilizing modular mechanical components and embedded systems.",
            ],
            badges: []
        },
    ];

    const currentData = activeTab === 'Experience' ? workData : educationData;

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