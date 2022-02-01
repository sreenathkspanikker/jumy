import React, { useState } from 'react';
import * as Components from './'
import * as Modals from '../modals'

export const Layout = (props) => {
  const [walletShow, setwalletShow] = useState(false);
  const [signupShow, setsignupShow] = useState(false);
  const [isConnected, setConnect] = useState(false);
  const [dataUser, setData] = useState({});

  const walletModal = e => {
    setwalletShow(e.modal) 
    setConnect(e.isConnected)
  }

  const signupModal = e => setsignupShow(e)
  const userData = e => setData(e)

  return(
  <main className={`app-layout ${props.className}`}>
    <Components.Header walletModal={(e) => walletModal(e)} data={isConnected} user={dataUser} signupModal={(e)=> signupModal(e)}/>
    <section className='app-content'>
      {props.children}
    </section>
    <Components.Footer />
    <Modals.Wallet data={walletShow} walletModal={(e) => walletModal(e)}/>
    <Modals.Signup data={signupShow} signupModal={(e) => signupModal(e)} userData={(e)=>userData(e)}/>
  </main>
  )
}