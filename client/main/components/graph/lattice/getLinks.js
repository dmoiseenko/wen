import numberOfFacets from './constants';


export default function getLinks() {
  const links = [];

  for (let y = 0; y < numberOfFacets; y += 1) {
    for (let x = 0; x < numberOfFacets; x += 1) {
      if (y > 0) {
        links.push({
          source: ((y - 1) * numberOfFacets) + x,
          target: (y * numberOfFacets) + x
        });
      }
      if (x > 0) {
        links.push({
          source: (y * numberOfFacets) + (x - 1),
          target: (y * numberOfFacets) + x
        });
      }
    }
  }

  return links;
}
