import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';
import { fetchTalents, removeTalent, confirmRemoveTalent } from '../actions/talentActions';
import Swal from 'sweetalert2'
import store from '../store';

// Show the talent list
class TalentList extends Component {
    
    
    componentWillMount() {
        this.props.fetchTalents();
    }
    
    navigateToAdd = () => {
        this.props.history.push('/talent/add')
    }
    
    navigateToView = (id) => {
        this.props.history.push(`/talent/view/${id}`)
    }

    navigateToEdit = (id) => {
        this.props.history.push(`/talent/edit/${id}`)
    }
    
    removeTalentFunc = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                
                this.props.removeTalent(id);
                
                Swal.fire(
                    'Deleted!',
                    'The talent has been deleted.',
                    'success'
                    )
                    
                }
            })
        }
        
        
        render() {
            
            store.subscribe(() => {
                
                if(store.getState().talents.removed){
                    
                    this.props.fetchTalents();
                    this.props.confirmRemoveTalent();
                    
                }
                
            })
            
            
            const talents = this.props.talents.map(talent => (
                
                <tr key={talent._id}>
                <td>{ talent.name }</td>
                <td>{ talent.email }</td>
                <td>{ talent.skype }</td>
                <td>
                <Button
                onClick={this.navigateToView.bind(this, talent._id)}
                variant="info" size="sm">VIEW</Button> &nbsp;
                <Button
                onClick={this.navigateToEdit.bind(this, talent._id)}
                variant="warning" size="sm">EDIT</Button> &nbsp;
                <Button
                onClick={this.removeTalentFunc.bind(this, talent._id)}
                variant="danger" size="sm">REMOVE</Button>
                </td>
                </tr>
                
                ))
                
                return (
                    
                    <div>
                    <h3 className="text-center">Talent list</h3>
                    <p>
                    <Button
                    onClick={this.navigateToAdd}
                    variant="success">NEW TALENT</Button>
                    </p>
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Skype</th>
                    <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    { talents }
                    
                    </tbody>
                    </Table>
                    </div>
                    )
                }
            }
            
            TalentList.propTypes = {
                fetchTalents: PropTypes.func.isRequired,
                removeTalent: PropTypes.func.isRequired,
                confirmRemoveTalent: PropTypes.func.isRequired,
                talents: PropTypes.array.isRequired
            }
            
            const mapStateToProps = state => ({
                talents: state.talents.items
            });
            
            
            export default connect(mapStateToProps, { fetchTalents, removeTalent, confirmRemoveTalent })(TalentList)