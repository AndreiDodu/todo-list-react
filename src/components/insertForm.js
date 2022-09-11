import React, { Component } from 'react';

class InsertForm extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', inputRef: React.createRef() }

    }

    onChangeValue = (e) => {
        this.setState({ value: e.target.value });
        this.props.valueChanged(e.target.value);
    };

    insert = (e) => {
        e.preventDefault();
        if (this.state.value) {
            this.props.insert(this.state.value);
            this.setState({ value: '' });
            this.props.valueChanged(e.target.value);
        }
        this.state.inputRef.current.focus();
    };

    render() {
        return (<form className='form-group'>
            <div><label>TODO</label></div>
            <div><input type={'text'} ref={this.state.inputRef} value={this.state.value} className='form-control my-2' onChange={this.onChangeValue} /></div>
            <div><button type='submit' className='btn btn-success w-100' onClick={this.insert}>Save</button></div>
        </form>);
    }

    componentDidMount() {
        this.state.inputRef.current.focus();
    }
}

export default InsertForm;