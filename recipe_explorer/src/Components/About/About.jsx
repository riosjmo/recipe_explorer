import "./About.css";
import author from "../../assets/author.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__image">
          <img src={author} alt="Author" />
        </div>

        <div className="about__text">
          <h2 className="about__title">About the Author</h2>
          <p className="about__description">
            Hi, I'm Rio! I'm a full-stack software engineer with hands-on
            experience building and deploying production-grade applications. I
            specialize in creating scalable backends and responsive frontends
            that combine clean design, security, and functionality. I've
            delivered real-world projects using JavaScript, Node.js, Express,
            MongoDB, and React, and deployed them on Google Cloud with Nginx and
            SSL/TLS. My experience spans the full development cycle — from API
            design and authentication to UI development and cloud deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
