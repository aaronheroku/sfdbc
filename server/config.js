module.exports = {

    databaseURL: process.env.DATABASE_URL || 'postgres://u40vd4o9qvi4e3:p6trrmb708d0mc6en244ba3oorn@ec2-54-83-60-107.compute-1.amazonaws.com:5802/d5497dm22oku2o',

    // Nibs users are created as Contacts under a generic Account in SFDC. This is the id of the generic account.
    contactsAccountId: '001i000000phvXCAAY',

    // Used by nforce to create Cases in real time
    api: {
        // Connected app
        clientId: '3MVG9A2kN3Bn17huGpIjdvsSPWrIAHn6eBJic8tYbRcUwiGQSNLiNWgR.xl0wlCB.pCzt5S3nQcnNC_Ya.sOc',
        clientSecret: '6916303871492058085',
        redirectUri: 'http://localhost:6000/oauth/',
        apiVersion: 'v29.0',

        // SFDC user used to make API calls from Node server
        userName: 'api@nibs.com',
        password: 'S1R0cks!!'
    },

    // Used for picture upload (user profile and gallery)
    s3: {
        bucket: "sfdc-demo",
        awsKey: "AKIAIFMDUK6WCIXWI5HA",
        secret: "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"
    }

};