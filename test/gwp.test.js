const gwp = require('../src/gwp')

test('gets Sulfur', () => {
  expect(gwp.getData('SF6')).toEqual(
    {
      "GWP": 23900.000,
      "formula": "SF6",
      "gas": "SF6",
      "gwp_4AR_100": 22800.000,
      "gwp_4AR_20": 16300.000,
      "gwp_4AR_500": 32600.000,
      "gwp_SAR_100": 23900.000,
      "name": "sulphur hexafluoride",
      "residenceTime": 3200.000,
      "source": "http://www.ipcc.ch/pdf/assessment-report/ar4/wg1/ar4-wg1-chapter2.pdf",
      "units": ""
    }
  )
});
