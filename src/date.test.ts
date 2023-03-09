import './date';


it('test date', () => {
  let d = new Date('2022-08-12 13:25:10.005+07:00')
  d = d.setTimezone(8)                                                      // set utc +08:00 time zone

  // format
  expect(d.format()).toBe('2022-08-12T14:25:10+08:00')                      //default rfc3339 format
  expect(d.format('%Y-%m-%d %H:%M:%S%z')).toBe('2022-08-12 14:25:10+08:00') //set format
  expect(d.format('%Y-%m-%d %H:%M:%S.%f%z')).toBe('2022-08-12 14:25:10.005+08:00') //set format

  // startOf - endOf 
  expect(d.startOf(-1, 'd').format()).toBe('2022-08-11T00:00:00+08:00')     //yesterday
  expect(d.startOf(1, 'd').format()).toBe('2022-08-13T00:00:00+08:00')      //tommorrow

  expect(d.endOf(0, 'H').format()).toBe('2022-08-12T14:59:59+08:00')        //endOf current hour
  expect(d.startOf(0, 'H').format()).toBe('2022-08-12T14:00:00+08:00')      //startOf current hour

  expect(d.endOf(0, 'd').format()).toBe('2022-08-12T23:59:59+08:00')        //endOf today
  expect(d.startOf(0, 'd').format()).toBe('2022-08-12T00:00:00+08:00')      //startOf today

  expect(d.endOf(0, 'w').format()).toBe('2022-08-14T23:59:59+08:00')        //endOf this week
  expect(d.startOf(0, 'w').format()).toBe('2022-08-08T00:00:00+08:00')      //startOf this week

  expect(d.endOf(0, 'm').format()).toBe('2022-08-31T23:59:59+08:00')        //endOf this month
  expect(d.startOf(0, 'm').format()).toBe('2022-08-01T00:00:00+08:00')      //startOf this month


  // add time delta
  expect(d.add(-1, 'f').format('%Y-%m-%d %H:%M:%S.%f%z')).toBe('2022-08-12 14:25:10.004+08:00') //minus 1 millisecond
  expect(d.add(-1, 'S').format()).toBe('2022-08-12T14:25:09+08:00')         //minus 1 second
  expect(d.add(-1, 'M').format()).toBe('2022-08-12T14:24:10+08:00')         //minus 1 minute
  expect(d.add(-1, 'H').format()).toBe('2022-08-12T13:25:10+08:00')         //minus 1 hour
  expect(d.add(-1, 'd').format()).toBe('2022-08-11T14:25:10+08:00')         //minus 1 day
  expect(d.add( 1, 'm').format()).toBe('2022-09-11T14:25:10+08:00')         //add 1 month(30d)
  expect(d.add( 1, 'Y').format()).toBe('2023-08-12T14:25:10+08:00')         //add 1 year

  // diff time delta
  const d2 = d.clone().add(86400, 'S')
  expect(d2.diff(d, "S")).toBe(86400)                                       //diff time delta
  expect(d2.diff(d, "d")).toBe(1)                                       //diff time delta
  expect(d2.format()).toBe('2022-08-13T14:25:10+08:00')         


  // change time zone
  expect(d.setTimezone(9).format()).toBe('2022-08-12T15:25:10+09:00')       //set time zone to +09:00


});

