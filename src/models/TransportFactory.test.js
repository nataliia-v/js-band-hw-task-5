import TransportFactory from './TransportFactory';

const shipFixture = params => ({
  model: 'SomeShipModel',
  producedYear: 2019,
  capacity: 2,
  averageSpeed: 100,
  name: 'ship',
  countOfTeam: 10,
  ...params,
});
const truckFixture = params => ({
  model: 'SomeTruckModel',
  producedYear: 2019,
  capacity: 2,
  averageSpeed: 100,
  licensePlate: 'aa1020',
  typeOfGas: 'Gasoline',
  ...params,
});

describe('TransportFactory', () => {
  it('Transport - showCapacityInPounds - should return proper capacity in pounds', () => {
    const capacity = 3;
    const expectedCapacityInPounds = capacity * 2.20462;

    const transport = TransportFactory.create('ship', shipFixture({ capacity }));

    expect(transport.showCapacityInPounds()).toBe(expectedCapacityInPounds);
  });

  it('Ship - showAverageSpeed - should return proper average speed', () => {
    const averageSpeed = 100;
    const expectedAverageSpeed = `${averageSpeed}nm`;

    const ship = TransportFactory.create('ship', shipFixture({ averageSpeed }));

    expect(ship.showAverageSpeed()).toBe(expectedAverageSpeed);
  });

  it('Truck - showAverageSpeed - should return proper average speed', () => {
    const averageSpeed = 100;
    const expectedAverageSpeed = `${averageSpeed}km`;

    const truck = TransportFactory.create('truck', truckFixture({ averageSpeed }));

    expect(truck.showAverageSpeed()).toBe(expectedAverageSpeed);
  });

  it('should return proper average speed for default transport type', () => {
    const averageSpeed = 100;
    const expectedAverageSpeed = `${averageSpeed}km`;

    const defaultTransport = TransportFactory.create(undefined, truckFixture({ averageSpeed }));

    expect(defaultTransport.showAverageSpeed()).toBe(expectedAverageSpeed);
  });
});
