import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTalent, confirmNewTalent } from '../actions/talentActions';
import { Button, Form, Row, Col } from 'react-bootstrap';
import store from '../store';

// Form to add a new talent
class TalentForm extends Component {
    
    constructor(props){
        
        super(props)
        
        this.state = {
            name: '',
            email: '',
            skype: '',
            phone: '',
            github: '',
            linkedIn: '',
            city: '',
            state: '',
            salary: '',
            linkCrud: '',
            other: ''
        }
        
        this.onChangeCheck = this.onChangeCheck.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeRadio = this.onChangeRadio.bind(this)
        
    }
    
    navigateToList = () => {
        this.props.history.push('/')
    }
    
    onChange(e) {        
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onChangeRadio(e) {
                
        const value = e.target.id
        const name = e.target.name
        
        let actualValues = this.state.knowledge
        
        if(!actualValues){
            actualValues = []
        }
        
        let findIndex = false

        actualValues.map((stateValue, index) => {

            if(stateValue.name === name){
                findIndex = index
            }
            return true
        })

        if(findIndex !== false){
            actualValues[findIndex].value = value
        }else{
            actualValues.push({
                name,
                value 
            })
        }

        
        this.setState({ knowledge: actualValues })
        
        
        
    }
    
    onChangeCheck(e) {
        
        const id = e.target.id
        const value = e.target.value
        
        let actualValues = this.state[id]
        
        if(!actualValues){
            actualValues = []
        }
        
        if(e.target.checked){
            
            actualValues.push(value)
            this.setState({ [id]: actualValues })
            
        }else{
            
            actualValues = actualValues.filter(actualValue => ( actualValue !== value ))
            this.setState({ [id]: actualValues })
            
        }
        
    }
    
    onSubmit(e){
        
        e.preventDefault()
        
        const talent = this.state
        
        this.props.createTalent(talent)

        
    }
    
    render() {

        store.subscribe(() => {
                
            if(store.getState().talents.new){
                
                this.props.confirmNewTalent();
                this.props.history.push('/')
                
            }
            
        })
        
        let knowledgesList = [
            'Ionic',
            'ReactJS',
            'React Native',
            'Android',
            'IOs',
            'HTML',
            'CSS',
            'Bootstrap',
            'JQuery',
            'AngularJS 1.*',
            'Angular',
            'Java',
            'Asp.Net MVC',
            'Asp.Net WebForm',
            'C',
            'C#',
            'NodeJS',
            'Cake',
            'Django',
            'Magento',
            'PHP',
            'Vue',
            'Wordpress',
            'Phyton',
            'Ruby',
            'SQL Server',
            'MySQL',
            'Salesforce',
            'Photoshop',
            'Illustrator',
            'SEO',
            'Laravel'
        ]
        
        let knowledges = []
        
        knowledgesList.map((know, index) => {
            knowledges.push(<Row key={index}>
                <Col>
                <Form.Group controlId="formSalary">
                <Form.Label>{ know } <strong className="text-danger">*</strong></Form.Label>
                <br></br>
                <Form.Check
                required
                inline
                name={know}
                onChange={this.onChangeRadio}
                label="0"
                type="radio"
                id="0"
                />
                <Form.Check
                inline
                name={know}
                onChange={this.onChangeRadio}
                label="1"
                type="radio"
                id="1"
                />
                <Form.Check
                inline
                name={know}
                onChange={this.onChangeRadio}
                label="2"
                type="radio"
                id="2"
                />
                <Form.Check
                inline
                name={know}
                onChange={this.onChangeRadio}
                label="3"
                type="radio"
                id="3"
                />
                <Form.Check
                inline
                name={know}
                onChange={this.onChangeRadio}
                label="4"
                type="radio"
                id="4"
                />
                <Form.Check
                inline
                name={know}
                onChange={this.onChangeRadio}
                label="5"
                type="radio"
                id="5"
                />
                </Form.Group>
                </Col>
                </Row>)
                
                return true
                
            })
            
            return (
                <div>
                <Button
                onClick={this.navigateToList}
                variant="primary">BACK</Button>
                <p>
                <br></br>
                We appreciate your contact, check that you do not need to fill out the full form if already has this information on its linkedin, and check out the links at the end of the tutorials (developers).
                </p>
                <p>
                Já agradecemos o seu contato, confira que você não precisa preencher o formulário completo caso já tenha essas informações no seu linkedin, e no final confira os links dos tutoriais (desenvolvedores).
                </p>
                <p>
                </p>
                <h3 className="text-center">New Talent</h3>
                <br></br>
                <p className="text-danger">* Required fields</p>
                <Form onSubmit={this.onSubmit}>
                
                <Form.Group controlId="formEmail">
                <Form.Label>Email address<strong className="text-danger">*</strong></Form.Label>
                <Form.Control type="email" onChange={this.onChange} name="email" required />
                </Form.Group>
                
                <Form.Group controlId="formName">
                <Form.Label>Name / Nome<strong className="text-danger">*</strong></Form.Label>
                <Form.Control type="text" onChange={this.onChange} name="name" required />
                </Form.Group>
                
                <Form.Group controlId="formSkype">
                <Form.Label>Skype: ( please create an account if you don't have yet / bom criar caso não tenha) <strong className="text-danger">*</strong></Form.Label>
                <Form.Control type="text" onChange={this.onChange} name="skype" required />
                </Form.Group>
                
                <Form.Group controlId="formPhone">
                <Form.Label>Telefone/Phone (Whatsapp)<strong className="text-danger">*</strong></Form.Label>
                <Form.Control type="number" onChange={this.onChange} name="phone" required />
                </Form.Group>
                
                <Form.Group controlId="formGithub">
                <Form.Label>Github</Form.Label>
                <Form.Control type="text" onChange={this.onChange} name="github" />
                </Form.Group>
                
                <Form.Group controlId="formLinkedIn">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control type="text" onChange={this.onChange} name="linkedIn" />
                </Form.Group>
                
                <Form.Group controlId="formCity">
                <Form.Label>Cidade / City <strong className="text-danger">*</strong></Form.Label>
                <Form.Control type="text" onChange={this.onChange} name="city" required />
                </Form.Group>
                
                <Form.Group controlId="formState">
                <Form.Label>Estado / State <strong className="text-danger">*</strong></Form.Label>
                <Form.Control type="text" required onChange={this.onChange} name="state" />
                </Form.Group>
                
                <Form.Group controlId="formPortfolio">
                <Form.Label>Portfolio</Form.Label>
                <Form.Control type="text" onChange={this.onChange} name="portfolio"/>
                </Form.Group>
                
                <Form.Group controlId="timePerDay">
                <Form.Label>What is your willingness to work today? / Qual é sua disponibilidade para trabalhar hoje?</Form.Label>
                <Form.Check type="checkbox" name="timePerDay" onChange={this.onChangeCheck} value="Up to 4 hours per day / Até 4 horas por dia" label="Up to 4 hours per day / Até 4 horas por dia" />
                <Form.Check type="checkbox" name="timePerDay" onChange={this.onChangeCheck} value="4 to 6 hours per day / De 4 á 6 horas por dia" label="4 to 6 hours per day / De 4 á 6 horas por dia" />
                <Form.Check type="checkbox" name="timePerDay" onChange={this.onChangeCheck} value="6 to 8 hours per day /De 6 á 8 horas por dia" label="6 to 8 hours per day /De 6 á 8 horas por dia" />
                <Form.Check type="checkbox" name="timePerDay" onChange={this.onChangeCheck} value="Up to 8 hours a day (are you sure?) / Acima de 8 horas por dia (tem certeza?)" label="Up to 8 hours a day (are you sure?) / Acima de 8 horas por dia (tem certeza?)" />
                <Form.Check type="checkbox" name="timePerDay" onChange={this.onChangeCheck} value="Only weekends / Apenas finais de semana" label="Only weekends / Apenas finais de semana" />
                </Form.Group>
                
                <Form.Group controlId="timeToWork">
                <Form.Label>What's the best time to work for you? / Pra você qual é o melhor horário para trabalhar?</Form.Label>
                <Form.Check type="checkbox" name="timeToWork" onChange={this.onChangeCheck} value="Morning (from 08:00 to 12:00) / Manhã (de 08:00 ás 12:00)" label="Morning (from 08:00 to 12:00) / Manhã (de 08:00 ás 12:00)" />
                <Form.Check type="checkbox" name="timeToWork" onChange={this.onChangeCheck} value="Afternoon (from 1:00 p.m. to 6:00 p.m.) / Tarde (de 13:00 ás 18:00)" label="Afternoon (from 1:00 p.m. to 6:00 p.m.) / Tarde (de 13:00 ás 18:00)" />
                <Form.Check type="checkbox" name="timeToWork" onChange={this.onChangeCheck} value="Night (7:00 p.m. to 10:00 p.m.) /Noite (de 19:00 as 22:00)" label="Night (7:00 p.m. to 10:00 p.m.) /Noite (de 19:00 as 22:00)" />
                <Form.Check type="checkbox" name="timeToWork" onChange={this.onChangeCheck} value="Dawn (from 10 p.m. onwards) / Madrugada (de 22:00 em diante)" label="Dawn (from 10 p.m. onwards) / Madrugada (de 22:00 em diante)" />
                <Form.Check type="checkbox" name="timeToWork" onChange={this.onChangeCheck} value="Business (from 08:00 a.m. to 06:00 p.m.) / Comercial (de 08:00 as 18:00)" label="Business (from 08:00 a.m. to 06:00 p.m.) / Comercial (de 08:00 as 18:00)" />
                </Form.Group>
                
                <Form.Group controlId="formSalary">
                <Form.Label>What is your hourly salary requirements? / Qual sua pretensão salarial por hora? <strong className="text-danger">*</strong></Form.Label>
                <Form.Control type="number" onChange={this.onChange} name="salary" required />
                </Form.Group>
                
                <h5>Knowledge / Conhecimentos</h5>
                
                <p>
                Rate yourself from 0 to 5 for the knowledge specified below, and that's okay if you do not know many things, the important thing is to be honest! / Avalie-se de 0 a 5 quanto aos conhecimentos especificados abaixo, e tudo bem se não souber de muitas coisas, o importante é que seja sincero!
                </p>
                
                { knowledges }
                
                <Form.Group controlId="formOther">
                <Form.Label>Do you know any other language or framework that was not listed above? Tell us and evaluate yourself from 0 to 5. / Conhece mais alguma linguagem ou framework que não foi listado aqui em cima? Conte para nos e se auto avalie ainda de 0 a 5.</Form.Label>
                <Form.Control type="text" onChange={this.onChange} name="other" />
                </Form.Group>
                
                <h5>Enter the link here CRUD (create, update, delete)- read information in the welcome document quoted in the form description./ Insira aqui o link do CRUD (create, update, delete)- ler informações no documento de Boas Vindas citado na descrição do formulário.</h5>
                
                <p><a rel="noopener noreferrer" href="https://docs.google.com/document/d/145QuJ8-efr-pmNGV-2DOOGHD-1dc3MERSeL5g0XoqmM" target="_blank">https://docs.google.com/document/d/145QuJ8-efr-pmNGV-2DOOGHD-1dc3MERSeL5g0XoqmM</a></p>
                
                <Form.Group controlId="formLinkCrud">
                <Form.Label>Link CRUD</Form.Label>
                <Form.Control type="text" onChange={this.onChange} name="linkCrud" />
                </Form.Group>
                
                
                <Button variant="success" type="submit">
                SUBMIT
                </Button>
                </Form>
                </div>
                )
            }
        }
        
        TalentForm.propTypes = {
            createTalent: PropTypes.func.isRequired,
            confirmNewTalent: PropTypes.func.isRequired
        }
        
        export default connect(null, { createTalent, confirmNewTalent })(TalentForm)