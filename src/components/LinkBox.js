import React from 'react'
import styled from 'styled-components'
import { boxShadow, size, center } from '../utils'

const URLContainer = styled.div`
  width: calc(100vw - 20px);
  max-width: 600px;
  background: white;
  box-shadow: ${boxShadow};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 30px;
  opacity: ${props => props.shouldVisible ? '1' : '0'};
  transition: 0.3s all ease-in-out;
`
const OriginalURL = styled.div`
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 2.2px;
  max-width: 560px;
  width: calc(100vw - 60px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const SecondRow = styled.div`
  display: flex;
  margin-top: 20px;
`
const ShortURL = styled.div`
  color: #999;
`
const Icon = styled.div`
  position: relative;
  ${center}
  box-shadow: ${boxShadow};
  ${size('35px')}
  border-radius: 50%;
  top: -10px;
  margin-left: 10px;
  cursor: pointer;
  svg {
    fill: #4db9e6;
    width: 20px;
    height: 20px;
    transition: 0.2s fill ease-in-out;
  }
  transition: 0.2s background ease-in-out;
  &:hover {
    background: #4db9e6;
    svg {
      fill: white;
    }
  }
`

const LinkBox = props => (
  <URLContainer shouldVisible={props.shouldVisible}>
      <OriginalURL>{props.url}</OriginalURL>
      <SecondRow>
        <ShortURL>https://short.sh/{props.shortCode}</ShortURL>
        <div style={{flex: '1'}}>
          <Icon>
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          </Icon>
        </div>
          <Icon>
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
          </Icon>
      </SecondRow>
    </URLContainer>
)

export default LinkBox
