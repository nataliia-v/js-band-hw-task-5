import formBuilder from './formBuilder';
import { TRUCKS_LIST_STORAGE_KEY } from '../constants';
import TransportFactory from '../../models/TransportFactory';
import { commonFields, truckFields } from '../../forms/constants';

describe('formBuilder', () => {
  it('should build all fields for truck form', () => {
    const truckForm = formBuilder(
      TRUCKS_LIST_STORAGE_KEY,
      formData => TransportFactory.create('truck', formData),
      [...commonFields, ...truckFields],
    );

    const allFieldsAreBuilt = [
      'model',
      'producedYear',
      'capacity',
      'averageSpeed',
      'licensePlate',
      'typeOfGas',
    ].every(fieldName => truckForm.querySelector(`[name="${fieldName}"]`));

    expect(allFieldsAreBuilt).toBe(true);
  });
});
