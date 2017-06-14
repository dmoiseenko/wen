import React, { Children } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash/isEmpty';


class Sizer extends React.Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);

    this.state = {};
  }

  componentDidMount() {
    this.unmounted = false;
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.unmounted = true;
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const node = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    const clientRect = node.getBoundingClientRect();
    this.setState({
      width: clientRect.width,
      height: clientRect.height
    });
  }

  render() {
    const { children } = this.props;

    if (isEmpty(this.state)) {
      return (
        <div className="sizer" />
      );
    }

    const props = {
      width: this.state.width,
      height: this.state.height
    };

    return (
      React.cloneElement(Children.only(children), props)
    );
  }
}

Sizer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sizer;
