import getCostOfDeliveryFields from './getCostOfDeliveryFields';
import LocalStorageService from '../services/LocalStorageService';
import { SHIPS_LIST_STORAGE_KEY, TRUCKS_LIST_STORAGE_KEY } from '../constants';

const costOfDeliveryFields = modelOptions => [
  {
    name: 'model',
    type: 'select',
    options: modelOptions,
  },
  {
    name: 'cargoCost',
    type: 'number',
  },
  {
    name: 'distanceCost',
    type: 'number',
  },
];

describe('getCostOfDeliveryFields', () => {
  it('should get cost of delivery fields with no transport added', () => {
    const expectedCostOfDeliveryFields = costOfDeliveryFields([]);

    expect(getCostOfDeliveryFields()).toEqual(expectedCostOfDeliveryFields);
  });

  it('should get cost of delivery fields with existed transports', () => {
    const localStorageService = new LocalStorageService();

    const ships = [{ model: 'shipOne' }, { model: 'shipTwp' }];
    const trucks = [{ model: 'truckOne' }];

    localStorageService.setItem(SHIPS_LIST_STORAGE_KEY, ships);
    localStorageService.setItem(TRUCKS_LIST_STORAGE_KEY, trucks);

    const expectedCostOfDeliveryFields = costOfDeliveryFields(
      [...ships, ...trucks].map(({ model }) => model),
    );

    expect(getCostOfDeliveryFields()).toEqual(expectedCostOfDeliveryFields);
  });
});
