import React, { useState, useEffect } from 'react';

import MobileHeader from '../MobileHeader'
import DesktopHeader from '../DesktopHeader'
import LeftColumn from '../LeftColumn'
import MiddleColumn from '../MiddleColumn'
import RightColumn from '../RightColumn'
import AdBanner from '../AdBanner';
import Chat from '../Chat';

import { Container } from './styles';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <Container>
        <DesktopHeader />
        <MobileHeader />

        <span><AdBanner /></span>
        <main>
            <LeftColumn isLoading={isLoading} />
            <MiddleColumn isLoading={isLoading} />
            <RightColumn isLoading={isLoading} />
        </main>

        {!isLoading && <Chat />}
    </Container>
  )
}

export default Layout;