import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import urgente from '../../assets/img/ImgLadron/urgente.PNG'
import noUrgente from '../../assets/img/ImgLadron/noUrgente.PNG'

class TemaDosView extends Component {
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
              <h2>Priorizando Problemas</h2>
            </Col>
            <Col md="12" className="centrado-fila animated zoomInUp delay-2s">
              <p>
                Una vez que tengas tu listado, vamos a priorizar los problemas,
                hay que realizar la división de tu lista como{' '}
                <b className="text-danger">urgente</b> y{' '}
                <b className="text-warning">no urgente</b>.
              </p>
            </Col>
            <Col
              md="12"
              className="mt-4 centrado-fila animated  zoomInUp delay-3s"
            >
              <img
                src={urgente}
                style={{ width: 200 }}
                alt="Urgente"
                className="img-fluid   animated  fadeInDown  delay-1s"
              />

              <div></div>

              <img
                src={noUrgente}
                style={{ width: 200 }}
                alt="noUrgente"
                className="img-fluid   animated  fadeInDown  delay-1s"
              />
            </Col>
            <Col
              md="12"
              className="mt-4 animated zoomInUp delay-4s centrado-fila"
            >
              <p>
                Una vez que tengas lista tu separación, por el momento{' '}
                <b>guarda los problemas no urgentes</b>.{' '}
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
