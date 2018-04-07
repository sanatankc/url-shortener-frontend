import React from 'react'
import styled from 'styled-components'
import { boxShadow, center } from '../utils'

const Container = styled.div`
  ${center}
  position: fixed;
  width: 80px;
  height: 80px;
  bottom: 30px;
  right: 30px;
  border-radius: 50%;
  background: white;
  box-shadow: ${boxShadow};
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  svg.fill {
    fill: #4db9e6;
  }

  &:hover {
    background: #4db9e6;
  }
  &:hover svg.fill {
    fill: white;
  }
  &:hover path.fill {
    fill: white;
  }
`

const Svg = styled.svg`
  position: absolute;
  width: 45px;
  transition: 0.3s all ease-in-out;
  transform: ${props => props.isBackIcon ? 'scale(0)' : 'scale(1)'};
  &.fill {
    fill: #4db9e6;
    transform: ${props => props.isBackIcon ? 'scale(1)' : 'scale(0)'};
  }
`
const Path = styled.path`
  transition: 0.3s all ease-in-out;
  &.fill {
    fill: #4db9e6;
  }
`

const URLListButton = props => (
  <Container>
      <Svg height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='fill' {...props}>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </Svg>
      <Svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" {...props}>
        <Path
          d="M459.654,233.373L369.123,323.873C319.154,373.873 238.092,373.873 188.123,323.873C180.248,316.029 174.092,307.185 168.685,298.06L210.748,255.997C212.748,253.981 215.217,252.825 217.576,251.466C220.482,261.404 225.56,270.81 233.373,278.622C258.326,303.591 298.936,303.56 323.873,278.622L414.373,188.122C439.342,163.153 439.342,122.559 414.373,97.606C389.435,72.653 348.842,72.653 323.873,97.606L291.685,129.825C265.576,119.653 237.435,116.919 210.044,120.934L278.622,52.356C328.622,2.372 409.653,2.372 459.653,52.356C509.623,102.342 509.623,183.389 459.654,233.373ZM220.326,382.186L188.123,414.405C163.17,439.343 122.56,439.343 97.607,414.405C72.654,389.436 72.654,348.842 97.607,323.874L188.123,233.374C213.092,208.405 253.67,208.405 278.623,233.374C286.42,241.171 291.498,250.577 294.436,260.499C296.811,259.124 299.249,257.999 301.249,255.999L343.312,213.952C337.937,204.796 331.749,195.983 323.874,188.124C273.905,138.14 192.843,138.14 142.858,188.124L52.358,278.624C2.374,328.624 2.374,409.655 52.358,459.655C102.342,509.624 183.389,509.624 233.374,459.655L301.968,391.061C274.561,395.092 246.42,392.342 220.326,382.186Z"
          className='fill'
        />
      </Svg>
  </Container>
)

export default URLListButton
