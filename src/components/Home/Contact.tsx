import React, { useState, useEffect, useRef } from "react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Reset form on success
      setFormData({ name: '', email: '', company: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact">
      <div className="section-header">
        <div className="section-badge">Get In Touch</div>
        <h2 className="section-title">Let's Create Something Amazing</h2>
        <p className="section-subtitle">
          Ready to bring your vision to life? Let's discuss your next groundbreaking project.
        </p>
      </div>
      
      <div className="contact-container-grid">
        {/* Contact Information */}
        <div className={`contact-info ${isVisible ? 'fade-in' : ''}`}>
          <h3>Contact Information</h3>
          <div style={{ margin: '30px 0' }}>
            <p style={{ marginBottom: '15px' }}>
              <strong>Email:</strong> vemula.venkatesh@example.com
            </p>
            <p style={{ marginBottom: '15px' }}>
              <strong>Phone:</strong> +91 XXX XXX XXXX
            </p>
            <p style={{ marginBottom: '15px' }}>
              <strong>Location:</strong> India
            </p>
            <p style={{ marginBottom: '15px' }}>
              <strong>Response Time:</strong> Within 24 hours
            </p>
          </div>
          
          <h4 style={{ marginBottom: '20px' }}>What I Can Help With</h4>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li>Full-stack web development</li>
            <li>React/Next.js applications</li>
            <li>API development with FastAPI</li>
            <li>Database design and optimization</li>
            <li>Code reviews and mentoring</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form 
          className={`contact-form ${isVisible ? 'fade-in' : ''}`}
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={errors.name ? 'error' : ''}
                required
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={errors.email ? 'error' : ''}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell me about your vision, goals, and how we can work together..."
              className={errors.message ? 'error' : ''}
              required
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          
          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', marginTop: '20px' }}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
            {!isLoading && <span style={{ marginLeft: '10px' }}>→</span>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
