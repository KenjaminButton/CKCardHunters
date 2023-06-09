import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = () => {

  const navigateTo = useNavigate()

  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart
  
  if (!shippingAddress) {
    navigateTo('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')
   
  const dispatch = useDispatch()
  // const location = useLocation();
  

  const submitHandler = (evt) => {
    evt.preventDefault()
    // console.log('submit handler clicked!')
    dispatch(savePaymentMethod(paymentMethod))
    navigateTo('/placeorder')
  } 

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3/>
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label> 
          <Col>
          <Row>
            <Form.Check 
              type='radio' 
              label='PayPal or Credit Card' 
              id='PayPal' 
              name='paymentMethod' 
              value='PayPal' 
              checked 
              onChange={(evt) => setPaymentMethod(evt.target.value)}>
            </Form.Check>
          </Row>
          {/* <Row>
            <Form.Check 
              type='radio' 
              label='Stripe' 
              id='Stripe' 
              name='paymentMethod' 
              value='Stripe' 
              onChange={(evt) => setPaymentMethod(evt.target.value)}>
            </Form.Check>
            </Row> */}
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen