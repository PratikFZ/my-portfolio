import { useState } from 'react';
import './MailCard.css';

export default function SimpleEmailCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      alert('Please fill out all fields');
      return;
    }

    setStatus('sending');

    try {
      const serviceID = 'service_big8vuj'; // Replace with your service ID
      const templateID = 'template_4v5qrlh'; // Replace with your template ID
      const userID = 'ii8wGNc18FhVmqiYZ'; // Replace with your user ID

      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      await window.emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log('Email sent successfully:', response);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          setStatus('error');
        });

      setName('');
      setEmail('');
      setMessage('');
      setStatus('success');

      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <div className={`mail-card-container ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="floating-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '✖' : '✉'}
      </button>

      <div className={`mail-card ${isExpanded ? 'expand' : 'collapse'}`}>
        {isExpanded && (
          <>
            <h2 className="label-contact-me">Contact Me</h2>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="form-textarea"
                placeholder="Type your message here..."
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className={`form-button ${status === 'sending' ? 'disabled' : ''}`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="status-message success">
                Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="status-message error">
                Failed to send message. Please try again.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}