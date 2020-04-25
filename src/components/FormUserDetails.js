import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        //destructure value, get values, which have been obtained via props
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue= {values.lastName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue= {values.email}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="FirstName"
                    onChange={handleChange('firstName')}
                    defaultValue= {values.firstName}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={style.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const style={
    button: {
        margin: 15
    }
}

export default FormUserDetails
