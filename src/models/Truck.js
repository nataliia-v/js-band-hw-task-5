import Transport from './Transport';

class Truck extends Transport {
  constructor({ model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas }) {
    super({ model, producedYear, capacity, averageSpeed });

    this.licensePlate = licensePlate;
    this.typeOfGas = typeOfGas;
  }

  showAverageSpeed() {
    return `${this.averageSpeed}km`;
  }
}

export default Truck;
