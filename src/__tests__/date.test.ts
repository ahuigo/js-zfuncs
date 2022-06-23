import '../date';


it('test date', () => {
  let d = new Date('2022-08-22 13:25:10+07:00')
  d = d.setTimezone(8)                                                      // set utc +08:00 time zone

  // format
  expect(d.format()).toBe('2022-08-22T14:25:10+08:00')                      //default rfc3339 format
  expect(d.format('%Y-%m-%d %H:%M:%S%z')).toBe('2022-08-22 14:25:10+08:00') //set format

  // startOf - endOf 
  expect(d.endOf(0, 'H').format()).toBe('2022-08-22T14:59:59+08:00')        //endOf current hour
  expect(d.startOf(0, 'H').format()).toBe('2022-08-22T14:00:00+08:00')      //startOf current hour

  expect(d.endOf(0, 'd').format()).toBe('2022-08-22T23:59:59+08:00')        //endOf today
  expect(d.startOf(0, 'd').format()).toBe('2022-08-22T00:00:00+08:00')      //startOf today

  // startOf - endOf with time delta
  expect(d.startOf(-1, 'd').format()).toBe('2022-08-21T00:00:00+08:00')     //yesterday
  expect(d.startOf(1, 'd').format()).toBe('2022-08-23T00:00:00+08:00')      //tommorrow

  // calculate time delta
  expect(d.add( 1, 'Y').format()).toBe('2023-08-22T14:25:10+08:00')         //add 1 year
  expect(d.add( 1, 'm').format()).toBe('2022-09-21T14:25:10+08:00')         //add 1 month(30d)
  expect(d.add(-1, 'd').format()).toBe('2022-08-21T14:25:10+08:00')         //minus 1 day
  expect(d.add(-1, 'H').format()).toBe('2022-08-22T13:25:10+08:00')         //minus 1 hour

  // change time zone
  expect(d.setTimezone(9).format()).toBe('2022-08-22T15:25:10+09:00')       //set time zone to +09:00

});

