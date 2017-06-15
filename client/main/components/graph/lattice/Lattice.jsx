import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import getNodes from './getNodes';
import getLinks from './getLinks';
import * as handlers from './handlers';


export default class Cloth extends Component {
  componentDidMount() {
    this.renderCanvas(this.props);
  }

  shouldComponentUpdate(props) {
    this.renderCanvas(props);
    return false;
  }

  renderCanvas() {
    const { width, height } = this.props;
    const canvas = this.canvas;

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');

    const nodes = getNodes();
    const links = getLinks();

    const simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-30))
      .force('link', d3.forceLink(links).strength(1).distance(30).iterations(10))
      .on('tick', handlers.getTicked({ context, width, height, links, nodes }));

    d3.select(canvas)
      .call(d3.drag()
        .container(canvas)
        .subject(handlers.getDragSubject({ simulation, width, height }))
        .on('start', handlers.getDragStarted({ simulation }))
        .on('drag', handlers.getDragged())
        .on('end', handlers.getDragEnded({ simulation })));
  }

  render() {
    const { width, height } = this.props;

    return (
      <canvas
        width={width}
        height={height}
        style={{ width: '100%', height: '100%' }}
        ref={node => (this.canvas = node)}
      />
    );
  }
}

Cloth.propTypes = {
  /* eslint-disable react/no-unused-prop-types*/
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
  /* eslint-enable react/no-unused-prop-types*/
};

Cloth.defaultProps = {
  width: 0,
  height: 0
};
