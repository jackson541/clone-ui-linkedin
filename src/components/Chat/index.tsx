import React from 'react';

import { Container, ImageProfile, EditIcon } from './styles';

const Chat: React.FC = () => {
  return (
      <Container>
          <div className="left">
            <div className="userActive">
                <ImageProfile src="https://github.com/jackson541.png" />
                <div className="circle-green"/>
            </div>
            <span>Mensagens</span>
          </div>
          <div className="right">
              <EditIcon />
              <span>. . .</span>
          </div>
      </Container>
  );
}

export default Chat;