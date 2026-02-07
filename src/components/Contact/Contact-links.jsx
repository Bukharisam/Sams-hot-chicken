import "./Contact-links.css";

export default function ContactLink({ href, icon, text }) {
  return (
    <a href={href} className="contact-link">
      <img src={icon} alt={text} className="contact-icon" />
      {text}
    </a>
  );
}
