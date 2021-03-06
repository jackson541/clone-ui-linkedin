import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr'
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai'
import { MdPeopleOutline } from 'react-icons/md'
import { RiHandbagLine } from 'react-icons/ri'
import { TiMessages } from 'react-icons/ti'

export const Container = styled.header`
    background: var(--color-header);
    padding: 0 30px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: none;

    @media(min-width: 1180px) {
        display: block
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;

    max-width: 1128px;
    margin: 0 auto;
    height: 52px;

    .left, .right nav {
        display: flex;
        align-items: center;
    }

    .right nav {
        height: 100%;

        button {
            background: none;
            border: 0;
            outline: 0;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 90px;
            min-height: 100%;

            color: var(--color-icons);
            cursor: pointer;

            &:hover {
                color: var(--color-white)
            }
        }

        .active {
            border-bottom: 2px solid #fff;
            color: var(--color-white)
        }
    }
`

const generalIconsCss = css`
    width: 24px;
    height: 24px;
`

export const LindekinIcon = styled(GrLinkedin)`
    width: 34px;
    height: 34px;
    color: var(--color-linkedin);
    background: #fff;
    border-radius: 4px;
    flex-shrink: 0;
`

export const SearchInput = styled.input`
    margin-left: 12px;
    width: 280px;

    background: var(--color-input);
    color: var(--color-black);
    font-size: 14px;
    padding: 7.5px 8px;
    border: none;
    outline: none;
    border-radius: 2px;

    &:focus {
        background: var(--color-white)
    }
`

export const HomeIcon = styled(AiFillHome)`
    ${generalIconsCss}
`

export const PeopleIcon = styled(MdPeopleOutline)`
    ${generalIconsCss}
`

export const BagIcon = styled(RiHandbagLine)`
    ${generalIconsCss}
`

export const MessagesIcon = styled(TiMessages)`
    ${generalIconsCss}
`

export const NotificationIcon = styled(AiOutlineBell)`
    ${generalIconsCss}
`

export const ProfileCircle = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid var(--color-icons);
`

export const CaretDownIcon = styled(AiFillCaretDown)`
    width: 16px;
    height: 16px;
`
