import React from 'react';
import * as Components from './'
import { List, Avatar } from 'antd';
import { Button } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import imgArrow from '../assets/images/ic-arrow.svg';
import imgClose from '../assets/images/ic-close.svg';
import imgProfile from '../assets/images/img-profile.png';

export const Lists = () => {

  const data = [
    {
        name: '@jumaker',
        title: 'Ant Design Title 1',
        price: '3.5 ETH'
    },
    {
        name: '@jumaker',
        title: 'Ant Design Title 1',
        price: '3.5 ETH'
    },
    {
        name: '@jumaker',
        title: 'Ant Design Title 1',
        price: '3.5 ETH'
    },
    {
        name: '@jumaker',
        title: 'Ant Design Title 1',
        price: '3.5 ETH'
    },
    {
        name: '@jumaker',
        title: 'Ant Design Title 1',
        price: '3.5 ETH'
    },
  ];

  return (
    <PerfectScrollbar style={{height: '275px'}}>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src={imgProfile} />}
                title={<a href="#"><b>{item.name}</b> {item.title} <b>{item.price}</b></a>}
                description="20 minutes ago"
                />
                <Button variant='link'><Components.Icon src={imgArrow} /></Button>
                <Button variant='link'><Components.Icon src={imgClose} /></Button>
            </List.Item>
            )}
        />
    </PerfectScrollbar>
  )
};
