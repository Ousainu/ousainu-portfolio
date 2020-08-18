import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={8}>

        <ProgressBar
          percent={100}
          text="Javascript"
        />
        <ProgressBar
          percent={100}
          text="NodeJS"
        />
        <ProgressBar
          percent={100}
          text="ReactJS"
        />
        <ProgressBar
          percent={100}
          text="Redux"
        />
        <ProgressBar
          percent={100}
          text="HTML5"
        />
        <ProgressBar
          percent={100}
          text="CSS3"
        />
        <ProgressBar
          percent={100}
          text="Express"
        />
        <ProgressBar
          percent={100}
          text="PostgreSQL"
        />
        <ProgressBar
          percent={100}
          text="Sequelize"
        />
        <ProgressBar
          percent={100}
          text="Git"
        />
      </Col>
      <Col xs={24} sm={24} md={8}>
        <ProgressBar
          percent={75}
          text="Java"
        />
        <ProgressBar
          percent={75}
          text="PHP"
        />
        <ProgressBar
          percent={75}
          text="Python"
        />
        <ProgressBar
          percent={75}
          text="MySQL"
        />
        <ProgressBar
          percent={75}
          text="MongoDB"
        />
        <ProgressBar
          percent={75}
          text="Mongoose"
        />
        <ProgressBar
          percent={75}
          text="OAuth"
        />
        <ProgressBar
          percent={75}
          text="Travis CL"
        />
        <ProgressBar
          percent={75}
          text="Heroku"
        />
        <ProgressBar
          percent={75}
          text="Mocha/Chai/Jasmine"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
