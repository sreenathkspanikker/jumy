import React, {useState, useEffect} from 'react';
import { Modal, Button, Image, Figure } from 'react-bootstrap';
// import * as Components from '../components';
import ImgAvatar from '../assets/images/img-avatar-modal.png';
import { Form, Input } from 'antd';

export const Signup = (props) => {
    const [show, setShow] = useState(false);
    const [requiredMark, setRequiredMarkType] = useState('optional');

    useEffect(() => {
      let isLoad = true;
      if (isLoad & props.data) setShow( props.data)
      return () => {
        isLoad = false;
      };
    }, [props.data]);

    const handleClose = () => {
      setShow(false)
      props.signupModal(false)
  }

  const onFinish = (values) => {
   props.userData(values)
    if (values.user.email && values.user.username) {
      handleClose()
    }
  };

    return (
    <Modal show={show} onHide={handleClose} className='modal-signup' centered>
        <Button variant="close" onClick={handleClose}/>
        <Modal.Body>
          <div className='avatar-wrap'>
            <Figure>
              <Figure.Image src={ImgAvatar} />
              <Figure.Caption>Sign up to Jumy</Figure.Caption>
            </Figure>
          </div>

            <Form  
              name="nest-messages" 
              onFinish={onFinish} layout="vertical" 
              initialValues={{
                requiredMarkValue: requiredMark,
              }}
              requiredMark={requiredMark}
            >
              <Form.Item name={['user', 'name']}  label="Display Name" >
                <Input />
              </Form.Item>
              
              <Form.Item name={['user', 'username']}  label="Username" hasFeedback required rules={[{ required: true }]} >
                <Input />
              </Form.Item>

              <Form.Item name={['user', 'email']}  label="Email"  hasFeedback required rules={[{ required: true }]} >
                <Input />
              </Form.Item>

            <Form.Item name={['user', 'location']} label="Location">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
                
        </Modal.Body>
    </Modal>
    )
  }