import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import ReactPlayer from 'react-player'
import tres from '../../assets/img/ImgEmpatia/tres.png'

class TemaTresView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>El Ladrón de Problemas</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="">
            <Col xs="12" className="animated zoomInUp delay-1s">
              <h2>¿Quién es el culpable?</h2>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-2s">
              <p>
                Según los problemas urgentes que tienes a la mano, ¿
                <b className="text-danger">
                  estos fueron causados por la persona que los sufre
                </b>
                ? o ¿
                <b className="text-warning">sucedieron por causas externas</b>?
                una vez más, realiza la separación.
              </p>
            </Col>

            <Col
              md="12"
              className="mt-4  animated zoomInUp delay-3s"
            >
              <Row className="centrado-fila">
                <Col xs="6">
                  <p>
                    ¿<b>Sabías qué</b>? Si una persona piensa que otra persona
                    se han buscado sus propios problemas, es menos probable que
                    decida ayudarle.{' '}
                  </p>
                </Col>
                <Col xs="6">
                  <img
                    src={tres}
                    style={{ width: 360 }}
                    alt="tres"
                    className="img-fluid   animated  fadeInDown  delay-1s"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
