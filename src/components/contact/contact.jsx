import { useMemo } from "react";
import "./contact.scss";

const Contact = ({ showNames = false }) => {

  const social = useMemo(() => [
    {
      label: "Email",
      link: "mailto:#",
      icon: "envelope"
    },
    {
      label: "Github",
      link: "https://github.com/mrunal-modi?tab=repositories",
      icon: "github"
    },
    {
      label: "Facebook",
      link: "#",
      icon: "facebook"
    },
    {
      label: "Twitter",
      link: "#",
      icon: "twitter"
    }
  ], []);

  return (
    <div className="contacts">
      {social.map((el, i) =>
        <a className="contactIcons" href={el.link} key={i}>
          <i className={`bi bi-${el.icon}`} />{showNames ? el.label : ""}
        </a>
      )}
    </div>
  );
}

export default Contact;