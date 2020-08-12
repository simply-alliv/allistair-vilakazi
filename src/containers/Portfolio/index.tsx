import React, { FunctionComponent } from "react";
import { CSSTransition } from "react-transition-group";
import Card from "../../components/Card";
import CardTitle from "../../components/CardTitle";
import CardVideo from "../../components/CardVideo";
import "./index.css";

interface PortfolioProps {
  activeRoute: string;
}

const Portfolio: FunctionComponent<PortfolioProps> = ({ activeRoute }) => {
  return (
    <CSSTransition
      in={activeRoute === "/portfolio"}
      timeout={300}
      classNames="portfolio"
    >
      <div className="portfolio background-light">
        <div className="grid grid-autofit">
          <Card
            height="100%"
            href="https://github.com/simply-alliv/comment-microapi"
          >
            <CardVideo
              srcWebm="/videos/comment-microapi-short-preview.webm"
              srcMp4="/videos/comment-microapi-short-preview.mp4"
            />
            <CardTitle
              title="Comment Micro-service"
              subtitle="Imagine a micro-service that enables you to add comment and replies features through a plug-and-play process. This is the ultimate goal of the MicroAPI project #DeveloperLifeSimplified. The service also enables multi-tenancy through the creation of organizations."
            />
          </Card>
          <Card
            height="100%"
            href="https://github.com/simply-alliv/real-time-tic-tac-toe"
          >
            <CardVideo
              srcWebm="/videos/real-time-tic-tac-toe-short-preview.webm"
              srcMp4="/videos/real-time-tic-tac-toe-short-preview.mp4"
            />
            <CardTitle
              title="Real-time Tic-Tac-Toe Game"
              subtitle="So during my internship with HNG, we had a side competition in which we had to build a real-time multiplayer game using sockets. It was the first time I made a game and the first time I used sockets. This project improved my understanding of real-time web applications."
            />
          </Card>
          <Card
            height="100%"
            href="https://github.com/simply-alliv/auth-microapi"
          >
            <CardVideo
              srcWebm="/videos/authentication-microapi-short-preview.webm"
              srcMp4="/videos/authentication-microapi-short-preview.mp4"
            />
            <CardTitle
              title="Authentication Micro-service"
              subtitle="This is one of my favourite micro-services. Security seems to be something I enjoy learning about. This micro-service is currently complete but has a few important features missing. So we decided to make an overhaul of v1 of the API and also support multi-tenancy for v2 (in development) of the API."
            />
          </Card>
          <Card
            height="100%"
            href="https://github.com/simply-alliv/node-google-authenticator"
          >
            <CardVideo
              srcWebm="/videos/node-google-authenticator-short-preview.webm"
              srcMp4="/videos/node-google-authenticator-short-preview.mp4"
            />
            <CardTitle
              title="Google Authenticator Node App (2FA)"
              subtitle="This was one of those projects that truly helped me understand the idea behind two-factor authentication and how it is implemented. Security and privacy is an ever growing concern and understanding how to effectively protect your user's data is important. #ResponsibleDeveloper."
            />
          </Card>
          <Card
            height="100%"
            href="https://github.com/simply-alliv/comment-microapi-demo"
          >
            <CardVideo
              srcWebm="/videos/comment-microapi-demo-short-preview.webm"
              srcMp4="/videos/comment-microapi-demo-short-preview.mp4"
            />
            <CardTitle
              title="Comment Micro-service Demo"
              subtitle="Of course our comment micro-service had a companion demo app so that a client could have a simple and informative interaction to better understand how the service would work once it was plugged into their applications and to also showcase the available features. I designed this app using Figma and built it with React."
            />
          </Card>
          <Card
            height="100%"
            href="https://github.com/simply-alliv/inbound-parse-multipart-parser"
          >
            <CardVideo
              srcWebm="/videos/inbound-parse-multipart-parser-short-preview.webm"
              srcMp4="/videos/inbound-parse-multipart-parser-short-preview.mp4"
            />
            <CardTitle
              title="Inbound Parse Multipart Parser"
              subtitle="Most of my projects tend to use Azure for most cloud services. Serverless functions are amazing little applications but can sometimes be limited. Whenever I use SendGrid for handling email's, I use the Inbound Parse Webhook by SendGrid. The only problem, the Azure function doesn't have a native parser for multipart data received from emails."
            />
          </Card>
          <Card
            height="100%"
            href="https://github.com/simply-alliv/allistair-vilakazi"
          >
            <CardTitle
              title="My Personal Portfolio Site"
              subtitle="The website you are currently browsing is actually another project of mine that I began just after the HNG internship ended. This site will be the portal to my journey as a software developer. This is only the beginning and there will be much more to come from this site. This site is powered by React, Docker, and NGINX."
            />
          </Card>
          <Card height="100%" href="https://github.com/simply-alliv">
            <CardTitle
              title="See more of my art"
              subtitle="These are some of the recent highlights of my ever-growing treasure trove of projects that I have worked on. For me coding is an art, it calms my mind and has improved my logical thinking. So be sure to visit my GitHub profile to see more of my technological art that was created with some of my friends."
            />
          </Card>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Portfolio;
