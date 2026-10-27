import { useState } from "react";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import { profile } from "../data/siteData";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojbyzyp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "phone") {
      setForm((f) => ({ ...f, phone: value.replace(/\D/g, "").slice(0, 10) }));
    } else {
      setForm((f) => ({ ...f, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill in all required fields (Name, Email, Contact Number, Message)." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setStatus({ type: "error", text: "Contact number must be exactly 10 digits." });
      return;
    }

    setSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          _subject: "New Contact from Portfolio – " + name,
          _replyto: email,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus({ type: "success", text: "Thank you! Your message has been sent successfully. I'll get back to you soon." });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        const errMsg =
          (result.errors && result.errors.map((e) => e.message).join(", ")) ||
          result.error ||
          "Submission failed";
        throw new Error(errMsg);
      }
    } catch (err) {
      setStatus({
        type: "error",
        text: `Something went wrong (${err.message}). Please email me directly at ${profile.email}.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surfaceAlt dark:bg-surfaceAlt-dark">
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">Let's Talk</span>
          <h2 className="section-heading">Connect With Me</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-card h-56 sm:h-64">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6972.1905948890735!2d77.26973990000002!3d29.102867799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751129184601!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="glass-card p-6 mt-6 space-y-4">
              <InfoRow icon={<HiOutlineEnvelope />} href={`mailto:${profile.email}`} text={profile.email} />
              <InfoRow icon={<HiOutlinePhone />} href={`tel:${profile.phoneRaw}`} text={profile.phone} />
              <InfoRow icon={<HiOutlineMapPin />} text={profile.location} />
              <InfoRow icon={<FaLinkedin />} href={profile.linkedin} text="linkedin.com/in/akshat-jain" external />
              <InfoRow icon={<FaGithub />} href={profile.github} text="github.com/Akshat-2109" external />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-4" noValidate>
              {status && (
                <div
                  className={`rounded-lg px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                      : "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300"
                  }`}
                >
                  {status.text}
                </div>
              )}

              <Field label="Full Name" required>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                  className="input-field"
                />
              </Field>

              <Field label="Email Address" required>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                  className="input-field"
                />
              </Field>

              <Field label="Contact Number" required>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit Mobile Number"
                  maxLength={10}
                  className="input-field"
                />
              </Field>

              <Field label="Your Message" required>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message or query here"
                  className="input-field resize-none"
                />
              </Field>

              <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60">
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, href, text, external }) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-300 text-lg shrink-0">
        {icon}
      </span>
      <span className="text-sm text-slate-700 dark:text-slate-200">{text}</span>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {content}
    </a>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
