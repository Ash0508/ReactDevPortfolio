import React from 'react';
import { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, from web apps & IOT. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === 'all'}
            value="all"
            onClick={() => setToggle('all')}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'web app'}
            value="web app"
            onClick={() => setToggle('web app')}
          >
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'IOT'}
            value="IOT"
            onClick={() => setToggle('IOT')}
          >
            IOT PROJECTS
          </ToggleButton>
          <Divider />
          {/* Uncomment if needed */}
          {/* <ToggleButton
            active={toggle === 'machine learning'}
            value="machine learning"
            onClick={() => setToggle('machine learning')}
          >
            MACHINE LEARNING
          </ToggleButton> */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' ? (
            projects.map((project) => (
              <ProjectCard
                key={project.id} // Ensure each ProjectCard has a unique key
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))
          ) : (
            projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard
                  key={project.id} // Ensure each ProjectCard has a unique key
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
