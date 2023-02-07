import Contact from "../contact/contact";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="main-footer container">
        <div className="mr-auto logo-container">
          <div className="brand-name">
            DevStack Tutor
          </div>
          <p>
          Learn <b>Fullstack Coding</b> using examples, exercises and templates!
                    So - go ahead, build your new App!
                    </p>
        </div>
        <div className="social">
          <div className="title">
            Follow Us
          </div>
          <Contact showNames/>
        </div>
      </section>
      <section className="bottom-bar flex justify-center align-center">
      &copy; Copyright 2022
      {/* <a href="https://www.devstaktutor.com">www.devstacktutor.com</a> */}
      </section>
      
    </footer>
  );
}
