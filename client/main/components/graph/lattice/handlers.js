import * as d3 from 'd3';


export const getDrawLink = context => (d) => {
  context.moveTo(d.source.x, d.source.y);
  context.lineTo(d.target.x, d.target.y);
};

export const getDrawNode = context => (d) => {
  context.moveTo(d.x + 3, d.y);
  context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
};

export const getTicked = ({ context, width, height, links, nodes }) => () => {
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);

  context.beginPath();
  links.forEach(getDrawLink(context));
  context.strokeStyle = '#aaa'; // eslint-disable-line no-param-reassign
  context.stroke();

  context.beginPath();
  nodes.forEach(getDrawNode(context));
  context.fill();
  context.strokeStyle = '#fff'; // eslint-disable-line no-param-reassign
  context.stroke();

  context.restore();
};

export const getDragSubject = ({ simulation, width, height }) => () =>
  simulation.find(d3.event.x - (width / 2), d3.event.y - (height / 2));

export const getDragStarted = ({ simulation }) => () => {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d3.event.subject.fx = d3.event.subject.x;
  d3.event.subject.fy = d3.event.subject.y;
};

export const getDragged = () => () => {
  d3.event.subject.fx = d3.event.x;
  d3.event.subject.fy = d3.event.y;
};

export const getDragEnded = ({ simulation }) => () => {
  if (!d3.event.active) simulation.alphaTarget(0);
  d3.event.subject.fx = null;
  d3.event.subject.fy = null;
};
