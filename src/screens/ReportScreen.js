import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'

const ReportScreen = ( {navigation} ) => (
  <Background>
    {/* <Logo />
    <Header>Let’s start</Header> */}
    <Paragraph>
      Reports Screen
    </Paragraph>

  </Background>
)

export default ReportScreen
