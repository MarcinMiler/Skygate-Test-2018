import styled from 'styled-components'

const Title = styled.h1.attrs({
    margin: props => props.padd || '0'
})`
    margin: 0;
    padding-top: ${props => props.padd};
    padding-bottom: ${props => props.padd};
    padding-bottom: 30px;
    font-weight: 500;
    font-size: 38px;
    text-align: ${props => (props.left ? 'left' : 'center')};
    color: #f50057;
`

export default Title
