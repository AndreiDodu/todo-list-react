import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      item: { value: '', data: null },
    };
  }

  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.item.value !== state.item.value) {
      return {
        item: {
          value: props.item.value,
          data: props.item.value ? props.item.data : null,
        },
      };
    }
    return null;
  }

  render() {
    const content =
      this.state.toggle && this.state.item.value ? (
        <div className="card-body text-secondary">
          <h5 className="card-title">{this.state.item.value}</h5>
          <p className="card-text">{this.state.item.data}</p>
        </div>
      ) : (
        ''
      );

    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <div>Preview</div>
            <div className="btn btn-success" onClick={this.toggle}>
              {this.state.toggle ? '-' : '+'}
            </div>
          </div>
        </div>
        {content}
      </div>
    );
  }
}

export default Preview;
