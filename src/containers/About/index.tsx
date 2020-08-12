import React, { FunctionComponent } from "react";
import { CSSTransition } from "react-transition-group";
import ProfilePicture from "../../components/ProfilePicture";
import "./index.css";

interface AboutProps {
  activeRoute: string;
}

const About: FunctionComponent<AboutProps> = ({ activeRoute }) => {
  return (
    <CSSTransition
      in={activeRoute === "/about"}
      timeout={300}
      classNames="about"
    >
      <React.Fragment>
        <div className="about slide-1 background-light flex flex__column">
          <ProfilePicture isOpaque={true} />
          <h1>
            Hi, my name is <strong>Allistair Vilakazi</strong>.
          </h1>
          <p>
            I am a full-stack JavaScript developer. I also dabble with Flutter
            and Dart for cross-platform native apps. I am currently obsessed
            with micro-services.
          </p>
        </div>
        <div className="about slide-2 background-dark flex flex__column">
          <h1 className="display-font">Some of the things I know</h1>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              I am fluent in 3 programming languages
            </span>
            <span className="display__block">
              <strong>JavaScript (Typescript)</strong>, <strong>Dart</strong>,{" "}
              <strong>Java</strong>
            </span>
          </p>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              I can design and implement web apps with 2 web framworks
            </span>
            <span className="display__block">
              <strong>Angular</strong> and <strong>React</strong>
            </span>
          </p>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              I can create micro-services and backend servers with 2 server-side
              framworks
            </span>
            <span className="display__block">
              <strong>Express</strong> and <strong>Nest</strong>
            </span>
          </p>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              I can automate workflows (CI/CD) and promote Agile processes with
              2 tools
            </span>
            <span className="display__block">
              <strong>GitHub Actions</strong> and <strong>Travis</strong>
            </span>
          </p>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">A few other things I know</span>
            <span className="display__block">
              <strong>MongoDB</strong>, <strong>Firebase</strong>,{" "}
              <strong>Azure</strong>,{" "}
              <strong>TDD (Test-Driven Development)</strong>,{" "}
              <strong>Scrum and Kanban Boards</strong>,{" "}
              <strong>UI/UX Design</strong>, and <strong>Flutter</strong>
            </span>
          </p>
        </div>
        <div className="about slide-3 background-light flex flex__column">
          <h1 className="display-font">Some of the things I do</h1>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              I work mainly on building micro-services, or APIs, with
              JavaScript, Typescript, and Python for MicroAPI. MicroAPI is an
              idea where API become the new packages. As a JavaScript developer,
              I use NPM a lot. Not disregarding the value of NPM, MicroAPI aims
              to make APIs easily installable through one kind of API manager -
              MicroAPI. The MicroAPI project is open-source!
            </span>
          </p>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              I develop through testing (TDD) with Jest and Cypress,
            </span>
            <span className="display__block">
              I practice Agile processes with my remote team with GitHub
              Projects, Issues, Slack, and Zoom,
            </span>
            <span className="display__block">
              I implement best practices and clean code,
            </span>
            <span className="display__block">
              I enjoy evening jogs and play my favourite games,
            </span>
            <span className="display__block">
              I am an environmentalist who cares about water and agriculture,
            </span>
            <span className="display__block">
              I am a pianist (It’s important to note that I am no Lang Lang),
            </span>
            <span className="display__block">I love my family.</span>
          </p>
        </div>
        <div className="about slide-4 background-dark flex flex__column">
          <h1 className="display-font">Some of the things I have done</h1>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              <strong>2011 - 2015</strong>
            </span>
            <span className="display__block">
              I am a Gaduate and was Head Boy of Curro Bankenveld High School.
            </span>
          </p>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              <strong>2016</strong>
            </span>
            <span className="display__block">
              I went to the University of Cape Town for 1 year. During the time,
              I majored in Biochemistry and Genetics.
            </span>
          </p>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              <strong>2017 - 2019</strong>
            </span>
            <span className="display__block">
              I taught myself web development with a focus in e-commerce,
              security, and serverless architecture.
            </span>
          </p>
          <p>
            <span className="display__block">-</span>
            <span className="display__block">
              <strong>2020 - present</strong>
            </span>
            <span className="display__block">
              I started as an HNG intern in July and now I am a core maintainer
              of one the startups (MicroAPI) that stemmed out of the internship.
            </span>
          </p>
        </div>
      </React.Fragment>
    </CSSTransition>
  );
};

export default About;
