import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import LinkBox from './components/LinkBox'
import generateShortCodeByURL from './api/generateShortCodeByURL'
import { UNVALID_URL_ERROR } from './CONSTANTS'
import { boxShadow } from './utils'
import routeObj from './routeObj'
import logo from './logo.svg'
import link from './link.svg'
import URListButton from './components/URListButton'

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  box-shadow: ${boxShadow};
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
  margin-bottom: 30px;
  transition: 0.3s all ease-in-out;
  opacity: ${props => props.opacity}
`
const SearchInput = styled.input`
  display: block;
  box-sizing: border-box;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 30px 0 0 30px;
  box-shadow: ${boxShadow};
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
  box-shadow: ${boxShadow};
  cursor: pointer;
  img {
    width: 30px;
  }
`
const ColumnReverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  state = {
    searchText: '',
    urlList: []
  }

  componentDidMount() {
    const urlList = JSON.parse(localStorage.getItem('urlList'))
    if (urlList !== null) {
      this.setState({ urlList })
    }
    console.log(this.props)
  }

  async onFormSubmit(e) {
    const url = this.state.searchText
    if (url !== '') {
      const data = await generateShortCodeByURL(url)
      if (data.error === UNVALID_URL_ERROR) {
        console.error('invalid url')
      } else if (data.error) {
        console.error('some problems with the api call')
      } else {
        const shortCode = data.shortcode
        this.setState(prev => ({
          urlList: [...prev.urlList, { url, shortCode }],
          searchText: ''
        }), () => {
          localStorage.setItem('urlList', JSON.stringify(this.state.urlList))
        })
      }
    }
  }

  renderLinkBox() {
    const { urlList } = this.state
    const lastItemIndex = urlList.length - 1
    const { pathname } = this.props.location
    const shouldVisible = pathname === '/urls'
    return (
      urlList.map((data, index) => {
        const transitionDelay = `0.${urlList.length - index}s`
        return (
          <LinkBox
            {...data}
            shouldVisible={index === lastItemIndex || shouldVisible}
            key={data.shortCode}
            transform={routeObj[pathname].linkBoxTransform}
            transitionDelay={transitionDelay}
          />
        )
      })
    )
  }

  render() {
    const { pathname } = this.props.location
    return (
      <div>
        <NavBar>
          <Logo src={logo} />
        </NavBar>
        <Flex>
          <SearchBar opacity={routeObj[pathname].searchBarOpacity}>
            <SearchInput
              placeholder='Shorten your links'
              value={this.state.searchText}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  this.onFormSubmit()
                }
              }}
              onChange={e => {
                this.setState({searchText: e.target.value})
              }}
            ></SearchInput>
            <SearchButton onClick={this.onFormSubmit}>
              <img src={link} alt='Search Icon' />
            </SearchButton>
          </SearchBar>
          <ColumnReverse>
            {this.renderLinkBox()}
          </ColumnReverse>
        </Flex>
        <Link to='/urls'>
          <URListButton />
        </Link>
      </div>
    )
  }
}

export default withRouter(App)
