import React from 'react';

import { 
    Container,
    Wrapper,
    LindekinIcon,
    SearchInput,
    HomeIcon,
    PeopleIcon,
    BagIcon,
    MessagesIcon,
    NotificationIcon,
    ProfileCircle,
    CaretDownIcon
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
      <Container>
          <Wrapper>
              <div className="left">
                <LindekinIcon />
                <SearchInput placeholder="Pesquisar" />
              </div>

              <div className="right">
                  <nav>
                    <button className="active">
                        <HomeIcon />
                        <span>Início</span>
                    </button>
                    <button>
                        <PeopleIcon />
                        <span>Minha rede</span>
                    </button>
                    <button>
                        <BagIcon />
                        <span>Vagas</span>
                    </button>
                    <button>
                        <MessagesIcon />
                        <span>Mensagens</span>
                    </button>
                    <button>
                        <NotificationIcon />
                        <span>Notificações</span>
                    </button>
                    <button>
                        <ProfileCircle src='https://github.com/jackson541.png' />
                        <span>
                            Eu <CaretDownIcon />
                        </span>
                    </button>
                  </nav>
              </div>
          </Wrapper>
      </Container>
  )
}

export default DesktopHeader;