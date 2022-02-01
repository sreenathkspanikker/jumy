import React from 'react';
import * as Components from './'
import { List, Avatar } from 'antd';
import { Button, Nav, Navbar } from 'react-bootstrap';
import ImgArrow from '../assets/images/ic-arrow.svg';
import imgProfile from '../assets/images/img-profile.png';
import ImgInstagram from '../assets/images/ic-instagram.svg';
import ImgTwitter from '../assets/images/ic-twitter.svg';

export const Follow = () => {
    const data = [
        {
            name: 'Paul Vihez',
            id: '@Jumaker',
            desc: 'Jumaker is a contemporary digital Artist with a unique signature and very authentic genr... ',
        },
      ];
    return (
        <div className='follow-box'>            
            <List itemLayout="horizontal" dataSource={data} renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={imgProfile} />}
                        title={<a href="#"><b>{item.name}</b> {item.title} <b>{item.price}</b></a>}
                        description={item.id}
                    />
                    <List.Item.Meta description={item.desc} />
                    {/* <Button variant='link'><Components.Icon src={imgArrow} /></Button> */}
                </List.Item>
                )}
            />
            <div className='social-box'>
                <Navbar>
                    <Nav>
                        <Nav.Link>
                            <Components.Icon width={24} height={24} src={ImgInstagram} />
                            @Jumaker
                        </Nav.Link>
                        <Nav.Link>
                            <Components.Icon src={ImgTwitter} />
                            @Jumaker
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Item><Button variant='primary'>Follow</Button></Nav.Item>
                        <Nav.Link><Components.Icon src={ImgArrow} /></Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </div>
    )
}
