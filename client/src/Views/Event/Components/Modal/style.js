import styled from 'styled-components'

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    background-color: rgba(0, 0, 0, 0.5);
`
export const ModalContent = styled.div`
    width: 500px;
    padding: 30px;
    background-color: white;
    border-radius: 4px;
`
export const ModalTitle = styled.p`
    margin: 0;
    font-size: 22px;
    color: black;
`
export const ModalButtons = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
`
export const Row = styled.div`
    width: 330px;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
