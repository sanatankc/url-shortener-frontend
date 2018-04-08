import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: calc(100vw - 20px);
  max-width: 500px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding-left: 20px;
  letter-spacing: 2.2px;
  transition: 0.3s all ease-in-out;
  opacity: ${props => props.shouldVisible ? 1 : 0}
`

const StatusText = styled.span`
  color: ${props => props.color}
`

const Status = props => (
  <Wrapper {...props}>
    <StatusText {...props}>{props.text}</StatusText>
  </Wrapper>
)

export default Status
