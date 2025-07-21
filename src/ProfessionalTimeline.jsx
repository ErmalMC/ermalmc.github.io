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
            <p className="text-shadow-black text-sm font-medium mb-1">{period}</p>

            {/* Institution and role */}
            <h3 className="text-black text-lg font-semibold">{institution}</h3>
            <p className="text-blue-400 text-sm mb-3">{role}</p>

            {/* Achievements */}
            <ul className="space-y-2 text-black text-sm mb-4">
                {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-gray-500 mr-2 mt-1.5">•</span>
                        <span>{achievement}</span>
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
    const [activeTab, setActiveTab] = useState('Work');

    const workData = [
        {
            period: "Jul 2023 - Present",
            institution: "DBS Bank",
            role: "Graduate Associate (SEED Programme)",
            logo: <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs">DBS</div>,
            achievements: [
                "Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow",
                "Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform"
            ]
        },
    ];

    const educationData = [
        {
            period: "Sep 2019 - Apr 2023",
            institution: "Digipen Institute of Technology Singapore",
            role: "BS in Computer Science in Real-Time Interactive Simulation",
            logo: <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">DP</div>,
            achievements: [
                "Graduated with a Minor in Mathematics",
                "President of Digipen Student Management Committee for freshman year",
                "3-time recipient of the Dean's Honor List"
            ],
            badges: ["Final Year Project", "2nd Year Project"]
        },
    ];

    const currentData = activeTab === 'Work' ? workData : educationData;

    return (
        <div className="w-full">
            {/* Tab Navigation */}
            <div className="flex bg-gray-800 rounded-lg p-1 mb-8 w-full">
                <button
                    onClick={() => setActiveTab('Work')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === 'Work'
                            ? 'bg-gray-900 text-white shadow-sm'
                            : 'text-gray-400 hover:text-gray-200'
                    }`}
                >
                    Work
                </button>
                <button
                    onClick={() => setActiveTab('Education')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === 'Education'
                            ? 'bg-gray-900 text-white shadow-sm'
                            : 'text-gray-400 hover:text-gray-200'
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