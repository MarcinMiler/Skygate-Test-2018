import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    height: 60px;
    margin: 15px 0 35px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Label = styled.p`
    margin: 0;
    color: black;
    font-weight: 500;
    font-size: 15px;
`
export const StyledInputWithLabel = styled.input`
    width: ${props => (props.autoWidth ? 'auto' : '100%')};
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #f2f1f6;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: black;
    transition: all 200ms ease-in;

    &:focus {
        outline: none;
        border: 1px solid #f50057;
        color: #f50057;
    }
`
export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 30px;
    margin: 20px 0 10px 0;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #f2f1f6;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: black;
    transition: all 200ms ease-in;
    resize: none;

    &:focus {
        outline: none;
        border: 1px solid #f50057;
        color: #f50057;
    }
`
export const Wrapper = styled.div`
    width: 80%;
    height: 55px;
    margin: 0 auto 15px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #f2f1f6;
`
export const WrapIcon = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: white;
    border-right: 1px solid #f2f1f6;
`
export const StyledInputWithIcon = styled.input`
    height: 55px;
    flex-grow: 1;
    padding: 0 20px 0 20px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: black;
    &:focus {
        outline: none;
    }
`
