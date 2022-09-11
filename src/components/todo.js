import React, { Component } from "react";

class Todo extends Component {



    remove = () => {
        this.props.remove(this.props.item);
    };

    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <div>Item</div>
                        <div className="btn btn-danger" onClick={this.remove}>X</div>
                    </div>
                </div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">{this.props.item.value}</h5>
                    <p className="card-text">{this.props.item.data}</p>
                </div>
            </div>
        );
    }
}


export default Todo;