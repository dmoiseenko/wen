import * as d3 from 'd3';

import numberOfFacets from './constants';


export default function getNodes() {
  return d3.range(numberOfFacets * numberOfFacets).map(i => ({
    index: i
  }));
}
