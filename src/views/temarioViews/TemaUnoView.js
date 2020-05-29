import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Objetivo from '../../assets/img/ImgEmpatia/objetivo.png'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>El Ladrón de Problemas</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated zoomInUp delay-1s">
                <b>Detectacdo Problemas</b>
              </h2>
            </Col>
            <Col md="12" className="animated zoomInUp delay-2s">
              <p className="text-justify">
                En la actividad del día de hoy, con ayuda de varias hojas
                primero en lista <b>todos esos problemas que te afectan día a día</b>,
                pueden ser dentro del contexto laboral, personal, social, etc.
              </p>
              
            </Col>
            <Col xs="12" sm="12" className="centrado-fila">
              <img
                src={Objetivo}
                style={{ width: 160 }}
                alt="Objetivo"
                className="img-fluid  animated  fadeInDown  delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
