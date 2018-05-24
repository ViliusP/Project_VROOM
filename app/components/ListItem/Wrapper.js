import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'box',
})`
    background: #e6fffb;
    border-radius: 8px;
    &:hover {
        background-color: #ffff;
    }
    &:focus {
        background-color: red;
    }

`;

export default Wrapper;