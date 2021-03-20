import React, {useState, useEffect} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'

const UsageScreen = ( {navigation} ) => {

  const [alerts, setAlerts] = useState([])
  const [ampere, setAmpere] = useState([])
  const [power, setPower] = useState([])

  useEffect(() => {
      function getAlerts() {
        fetch("http://192.168.43.6:8123/api/states/sensor.voltage", {
          method: "GET",
          headers: new Headers({
             'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwMTI0NjA5ODc2MTI0YTQ1YTk4MDFlODE4ZGQ5YmY2MSIsImlhdCI6MTYxMzc0NTc3MCwiZXhwIjoxOTI5MTA1NzcwfQ.RHzgHe6BpmtihYkcrhwX-fTUGYKorPWB1YuPa3Dj_g8',
             'Accept': 'application/json',
            'Content-Type': 'application/json'
          }),
        })
          .then(response => response.json())
          .then(response => {
            setAlerts(response);
            console.log("This is Response " + response);
          })
          .catch(err => {
            console.log("This is Error in Usage : " + err);
          });
          fetch("http://192.168.43.6:8123/api/states/sensor.ampere", {
            method: "GET",
            headers: new Headers({
               'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwMTI0NjA5ODc2MTI0YTQ1YTk4MDFlODE4ZGQ5YmY2MSIsImlhdCI6MTYxMzc0NTc3MCwiZXhwIjoxOTI5MTA1NzcwfQ.RHzgHe6BpmtihYkcrhwX-fTUGYKorPWB1YuPa3Dj_g8',
               'Accept': 'application/json',
              'Content-Type': 'application/json'
            }),
          })
            .then(response => response.json())
            .then(response => {
              setAmpere(response);
              console.log("This is Response " + response);
            })
            .catch(err => {
              console.log("This is Error in Usage : " + err);
            });

            fetch("http://192.168.43.6:8123/api/states/sensor.power", {
            method: "GET",
            headers: new Headers({
               'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwMTI0NjA5ODc2MTI0YTQ1YTk4MDFlODE4ZGQ5YmY2MSIsImlhdCI6MTYxMzc0NTc3MCwiZXhwIjoxOTI5MTA1NzcwfQ.RHzgHe6BpmtihYkcrhwX-fTUGYKorPWB1YuPa3Dj_g8',
               'Accept': 'application/json',
              'Content-Type': 'application/json'
            }),
          })
            .then(response => response.json())
            .then(response => {
              setPower(response);
              console.log("This is Response " + response);
            })
            .catch(err => {
              console.log("This is Error in Usage : " + err);
            });
        
      }
        // fetch(getEndpoint('api/alerts/all'))
        //   .then(result => result.json())
        //   .then(result => setAlerts(result))
      getAlerts()
      const interval = setInterval(() => getAlerts(), 900)
      return () => {
        clearInterval(interval);
      }
  }, [])
  return(

  <Background>
    <Paragraph>Voltage : {alerts.state}</Paragraph>
    <Paragraph>Ampere : {ampere.state}</Paragraph>
    <Paragraph>Power : {power.state}</Paragraph>
    
  </Background>
  )
}

export default UsageScreen
