import React, { Component, Children } from 'react';
import PropsTypes from 'prop-types';


class Import extends Component {
  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load.then((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    if (this.state.mod) {
      return React.cloneElement(Children.only(this.state.mod()));
    }

    return null;
  }
}

Import.propTypes = {
  load: PropsTypes.object.isRequired
};

export default Import;
