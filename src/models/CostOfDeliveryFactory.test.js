import CostOfDeliveryFactory from './CostDeliveryFactory';

const costOfDeliveryFixture = params => ({
  model: 'SomeModel',
  cargoCost: 500,
  distanceCost: 700,
  ...params,
});

describe('CostOfDeliveryFactory', () => {
  it('should create costOfDelivery instance', () => {
    const model = 'SomeModel';
    const cargoCost = 500;
    const distanceCost = 700;

    const costOfDelivery = CostOfDeliveryFactory.create(
      costOfDeliveryFixture({ model, cargoCost, distanceCost }),
    );

    expect(costOfDelivery.model).toBe(model);
    expect(costOfDelivery.cargoCost).toBe(cargoCost);
    expect(costOfDelivery.distanceCost).toBe(distanceCost);
  });
});
