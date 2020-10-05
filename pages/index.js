import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
const ChatBot = dynamic(import('../components/chatbot'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat bot sandbox with NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ChatBot />
        <h1 className={styles.title}>
          Chat bot sandbox with NextJS
        </h1>
      </main>
    </div>
  )
}
