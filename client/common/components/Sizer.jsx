import React, { Children } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


class Sizer extends React.Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
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
    setTimeout(() => {
      if (!this.unmounted) {
        this.setState({
          width: clientRect.width,
          height: clientRect.height
        });
      }
    }, 0);
  }

  render() {
    const { children, width, height } = this.props;

    if (width !== 0 && height !== 0) {
      this.state = { width, height };
    }

    if (!this.state) {
      return (
        <div
          className="sizer"
          ref={node => (this.sizer = node)}
        />
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
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

Sizer.defaultProps = {
  width: 0,
  height: 0
};

export default Sizer;
