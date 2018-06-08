import styled from 'styled-components'
import MDSearch from 'react-icons/lib/md/search'
import Google from '../../Images/powered_by_google_on_white.png'

export const SingleInputContainer = styled.div`
    width: 100%;
    height: 60px;
    margin: 15px 0 35px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
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
export const DoubleSearchInputWrapper = styled.div`
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
export const SearchIcon = styled(MDSearch)`
    font-size: 32px;
    color: gray;
`
export const Row = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const InputContainer = styled.div`
    width: 50%;
    height: 55px;
    position: relative;
`
export const StyledSearchInput = styled.input`
    width: 100%;
    height: 55px;
    padding-left: 20px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: black;
    border-right: 1px solid #f2f1f6;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`
export const SugesstionWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 56px;
    left: 0;
    box-shadow: 0px 7px 15px #cccccc;
    z-index: 1100;
`
export const Sugesstion = styled.div`
    width: ${props => (props.widther ? '1180px' : '432px')};
    height: 55px;
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
`
export const PoweredByGoogle = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
`
export const GoogleImage = styled.div`
    width: 144px;
    height: 18px;
    background: url(${Google});
`
