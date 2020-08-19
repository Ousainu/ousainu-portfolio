import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello! My name is Ousainu. I'm a Software Engineer who is
    passionate about various web technologies. I like to experiment with different web
    technologies. I have experience building projects with the NERD stack. Travis CL is the tool I use for CI/CD.
    Outside of tech, building interesting projects, learning about new tech, playing basketball, and video games
    are my hobbies. Check out my projects to see what I have been working on. Currently I work mostly with 
    Javascript technologies like ReactJS and NodeJS. I also have deployed applications keeping scalability in mind. 
    I'm always a learner.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Ousainu', 'Jabbi', 'FullStack Software Engineer', 'Javascript', 'ReactJS', 'NodeJS', 'Redux']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Location"
            textH3="New York"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="game.png"
            alt="game image"
            textH4="Love Video Games"
            textH3="Video Games + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="ball.png"
            alt="ball image"
            textH4="Love playing"
            textH3="Basketball"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="fullstack.png"
            alt="fullstack image"
            textH4="Fullstack Academy Graduate"
            textH3="Software Engineer Bootcamp"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Associate in"
            textH3="Business Administration"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
