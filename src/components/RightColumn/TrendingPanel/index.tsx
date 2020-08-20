import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Rocketseat</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Maratona Behind the Code</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Jackson Alves website</span>
              <span className="subtext">há 1 d • 1500 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Next Level Week</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Maratona Behind the Code</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Jackson Alves website</span>
              <span className="subtext">há 1 d • 1500 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
