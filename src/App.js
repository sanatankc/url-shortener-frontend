import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import link from './link.svg'
import './App.css'

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
`
const Logo = styled.img`
  height: 40px;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SearchBar = styled.div`
  display: flex;
  margin-top: 100px;
  width: calc(100vw - 20px);
  max-width: 500px;
  height: 50px;
`
const SearchInput = styled.input`
  display: block;
  box-sizing: border-box;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 30px 0 0 30px;
  box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
  padding: 25px;
  flex: 1;
  font-size: 18px;
  letter-spacing: 3px;
  &:focus {
    outline: none;
    border: none;
  }
  &::placeholder {
    color: #999;

  }
`
const SearchButton = styled.button`
  height: 100%;
  width: 80px;
  border: none;
  outline: none;
  background: #4db9e6;
  border-radius: 0 30px 30px 0;
  box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
  img {
    width: 30px;
  }
`
class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <Logo src={logo} />
        </NavBar>
        <Flex>
          <SearchBar>
            <SearchInput placeholder='Shorten your links'></SearchInput>
            <SearchButton>
              <img src={link} />
            </SearchButton>
          </SearchBar>
        </Flex>
      </div>
    )
  }
}

export default App
