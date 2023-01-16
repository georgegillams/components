import React from 'react';

const formValueChanged = (
  object: { [key: string]: any },
  attributeName: string,
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  action: Function | null = null,
  callback: Function | null = null,
) => {
  const newValue = JSON.parse(JSON.stringify(object));
  newValue[attributeName] =
    event.target.value === 'on'
      ? (event as React.ChangeEvent<HTMLInputElement>).target.checked
      : event.target.value;
  if (action) {
    action(newValue);
  }
  if (callback) {
    callback(newValue);
  }
};

const createDictionary = (
  data: Array<{ [key: string]: any }>,
  keyProperty: string,
) => {
  const dict: { [key: string]: any } = {};
  for (let i = 0; i < data.length; i += 1) {
    const key = data[i][keyProperty];
    if (dict[key]) {
      dict[key].push(data[i]);
    } else {
      dict[key] = [data[i]];
    }
  }
  return dict;
};

const deArrayitise = <T>(input: T | Array<T>): T | null => {
  if (Array.isArray(input)) {
    if (input.length === 0) {
      return null;
    }
    return input[0];
  }
  return input;
};

const associate = (
  data: Array<{ [key: string]: any }>,
  additionalData: Array<{ [key: string]: any }>,
  dataKey: string,
  additionalDataKey: string,
  associationName: string,
  preventDearrayisation: boolean,
) => {
  const newData = JSON.parse(JSON.stringify(data));

  // Create a dictionary of the additional data
  const additionalDataDictionary = createDictionary(
    additionalData,
    additionalDataKey,
  );

  for (let i = 0; i < newData.length; i += 1) {
    const key = newData[i][dataKey];
    if (additionalDataDictionary[key]) {
      const finalValue = preventDearrayisation
        ? additionalDataDictionary[key]
        : deArrayitise(additionalDataDictionary[key]);
      newData[i][associationName] = finalValue;
    }
  }
  return newData;
};

export { formValueChanged, associate };
export default {
  formValueChanged,
  associate,
};
