export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square']; // create an array of neighborhoods

  const self = this;
  this.addNeighborhood = (newNeighborhood) => { // add a new neighborhood to the array
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods; // return the array of neighborhoods
  };
}
