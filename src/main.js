const ibanIt = require('./iban_it')
const ibanGeneric = require('./iban_generic.js')

module.exports.templateTags = [{
  name: 'randomIban',
  displayName: 'Random Iban code',
  description: 'Generate a random, formally valid, iban code.',
  args: [
    {
      displayName: 'country',
      description: 'Iban country code',
      type: 'enum',
      defaultValue: 'IT',
      options: [
        { displayName: 'AD (Andorra)', value: 'AD' },
        { displayName: 'AT (Austria)', value: 'AT' },
        { displayName: 'CH (Switzerland)', value: 'CH' },
        { displayName: 'CZ (Czech Republic)', value: 'CZ' },
        { displayName: 'CY (Cyprus)', value: 'CY' },
        { displayName: 'DE (Germany)', value: 'DE' },
        { displayName: 'DK (Denmark)', value: 'DK' },
        { displayName: 'EE (Estonia)', value: 'EE' },
        { displayName: 'FI (Finland)', value: 'FI' },
        { displayName: 'GB (Great Britain)', value: 'GB' },
        { displayName: 'GI (Gibraltar)', value: 'GI' },
        { displayName: 'GR (Greece)', value: 'GR' },
        { displayName: 'HR (Croatia)', value: 'HR' },
        { displayName: 'HU (Hungary)', value: 'HU' },
        { displayName: 'IE (Ireland)', value: 'IE' },
        { displayName: 'IT (Italy)', value: 'IT' },
        { displayName: 'IS (Iceland)', value: 'IS' },
        { displayName: 'LI (Liechtenstein)', value: 'LI' },
        { displayName: 'LU (Luxembouerg)', value: 'LU' },
        { displayName: 'LT (Lithuania)', value: 'LT' },
        { displayName: 'PL (Poland)', value: 'PL' },
        { displayName: 'RO (Romania)', value: 'RO' },
        { displayName: 'SE (Sweden)', value: 'SE' },
        { displayName: 'SK (Slovakia)', value: 'SK' },
        { displayName: 'SM (San Marino)', value: 'SM' },
        { displayName: 'VA (Vatican City)', value: 'VA' }
      ]
    }
  ],
  async run (context, country) {
    if (country === 'IT' || country === 'SM') return ibanIt.random_it_iban('03069')
    return ibanGeneric.randomIban(country)
  }
}]
