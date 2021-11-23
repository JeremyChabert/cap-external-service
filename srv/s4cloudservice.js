const cds = require('@sap/cds');

const { AddressEmailAddress } = require('@sap/cloud-sdk-vdm-business-partner-service');

module.exports = cds.service.impl(async function () {

  this.on('READ', 'AddressEmailAddress', async (req) => {
    const results = await AddressEmailAddress.requestBuilder()
      .getAll()
      .top(40)
      .withCustomHeaders({ APIKey: process.env.S4SandboxAPIKey })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
    results["$count"] = results.length;
    req.reply(results);
  });
});
