import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 345;
    display: flex;
    justify-content: flex-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid gray;
    border-radius: 20px;

    button { 
        border-radius: 0 0  20px 20px;
    }

    img { 
        max-height: 200px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div { 
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%
    }
`;