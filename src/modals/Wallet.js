import React, {useState, useEffect} from 'react';
import { Modal, Button, Nav } from 'react-bootstrap';
import * as Components from '../components';
import ImgLoad from '../assets/images/img-connect.png';
import ImgLoaded from '../assets/images/img-connected.png';
import ImgMetamask from '../assets/images/img-cat.png';

export const Wallet = (props) => {
    const [show, setShow] = useState(false);
    const [isConnected, setConeected] = useState(false);
    const [metaMask, setMask] = useState(false);

    const handleClick = () => setMask(true)
    const handleClose = () => {
        setShow(false)
        setMask(false)
        setConeected(false)
        props.walletModal({modal: false})
    }

    useEffect(() => {
      let isLoad = true;
      if (isLoad & props.data) {
        setShow( props.data)
        if (metaMask) {            
            setTimeout(() => {
                setConeected(true)
                props.walletModal({isConnected: true})
            }, 3000);
        }
      }
      return () => {
        isLoad = false;
      };
    }, [props.data, metaMask]);

    return (
    <Modal show={show} onHide={handleClose} className='modal-connect' centered>
        <Button variant="close" onClick={handleClose}/>
        <Modal.Body>
            <div className={`content ${(!isConnected && metaMask) ? 'animate__animated animate__pulse animate__infinite': ''}`}>
                {isConnected ? 
                    <React.Fragment>
                        <Components.Icon src={ImgLoaded} />
                        <h4>Connected :)</h4>
                        <p>Redirecting... to you to sign up page</p>
                    </React.Fragment> : 
                    <React.Fragment>
                        <Components.Icon src={ImgLoad} />
                        {metaMask ? 
                            <h4>Connecting...</h4> 
                            :
                            <>
                                <h4>Connect your wallet</h4>
                                <p>By connecting your wallet, you agree to our terms of service and our privacy policy.</p>
                                <Button variant='primary' onClick={handleClick}>
                                    Metamask
                                    <Components.Icon src={ImgMetamask} />
                                </Button>
                                <p>Don’t have Metamask yet?</p>
                                <Nav.Link >Download Metamask</Nav.Link>
                            </>      
                        }

                    </React.Fragment>
                }
            </div>
        </Modal.Body>
    </Modal>
    )
  }