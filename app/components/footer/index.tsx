import React from 'react'
import { Link } from 'react-router-dom'
import { Container, FooterContent, FooterInformation, FooterLogo } from './styles'
import { Logo } from '../logo'
import { Config } from '~/config'


export default function Footer() {

  return (
    <Container>
      <FooterContent>
        <FooterLogo>
          <Logo>
            {/* {Config.logo} */}
          </Logo>
          <span className="footer-text">{Config.footerText}</span>
        </FooterLogo>
        <FooterInformation>
          <h1>Docs</h1>
          <Link to={`${Config.path}docs/quick-start`}>Quick start</Link>
          <Link to={`${Config.path}docs`}>Docs</Link>
        </FooterInformation>
        <FooterInformation>
          <h1>Community</h1>
          <a target="_blank" href={Config.repository}>Github</a>
          <a target="_blank" href={`${Config.repository}/issues`}>Request a feature</a>
          <a target="_blank" href={`${Config.repository}/issues`}>Report a bug</a>
          <a target="_blank" href={`${Config.repository}`}>Leave us a start</a>
        </FooterInformation>
      </FooterContent>
    </Container>
  )
}