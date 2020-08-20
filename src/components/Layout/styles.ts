import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;


  @media (min-width: 1180px) {
        > main {
            margin: 0 30px;
            display: flex;
            justify-content: center
        }
        
        > span {
            margin: 58px 0 7px 0;
            display: flex;
        }
  }

  .left-column,
  .right-column,
  .ad-banner {
      display: none
  }

  @media (min-width: 1180px) {
    .left-column,
    .right-column,
    .ad-banner {
        display: unset
    }

    .middle-column {
        margin: 0 25px 16px
    }
  }
`;
