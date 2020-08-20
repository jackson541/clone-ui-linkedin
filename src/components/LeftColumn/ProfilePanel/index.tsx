import React from 'react';

import Panel from '../../Panel';

import { Container, SaveIcon } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/jackson541.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Jackson Alves</h1>
        <h2>Desenvolvedor</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>

        <div className="separator"></div>

        <div className="saved-items">
          <SaveIcon />
          <span>Itens salvos</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
