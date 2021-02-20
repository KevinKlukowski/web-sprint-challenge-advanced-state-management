import React from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';
import schema from '../validation/addFormSchema';
import * as yup from 'yup';


class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formValues: {
                name: '',
                position: '',
                nickname: '',
                description: ''
              },
            formErrors: {
                name: '',
                position: '',
                nickname: '',
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurfs();
    }

    handleChange = (e) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                {/* must take in `name`, `position`, and `nickname`, `description`.*/}

                <div className="form-group"></div>
                <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="name" id="name" value={this.state.formValues.name} />

                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChange} name="position" id="position" value={this.state.formValues.position}/>

                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={this.handleChange} name="nickname" id="nickname" value={this.state.formValues.nickname}/>

                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={this.handleChange} name="description" id="description" value={this.state.formValues.description}/>

                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button>Submit Smurf</button>
            </form>
        </section>);
            }
}
    
    const mapStateToProps = state => {
    return {};
  };

export default connect(mapStateToProps, { addSmurfs })(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.