import React from 'react';
import { motion } from 'framer-motion';
import { VscMortarBoard, VscCalendar, VscLocation, VscVerified } from 'react-icons/vsc';

/**
 * EducationPage Component - Educational background
 */

const EducationItem = ({ education, index }) => {
  return (
    <motion.div
      className="bg-[#2a2d2e] p-6 rounded-lg border mb-6"
      style={{ borderColor: 'var(--vscode-border)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ borderColor: 'var(--vscode-accent)' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <VscMortarBoard className="text-3xl" style={{ color: 'var(--vscode-accent)' }} />
          <div>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--vscode-text-active)' }}>
              {education.degree}
            </h3>
            <p className="text-lg" style={{ color: 'var(--vscode-text)' }}>
              {education.institution}
            </p>
          </div>
        </div>
        {education.gpa && (
          <span 
            className="px-3 py-1 rounded font-semibold"
            style={{ 
              backgroundColor: 'var(--vscode-accent)',
              color: 'white'
            }}
          >
            GPA: {education.gpa}
          </span>
        )}
      </div>

      <div className="flex gap-4 mb-4 text-sm" style={{ color: 'var(--vscode-text-secondary)' }}>
        <div className="flex items-center gap-1">
          <VscCalendar />
          <span>{education.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <VscLocation />
          <span>{education.location}</span>
        </div>
      </div>

      {education.highlights && (
        <div className="mb-3">
          <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--vscode-text-active)' }}>
            Highlights:
          </h4>
          <ul className="list-none space-y-1">
            {education.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--vscode-text)' }}>
                <span style={{ color: 'var(--vscode-accent)' }}>▸</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {education.courses && (
        <div className="flex flex-wrap gap-2">
          {education.courses.map((course, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 rounded"
              style={{ 
                backgroundColor: 'var(--vscode-badge-bg)',
                color: 'var(--vscode-badge-text)'
              }}
            >
              {course}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const EducationPage = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science (Data Science)',
      institution: 'Maharana Pratap Engineering College',
      location: 'India',
      duration: 'Sep 2022 - Jul 2026',
      gpa: 'Honors in Cybersecurity',
      highlights: [
        'Specialization in Data Science with Honors in Cybersecurity',
        'Managing Director of TECH-E-CLAN (MPGI)',
        'Led 15+ member team organizing technical events with 700+ participants',
        'National Semi-Finalist at Flipkart GRiD 7.0 (2025)',
        '2nd Place at Code Clash Hack 2.0'
      ],
      courses: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'Machine Learning', 'Cybersecurity']
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Siddharth Public School (CBSE)',
      location: 'India',
      duration: 'Apr 2018 - Apr 2019',
      highlights: [
        'Completed higher secondary education',
        'Built strong foundation in Mathematics and Computer Science'
      ],
      courses: ['Mathematics', 'Physics', 'Computer Science', 'Chemistry']
    }
  ];

  const certifications = [
    { name: 'IBM Data Analytics Certification', issuer: 'IBM', year: '2024' },
    { name: 'Advanced E-SDP - Cybersecurity & Entrepreneurship', issuer: 'IIT Kanpur', year: '2024' },
    { name: 'Cloud Computing', issuer: 'NPTEL (IIT Kharagpur)', year: '2025' },
    { name: 'Gold Level - Accenture iAspire Technical Program', issuer: 'Accenture', year: '2024' },
  ];

  return (
    <div className="h-full overflow-y-auto p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--vscode-text-active)' }}>
          Education
        </h1>
        <p className="text-lg" style={{ color: 'var(--vscode-text-secondary)' }}>
          My academic background and qualifications
        </p>
      </motion.div>

      {/* Education items */}
      <div className="max-w-4xl mb-10">
        {educationData.map((education, index) => (
          <EducationItem key={index} education={education} index={index} />
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--vscode-accent)' }}>
          <VscVerified />
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#2a2d2e] p-4 rounded-lg border"
              style={{ borderColor: 'var(--vscode-border)' }}
              whileHover={{ borderColor: 'var(--vscode-accent)' }}
            >
              <h3 className="font-semibold mb-1" style={{ color: 'var(--vscode-text-active)' }}>
                {cert.name}
              </h3>
              <p className="text-sm" style={{ color: 'var(--vscode-text-secondary)' }}>
                {cert.issuer} • {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationPage;
