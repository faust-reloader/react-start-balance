import { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            value: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onChange(this.state.value);
        this.setState({
            value: ''
        })
    }

    onChange = (e) => {
        // const { value } = e.target.value;

        this.setState({
            value: e.target.value
        })
    }

    render () {
        return (
        <form onSubmit={this.onSubmit}>
            <input name="balance"
                placeholder="Sum"
                value = {this.state.value}
                onChange={this.onChange}/>
            <button>Save</button>
        </form>
        )
    }
}

Form.propTypes = {
    onChange: PropTypes.func
}

export default Form;