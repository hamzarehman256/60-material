import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'

const BillForecast = ( {navigation} ) => (
  <Background>
    {/* <Logo />
    <Header>Let’s start</Header> */}
    <Paragraph>
      Bill Forecast
    </Paragraph>

  </Background>
)

export default BillForecast
