'use strict'
const base = require('./wdio.conf.base')

exports.config = Object.assign(base.config, {
    capabilities: [{
            browserName: 'chrome',
            platform: 'WIN10',
            version: 'latest'
        },
        {
            browserName: 'firefox',
            platform: 'WIN10',
            version: 'latest'
        }
    ],
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    tbTunnel: true
});
