import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VscMail, VscGithub, VscTwitter, VscLink } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';

/**
 * ContactPage Component - Contact form and social links
 * 
 * Form Handling:
 * - Controlled components: form inputs tied to state
 * - onChange: updates state as user types
 * - onSubmit: handles form submission
 */

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form data:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <VscGithub className="text-2xl" />,
      url: 'https://github.com/Anamika0246',
      color: '#333333',
      username: '@Anamika0246'
    },
    {
      name: 'LinkedIn',
      icon: <SiLinkedin className="text-2xl" />,
      url: 'https://linkedin.com/in/anamika-shah0246',
      color: '#0077B5',
      username: 'Anamika Tiwari'
    },
    {
      name: 'Email',
      icon: <VscMail className="text-2xl" />,
      url: 'mailto:anamikatiwari0216@gmail.com',
      color: '#EA4335',
      username: 'anamikatiwari0216@gmail.com'
    },
    {
      name: 'Phone',
      icon: <VscTwitter className="text-2xl" />,
      url: 'tel:+917317448853',
      color: '#4CAF50',
      username: '+91-7317448853'
    }
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
          Get In Touch
        </h1>
        <p className="text-lg" style={{ color: 'var(--vscode-text-secondary)' }}>
          Let's discuss your project or just say hi!
        </p>
      </motion.div>

      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--vscode-accent)' }}>
            Send a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name input */}
            <div>
              <label className="block text-sm mb-2" style={{ color: 'var(--vscode-text)' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border outline-none focus:border-[#007ACC] transition-colors"
                style={{
                  backgroundColor: 'var(--vscode-bg)',
                  borderColor: 'var(--vscode-border)',
                  color: 'var(--vscode-text)'
                }}
                placeholder="Your name"
              />
            </div>

            {/* Email input */}
            <div>
              <label className="block text-sm mb-2" style={{ color: 'var(--vscode-text)' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border outline-none focus:border-[#007ACC] transition-colors"
                style={{
                  backgroundColor: 'var(--vscode-bg)',
                  borderColor: 'var(--vscode-border)',
                  color: 'var(--vscode-text)'
                }}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message textarea */}
            <div>
              <label className="block text-sm mb-2" style={{ color: 'var(--vscode-text)' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 rounded border outline-none focus:border-[#007ACC] transition-colors resize-none"
                style={{
                  backgroundColor: 'var(--vscode-bg)',
                  borderColor: 'var(--vscode-border)',
                  color: 'var(--vscode-text)'
                }}
                placeholder="Your message..."
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 rounded font-semibold hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'var(--vscode-accent)', color: 'white' }}
            >
              {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--vscode-accent)' }}>
            Connect With Me
          </h2>
          
          <div className="space-y-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border hover:border-[#007ACC] transition-colors"
                style={{
                  backgroundColor: 'var(--vscode-bg)',
                  borderColor: 'var(--vscode-border)',
                  color: 'var(--vscode-text)'
                }}
                whileHover={{ x: 5 }}
              >
                <div style={{ color: link.color }}>
                  {link.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold" style={{ color: 'var(--vscode-text-active)' }}>
                    {link.name}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--vscode-text-secondary)' }}>
                    {link.username}
                  </div>
                </div>
                <VscLink style={{ color: 'var(--vscode-text-secondary)' }} />
              </motion.a>
            ))}
          </div>

          {/* Additional info */}
          <div 
            className="p-6 rounded-lg border"
            style={{
              backgroundColor: 'var(--vscode-bg)',
              borderColor: 'var(--vscode-border)'
            }}
          >
            <h3 className="font-semibold mb-2" style={{ color: 'var(--vscode-text-active)' }}>
              Looking for collaboration?
            </h3>
            <p className="text-sm" style={{ color: 'var(--vscode-text)' }}>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
