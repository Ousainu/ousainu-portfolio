import React from 'react';
import { Layout, Row, Col } from 'antd';
import FA from 'react-fontawesome';
import ProjectCard from '../../components/ProjectCard';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Config from '../../../config';

const { ekopiqueSite, ekopiqueGithub, graceshopperGithub } = Config.projects;

const Projects = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Projects</h1>
        </div>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <ProjectCard img="./ekopique.png" name="ekopique" />
            <div className="centerAlign box">
              <a href={ekopiqueSite} target="_blank" label="button" rel="noopener noreferrer"><FA name="globe" /></a>
              <a href={ekopiqueGithub} target="_blank" label="button" rel="noopener noreferrer"><FA name="github" /></a>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <ProjectCard img="./graceshopper.png" name="graceshopper" />
            <div className="centerAlign box">
              <a href={graceshopperGithub} target="_blank" label="button" rel="noopener noreferrer"><FA name="github" /></a>
            </div>
          </Col>
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Projects;
