import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import SweetAlert from 'sweetalert2-react'

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <SweetAlert
          show={this.state.show}
          title="Enviado"
          text="Respuestas enviadas...."
          onConfirm={() => this.setState({ show: false })}
        />
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>Es hora de saber qué has aprendido de este curso. Elige la opción de acuerdo a cada pregunta. </p>
              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>1. ¿Qué es etiqueta telefónica?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio1" />
                        <Label check>(a) Es la estructura de la llamada.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio2" />
                        <Label check>(b) Es la etiqueta telefónica. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio3" />
                        <Label check>
                          (c) Es la manera de contestar el teléfono.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>2. ¿Por qué es importante dentro de tus funciones?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>
                          (a) Puede ser la diferencia entre un cliente
                          satisfecho y uno que decida buscar a la competencia.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>
                          (b) Se tendrá un mejor control de llamada y siempre
                          nos llamará.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>
                          (c) Nos ayudará a tener en ocasiones homologado el
                          servicio al cliente.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>3. ¿En qué partes de divide una llamada?</b>
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>(a) Inicio, Desarrollo, Cierre.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>(b) Desarrollo, Inicio, Cierre. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>(c) Inicio, Cierre, Inicio.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b> 4. ¿Qué debes hacer al personalizar en tu llamada?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>
                          (a) Mencionar el nombre del cliente por lo menos 3
                          veces durante la llamada.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>
                          (b) Mencionar el nombre del cliente por lo menos 2
                          veces durante la llamada.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>
                          (c) Mencionar el nombre del cliente por lo menos 4
                          veces durante la llamada.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        {' '}
                        5. “Fuistes”, “Haiga”, “Bajastes”, ”Pos”, “vinistes” son
                        ejemplos de:
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>(a) Gramaticales.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>(b) Muletillas.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>(c) Pleonasmos.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        {' '}
                        6. ¿A qué nos referimos cuando te pedimos que empatices
                        con el cliente?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>
                          (a) Colocarse en el lugar del cliente.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>
                          (b) Resolver como de lugar el problema del cliente.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>
                          (c) Es utilizar frases de cortesía con el cliente .
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>7. Son algunas frases de escucha activa.</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>(a) Por Favor, Gracias.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>(b) De acuerdo, Entiendo.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>
                          (c) Me podría indicar, Me puede proporcionar por
                          favor.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>8.	¿Por qué es importante la voz en tu trabajo?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>(a) Permite transmitir pensamientos,  emociones y sensaciones.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>(b) Permite realizar el trabajo en menos tiempo.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>
                          (c) Así el cliente entiendo lo que le estamos solicitando.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>9.	¿Qué es la escucha activa?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>(a) Atender y analizar cada palabra del usuario para poder ofrecer la mejor alternativa.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>(b) Poner en propias palabras la idea del cliente.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>
                          (c) Sonreír cuando se tome la llamada.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        10. Su definición es: Decir las cosas de manera
                        adecuada, en el momento preciso, sin ser agresivo ni
                        dócil.
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>(a) Asertividad.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>(b) Escucha activa.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>(c) Empatía.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <br />

                <FormGroup check row>
                  <Col className="centrado-fila"  >
                    <Button
                      color="primary"
                      onClick={() => this.setState({ show: true })}
                    >
                      Enviar
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
