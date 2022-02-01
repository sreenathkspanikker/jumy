import React from 'react';
import { Col, Figure, Row, Image, Badge, Button, Tabs, Tab } from 'react-bootstrap';
import * as Components from '../components'
import ImgMain from '../assets/images/img-main.jpg';
import ImgJimy from '../assets/images/img-jimy.jpg';
import IcHumberger from '../assets/images/ic-humburger.svg';

export const Tabcontent = () => {

  return (
      <div className='tab-data'>
          <Row>
              <Col md={6}>
                <Figure>
                    <Figure.Image src={ImgMain} />
                </Figure>
                <Components.Follow />
              </Col>
              <Col md={6}>
                    <h3>Idyllic lake</h3>
                    <Row>
                      <Col sm={10}>
                      <p>Idyllic Lake is a forward-thinking collection of digital artworks that mixes surrealism and impressionism. There are plenty of subliminal messages embedded in every single artworks that makes it contemplative and very intriguing. This collection features a unique artwork.</p>
                      </Col>
                      <Col sm={2}>
                          <Image src={ImgJimy}/>
                      </Col>
                  </Row>
                  <div className='bid-details'>
                    <Row>
                        <Col lg={6}>
                            <Badge>Current Bid</Badge>
                            <h4><Components.Icon src={IcHumberger} />3.50 ETH</h4>
                            <p>$ 10.000 USD</p>
                            <Button variant='primary'>Buy with ETH</Button>
                        </Col>
                        <Col lg={6}>
                            <Badge>ENDS IN</Badge>
                            <ul>
                                <li>19<span>hours</span></li>
                                <li>26<span>minutes</span></li>
                                <li>32<span>seconds</span></li>
                            </ul>
                            <Button variant='secondary'>Buy with Card</Button>
                        </Col>
                    </Row>
                  </div>
                    <div className='home-sub-tab'>
                        <Tabs defaultActiveKey="bids" id="sub-table">
                            <Tab eventKey="details" title="Details">
                                <Components.Lists />
                            </Tab>
                            <Tab eventKey="owner" title="Owner">
                                <Components.Lists />
                            </Tab>
                            <Tab  eventKey="bids" title="Bids">
                                <Components.Lists />
                            </Tab>
                            <Tab eventKey="history" title="History">
                                <Components.Lists />
                            </Tab>
                        </Tabs>
                  </div>
              </Col>
          </Row>
      </div>
  )
};
