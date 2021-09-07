import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;

`;

export const Content = styled.div`
    img {
        display: flex;
        height: 50%;
    }

    .sticky-nav {
        position: sticky;
        top: 0;
    }
`;

