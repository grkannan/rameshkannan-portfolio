import emailjs from 'emailjs-com';

// Read these from environment variables (recommended for real keys).
// Example (Vite): VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_USER_ID
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

export const sendContactEmail = async ({ name, email, subject, message }) => {
  if (!serviceId || !templateId || !userId) {
    throw new Error(
      'EmailJS is not configured. Missing VITE_EMAILJS_SERVICE_ID / VITE_EMAILJS_TEMPLATE_ID / VITE_EMAILJS_USER_ID'
    );
  }

  // Template variables must match what you set up in EmailJS.
  const templateParams = {
    name,
    email,
    subject,
    message
  };

  return emailjs.send(serviceId, templateId, templateParams, userId);
};

