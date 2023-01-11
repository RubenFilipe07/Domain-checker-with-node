const { default: axios } = require("axios")
require('dotenv').config()

const domains = [
    "domain1.com",
    "domain2.net",
    "domain3.org",
    "domain4.info",
]

console.log('Checking domains...');
console.log('-------------------');

    domains.forEach(domain => {
        axios({
            method: 'get',
            url: 'https://api.godaddy.com/v1/domains/available?domain=' + domain,
            headers: {
                'Authorization': 'sso-key ' + process.env.API_KEY + ':' + process.env.API_SECRET,
            }
        })
            .then(response => {
                response.data.available == true ? console.log('\x1b[42m', domain,'(Available) \x1b[0m') : console.log('\x1b[41m', domain,'(Unavailable) \x1b[0m')
            })
            .catch(error => {
            console.log(error);
            })
        })

