// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/173-plugins

const iban_it = require("./iban_it")

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
				{ displayName: "IT", value: "IT" }
            ]
        }
    ],
    async run (context, country) {
		if(country=="IT") return iban_it.random_it_iban("03069");
    }
}];