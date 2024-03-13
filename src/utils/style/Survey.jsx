import styled from "styled-components"
import colors from "./colors"


export const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

export const QuestionContent = styled.span`
  width: 50%; 
  margin: 30px;
  display: block;
  border: 3px solid ${colors.primary};
  border-radius: 7%/5%;
  padding: 5%;
  background-color: ${colors.primary};
  color: ${colors.backgroundLight};
  font-size: xx-large;
  text-align: center; 
`

export const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

export const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
