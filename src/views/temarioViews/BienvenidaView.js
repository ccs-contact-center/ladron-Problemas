import React, { Component } from 'react'
import { CardBody, CardHeader, Row, Col } from 'reactstrap'
import animated from 'animate.css'
import logo from '../../assets/img/brand/logo.png'
import bienvenida from '../../assets/img/ImgLadron/bienvenida.PNG'

class BienvenidaView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )
  render() {
    return (
      <div>
        <CardHeader className="text-center">
          <h1>¡Bienvenido! </h1>
        </CardHeader>
        <CardBody className="text-center">
          <Row className="centrado-fila">
            <Col md="6" sm="6" xs="12">
              <img
                src={logo}
                style={{ width: 260 }}
                alt="Logo CCS"
                className="img-fluid animated  bounceInRight delay-1s"
              />
              <div className="animated  bounceInLeft delay-1s">
                <h1>Capacitación CCS</h1>
                <h2>El Ladron de Problemas </h2>
                <h3 className="centrado-fila">
                  
                </h3>
              </div>
            </Col>
            <Col md="6" sm="6" xs="12">
              <img
                src={bienvenida}
                style={{ width: 300 }}
                alt="bienvenida"
                className="img-fluid  animated  bounceInRight delay-2s"
              />
            </Col>
          </Row>
        </CardBody>
        <animated/>
      </div>
    )
  }
}
export default BienvenidaView
