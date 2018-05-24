import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'box',
})`
    background: #e6fffb;
    &:hover {
        background-color: #ffff;
    }
    &:focus {
        background-color: red;
    }
    margin-bottom: 7px;
`;

export default Wrapper;