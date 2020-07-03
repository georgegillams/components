import { getTimeDifference, getTimeDifferenceFromMilliseconds } from './time';

describe('time', () => {
  // #region getTimeDifference
  it('should getTimeDifference - 0', () => {
    expect(getTimeDifference(0)).toBe('51 years ago');
  });

  it('should getTimeDifference - - 1 second', () => {
    expect(getTimeDifference(Date.now() - 1000)).toBe('a few seconds ago');
  });

  it('should getTimeDifference - - 200 second', () => {
    expect(getTimeDifference(Date.now() - 200 * 1000)).toBe('3 minutes ago');
  });

  it('should getTimeDifference - + 1 second', () => {
    expect(getTimeDifference(Date.now() + 1000)).toBe('in a few seconds');
  });

  it('should getTimeDifference - + 200 second', () => {
    expect(getTimeDifference(Date.now() + 200 * 1000)).toBe('in 3 minutes');
  });

  it('should getTimeDifference - INT_MAX', () => {
    expect(getTimeDifference(Number.MAX_SAFE_INTEGER - 1)).toBe('5 years');
  });
  // #endregion getTimeDifference

  // #region getTimeDifferenceFromMilliseconds
  it('should getTimeDifferenceFromMilliseconds - 0', () => {
    expect(getTimeDifferenceFromMilliseconds(0)).toBe('a few seconds ago');
  });

  it('should getTimeDifferenceFromMilliseconds - - 1 second', () => {
    expect(getTimeDifferenceFromMilliseconds(-1000)).toBe('a few seconds ago');
  });

  it('should getTimeDifferenceFromMilliseconds - - 200 second', () => {
    expect(getTimeDifferenceFromMilliseconds(-200 * 1000)).toBe(
      '3 minutes ago',
    );
  });

  it('should getTimeDifferenceFromMilliseconds - + 1 second', () => {
    expect(getTimeDifferenceFromMilliseconds(1000)).toBe('in a few seconds');
  });

  it('should getTimeDifferenceFromMilliseconds - + 200 second', () => {
    expect(getTimeDifferenceFromMilliseconds(200 * 1000)).toBe('in 3 minutes');
  });

  it('should getTimeDifferenceFromMilliseconds - INT_MAX', () => {
    expect(getTimeDifferenceFromMilliseconds(Number.MAX_SAFE_INTEGER - 1)).toBe(
      'a long time',
    );
  });
  // #endregion getTimeDifferenceFromMilliseconds
});
