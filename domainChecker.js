const { default: axios } = require("axios")
require('dotenv').config()

const domains = [
    "ruben.dev",
    "ruben.me"
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
            console.log(response.data);
            })
            .catch(error => {
            console.log(error);
            })
        })

