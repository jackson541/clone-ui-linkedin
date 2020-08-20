import styled from 'styled-components';
import { BsPencilSquare } from 'react-icons/bs';

export const Container = styled.div`
    background: var(--color-header);
    height: 47px;
    width: 20%;
    padding: 0 15px;
    border-radius: 2px;

    position: fixed;
    bottom: 0;
    right: 25px;

    cursor: pointer;

    span {
        color: var(--color-white);
        font-size: 14px;
        margin-left: 10px;
    }

    .left, .right {
        display: flex;
        align-items: center;
    }

    .userActive {
        display: flex;
        align-items: baseline;
    }

    .circle-green {
        width: 10px;
        height: 10px;

        border: 1.5px solid #fff;
        border-radius: 50%;
        background: #6dae4f;

        margin-left: -10px;
    }

    display: none;

    @media(min-width: 1180px) {
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ImageProfile = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
`

export const EditIcon = styled(BsPencilSquare)`
    width: 16px;
    height: 16px;
    margin-right: 10px;
    color: var(--color-white)
`
