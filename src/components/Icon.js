import React from 'react';
import { Image } from 'react-bootstrap';

export const Icon = (props) => (
  <Image src={props.src} className={`icon ${props.className}`} style={{ width: props.width, height: props.height}} fluid/>
)
