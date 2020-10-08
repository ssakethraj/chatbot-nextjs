import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import {
  browserName,
  browserVersion,
  deviceType,
  osName,
  osVersion
} from "react-device-detect";
import styles from '../styles/Home.module.css';
const ChatBot = dynamic(import('../components/chatbot'), { ssr: false });

class Home extends React.Component {
  state = {
    ip: {}
  }
  componentDidMount() {
    this.setState({
      iploading: true
    })
    fetch('https://ipapi.co/json/').then(res => res.json()).then(data => {
      this.setState({
        ip: data,
        iploading: false
      })
      console.log(data)
    }).catch(err => {
      console.err(err);
      this.setState({
        iploading: false
      })
    })
  }
  render() {
    const { ip, iploading } = this.state;
    return (
      <div className={styles.container}>
        <Head>
          <title>Chat bot sandbox with NextJS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <ChatBot />
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Browser details</h2>
              <p><b>Name: </b>{browserName}</p>
              <p><b>Browser version: </b>{browserVersion}</p>
              <p><b>Device type: </b>{deviceType}</p>
              <p><b>Operating System: </b>{osName}</p>
              <p><b>Operating System Version: </b>{osVersion}</p>
            </div>
            {!iploading ? <div className={styles.card}>
              <h2>IP details</h2>
              <p><b>IP address: </b>{ip.ip}</p>
              <p><b>City: </b>{ip.city}</p>
              <p><b>State: </b>{ip.region}</p>
              <p><b>Country: </b>{ip.country_name}</p>
              <p><b>Country Code:  </b>{ip.country}</p>
              <p><b>Country calling code:  </b>{ip.country_calling_code}</p>
              <p><b>Currency:  </b>{ip.currency}</p>
              <p><b>Lat. and Long.:  </b>{ip.latitude}, {ip.longitude}</p>
            </div> : <div className={styles.card} >Loading...</div>}
          </div>
        </main>
      </div >
    )
  }
}

export default Home;
