import React, {useState, useEffect} from 'react';
import * as Components from './'
import Serch from '../assets/images/ic-search.svg'
import Graph from '../assets/images/ic-graph.svg'
import Indicatoe from '../assets/images/ic-ndicator.svg'
import Avatar from '../assets/images/img-avatar.png'
import Signout from '../assets/images/ic-signout.svg'
import User from '../assets/images/ic-user.svg'
import Edit from '../assets/images/ic-edit.svg'
import { Navbar, Nav, Form, FormControl, Container, Badge, Dropdown} from 'react-bootstrap';

export const Header = (props) => {
    const [serch, setSearch] = useState(true);
    const [isConnected, setConnect] = useState(false);
    const [dataUser, setData] = useState({});

    const handleChange = (e) => {
        console.log(e.target.value.length);
        setSearch(e.target.value.length > 0 ? false : true);
    }

    const handleClick = () => {
        if (isConnected)  props.signupModal(true)
        else props.walletModal({ modal: true})
    }
    useEffect(() => {
        let isLoad = true;
        if (isLoad & props.data) {
            setConnect(props.data)
        }
        if (props.user) {
            console.log(props.user);
            setData(props.user)
        }
        return () => {
          isLoad = false;
        };
      }, [props.data, props.user]);

    return (
        <header className='header'>
        <Navbar expand="sm" expand="lg">
            <Container >
                <Navbar.Brand href="#">
                    <Components.Logo />
                    <Badge>Beta</Badge>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='form-wrap'>
                    <Form>
                        <FormControl type="search"  aria-label="Search" onChange={(e) => handleChange(e)}/>
                        <div className='placeholder-wrap'>
                            <Components.Icon src={Serch} />
                            {serch && <span>Search art or artists...</span>}
                        </div>

                    </Form>
                </Nav>
                <Nav>
                    <Nav.Link >Explore</Nav.Link>
                    <Nav.Link >Drops</Nav.Link>
                    <Nav.Link >Community</Nav.Link>
                </Nav>
                <Nav className='btn-section'>
                {isConnected ? 
                        <>
                        <Nav.Link className='link-indicator' >
                            <Components.Icon src={Graph}/>
                            <Components.Icon className="indicator" src={Indicatoe}/>
                        </Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-user">
                                <Components.Icon src={Avatar}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {dataUser?.user?.username === undefined ?
                                    (                                    
                                        <Dropdown.Item className='drop-header d-block text-center' href="#">
                                            <span className='wrap'> Please Sign Up</span>
                                        </Dropdown.Item>
                                    ) : (
                                        <>
                                        <Dropdown.Item className='drop-header' href="#">
                                            <span className='wrap'> {dataUser?.user?.username} </span>
                                            <Badge>COLLECTOR</Badge>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <Components.Icon src={Edit}/>Edit Profile</Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <Components.Icon src={User}/>My Profile</Dropdown.Item>
                                        <Dropdown.Item  href="#"><Components.Icon src={Signout}/>Sign Out</Dropdown.Item>
                                        </>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        </>
                    : ''}
                    <Nav.Link className='btn-connect' onClick={handleClick}>
                        {isConnected ? 'Become a Creator' : 'Connect Wallet'}
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
    )
}