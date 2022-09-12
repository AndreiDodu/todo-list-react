import React, { Component, Fragment } from 'react';

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = { filter: '' };
    }

    handleChange = (e) => {
        this.setState({ filter: e.target.value });
        this.props.filter(e.target.value);
    };

    render() {
        return (
            <Fragment>
                <label>FIlter</label>
                <input className="form-control my-2" type="text" value={this.state.filter} placeholder="filter" onChange={this.handleChange} />
            </Fragment>
        );
    }
}

export default Filter;