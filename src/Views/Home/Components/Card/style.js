import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 360px;
    margin: 20px;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0px 0px 15px #cccccc;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
        box-shadow: 0px 0px 65px #adadad;
        transform: scale(1.01);
    }
`
export const Image = styled.img`
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
`
export const Content = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
`
export const CardTitle = styled.p`
    margin: 0 0 10px 0;
    font-size: 22px;
    color: black;
`
export const CardSubtitle = styled.p`
    margin: 0 0 15px 0;
    font-size: 14px;
    color: gray;
`
export const Category = CardSubtitle.extend`
    margin: 0px;
    font-size: 13px;
`
