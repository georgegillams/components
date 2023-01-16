const getJsonFromScannedData = (data: string) => {
  try {
    return JSON.parse(data.split("'").join('"').split("'").join('"'));
  } catch (err) {
    return null;
  }
};

export { getJsonFromScannedData };
export default {
  getJsonFromScannedData,
};
