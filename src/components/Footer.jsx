import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { profile } from "../data/siteData";

export default function Footer() {
  const socials = [
    { icon: <FaInstagram />, href: profile.instagram, label: "Instagram" },
    { icon: <FaLinkedin />, href: profile.linkedin, label: "LinkedIn" },
    { icon: <FaGithub />, href: profile.github, label: "GitHub" },
    { icon: <HiOutlineEnvelope />, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black py-8">
      <div className="section-container flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={s.label}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary-500 transition-colors text-lg"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-500">&copy; 2025 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
