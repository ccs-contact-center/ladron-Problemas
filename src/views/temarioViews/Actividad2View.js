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
import AuthService from "../../services/AuthService";
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.Auth = new AuthService();
    this.state = {
      radio1:"",
      radio2:"",
      radio3:"",
      radio4:"",
      radio5:"",
      id_ccs: this.Auth.getProfile().id_ccs,
      form: "LadronDeProblemas",
     }

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state)
      alert('Se guardo la actividad, con id: ' + respuesta[0].id)

    } catch (err) {
      console.log('loggea si hay un error')
    }
  }



  

  render() {
    return (
      <div className="animated fadeIn">
       
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>Lee atentamente y selecciona la respuesta correcta. </p>
              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>1. ¿Qué es etiqueta telefónica?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio1" value="a" onChange={this.onChange.bind(this)} />
                        <Label check>(a) En un familiar .</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio1" value="b" onChange={this.onChange.bind(this)} />
                        <Label check>(b) En nosotros mismos. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio1" value="c" onChange={this.onChange.bind(this)} />
                        <Label check>(c) En algún amigo.</Label>
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
                        2. ¿Crees que el ladrón de problemas sea un buen método
                        para priorizar problemas?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio2" value="a" onChange={this.onChange.bind(this)} />
                        <Label check>(a) Si.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio2" value="b" onChange={this.onChange.bind(this)} />
                        <Label check>(b) No.</Label>
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
                        3. ¿Si el problema es urgente y puedes intervenir en él,
                        se tiene que…?{' '}
                      </b>
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio3" value="a" onChange={this.onChange.bind(this)} />
                        <Label check>
                          (a) Resolver en cualquier otro momento.{' '}
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio3" value="b" onChange={this.onChange.bind(this)} />
                        <Label check>
                          (b) Resolver lo más pronto posible.{' '}
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio3" value="c" onChange={this.onChange.bind(this)} />
                        <Label check>(c) No resolverlo.</Label>
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
                        4. Dentro de un problema urgente existen 2 vertientes
                        ¿Cuáles son?{' '}
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" value="a"  onChange={this.onChange.bind(this)} />
                        <Label check>
                          (a) Los que provoca la propia persona.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio4" value="b" onChange={this.onChange.bind(this)} />
                        <Label check>(b) Los no urgentes.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio4" value="c" onChange={this.onChange.bind(this)} />
                        <Label check>(c) Los que son por causa externa.</Label>
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
                      <b> 5. ¿Cuál es la misión de El ladrón de problemas?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio5"  value="a"  onChange={this.onChange.bind(this)} />
                        <Label check>
                          (a) Ayudarnos a desaparecer problemas.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" value="b" onChange={this.onChange.bind(this)} />
                        <Label check>
                          (b) Ayudarnos a priorizar problemas.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" value="c"  onChange={this.onChange.bind(this)} />
                        <Label check>
                          (c) Ayudarnos a tener mas problemas.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <br />

                <FormGroup check row>
                  <Col className="centrado-fila">
                    <Button
                      color="primary"
                      onClick={this.onSave.bind(this)}
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
