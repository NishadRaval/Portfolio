import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const SERVICE_ID = "service_z5s8xqj";
        const TEMPLATE_ID = "template_1rpxzzs";
        const PUBLIC_KEY = "Yb-h64yoFwxCivyBS";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus('success');
                form.current.reset(); // Clear form
                setTimeout(() => setStatus(''), 5000); // Reset status after 5s
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Let's Create <br /> Something <span className="highlight-text">Iconic</span></h2>
                </motion.div>

                <div className="contact-content">
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        className="contact-form"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder="Nishad Raval" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder="nishad@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" placeholder="Tell me about your project..." rows="5" required></textarea>
                        </div>

                        <button type="submit" className={`submit-btn ${status === 'sending' ? 'loading' : ''}`} disabled={status === 'sending'}>
                            {status === 'sending' ? <Loader2 className="spin" size={20} /> : <Send size={20} />}
                            <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </motion.form>

                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                className="notification-popup success"
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CheckCircle size={32} />
                                <div>
                                    <h4>Message Sent!</h4>
                                    <p>I'll get back to you soon.</p>
                                </div>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                className="notification-popup error"
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <XCircle size={32} />
                                <div>
                                    <h4>Oops!</h4>
                                    <p>Something went wrong. Try again.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-item">
                            <Mail className="icon" />
                            <span>nishadsraval@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <span>+91 7203980705</span>
                        </div>
                        <div className="info-item">
                            <MapPin className="icon" />
                            <span>Surat, India</span>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/nishadraval/">LinkedIn</a>
                            <a href="https://github.com/NishadRaval">GitHub</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
