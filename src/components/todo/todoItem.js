import React, { Component } from "react";

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = { isEditMode: false, value: this.props.item.value, valueRef: React.createRef() };
    }


    componentDidMount() {
        document.body.addEventListener("disable-todo-edit-mode", this.handleDisableOthersEditMode);
    }

    componentWillUnmount() {
        document.body.removeEventListener("disable-todo-edit-mode", this.handleDisableOthersEditMode);
    }

    handleDisableOthersEditMode = event => {
        if (this.props.item._id !== event.detail.id) {
            this.setState({ isEditMode: false });
        }
    };


    update = () => {
        this.setState({ isEditMode: !this.state.isEditMode });

        this.disableOthersEditMode(this.props.item);
        if (this.state.isEditMode) {
            this.props.update({ ...this.props.item, value: this.state.value });
        }
    };


    disableOthersEditMode = (item) => {
        const myEvent = new CustomEvent("disable-todo-edit-mode", {
            detail: { id: item._id }
        });
        document.body.dispatchEvent(myEvent);
    }

    onChangeValue = (e) => {
        this.setState({ value: e.target.value });
    };

    handleOnKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.update();
        }
    }


    remove = () => {
        this.props.remove(this.props.item);
    };

    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <div>Item</div>
                        <div>
                            <div className="btn btn-primary mx-1" onClick={this.update}>{this.state.isEditMode ? 'Save' : 'Edit'}</div>
                            <div className="btn btn-danger mx-1" onClick={this.remove}>X</div>
                        </div></div>
                </div>
                <div className="card-body text-secondary">
                    {this.state.isEditMode ?
                        (<input type={'text'} ref={this.state.valueRef} value={this.state.value} onKeyPress={this.handleOnKeyPress} onChange={this.onChangeValue} />)
                        : <h5 className="card-title">{this.props.item.value}</h5>}
                    <p className="card-text">{this.props.item.data}</p>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        if (this.state.isEditMode) {
            this.state.valueRef.current.focus();
        }
    }
}


export default Todo;