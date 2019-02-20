import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTalent } from '../actions/talentActions';
import { Button, Row, Col } from 'react-bootstrap';


// Show the talent info
class TalentView extends Component {
    
    componentWillMount() {
        this.props.fetchTalent(this.props.match.params.id);
    }
    
    navigateToList = (id) => {
        this.props.history.push('/')
    }
    
    render() {
        
        
        let knowledge
        if(this.props.talent.knowledge){
            
            knowledge = this.props.talent.knowledge.map((item, index) => (
                <Col xs={3} key={index}>
                <br></br>
                <strong>{ item.name }</strong> <br></br>
                { item.value }
                </Col>
                ))
            }
            
            return (
                <div>
                <h3 className="text-center">Talent</h3>
                <Button
                onClick={this.navigateToList}
                variant="primary">BACK</Button>
                
                <Row>
                <Col>
                <br></br>
                <strong>Name</strong><br></br>
                { this.props.talent.name }
                </Col>
                <Col>
                <br></br>
                <strong>Email</strong><br></br>
                { this.props.talent.email }
                </Col>
                </Row>
                
                <Row>
                <Col>
                <br></br>
                <strong>Phone (Whatsapp)</strong><br></br>
                { this.props.talent.phone }
                </Col>
                <Col>
                <br></br>
                <strong>Skype</strong><br></br>
                { this.props.talent.skype }
                </Col>
                </Row>
                
                <Row>
                <Col>
                <br></br>
                <strong>City</strong><br></br>
                { this.props.talent.city }
                </Col>
                <Col>
                <br></br>
                <strong>State</strong><br></br>
                { this.props.talent.state }
                </Col>
                </Row>
                
                <Row>
                <Col>
                <br></br>
                <strong>LikedIn</strong><br></br>
                { this.props.talent.linkedIn }
                </Col>
                <Col>
                <br></br>
                <strong>Portfolio</strong><br></br>
                { this.props.talent.portfolio }
                </Col>
                </Row>
                
                <Row>
                <Col>
                <br></br>
                <strong>Github</strong><br></br>
                { this.props.talent.github }
                </Col>
                <Col>
                <br></br>
                <strong>Salary per hour</strong><br></br>
                R$ { this.props.talent.salary },00
                </Col>
                </Row>

                <Row>
                <Col>
                <br></br>
                <strong>Link CRUD</strong><br></br>
                { this.props.talent.linkCrud }
                </Col>
                </Row>
                
                <Row>
                <Col>
                <br></br>
                <h4 className="text-center">Knowledge</h4>
                </Col>
                </Row>
                <Row>
                { knowledge }
                <Col>
                <br></br>
                <strong>Other</strong> <br></br>
                { this.props.talent.other }
                </Col>
                </Row>
                </div>
                )
            }
        }
        
        TalentView.propTypes = {
            fetchTalent: PropTypes.func.isRequired,
            talent: PropTypes.object.isRequired
        }
        
        const mapStateToProps = state => ({
            talent: state.talents.item
        });
        
        
        export default connect(mapStateToProps, { fetchTalent })(TalentView)