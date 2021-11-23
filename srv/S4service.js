const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { SetlDoc } = this.entities;
  const service = await cds.connect.to('OP_API_SETTLMT_DOC_0001.sap.gateway.srvd_a2x.api_settlmt_doc.v0001');
  this.on('READ', SetlDoc, async (request) => {
    return service.tx(request).run(request.query);
  });
});
