import styled from 'styled-components'
import BackgroundImage from '../../../../Images/category.jpeg'

export const CategoriesWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
export const Category = styled.div`
    width: 360px;
    height: 220px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: url(${BackgroundImage});
    background-position: center;
    box-shadow: 0px 0px 35px #aaaaaa;
    font-size: 42px;
    font-weight: 400;
    color: white;
    cursor: pointer;
`
