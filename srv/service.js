const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { SEPMRA_I_Product_E } = this.entities;
  const service = await cds.connect.to('ZPDCDS_SRV');
  this.on('READ', SEPMRA_I_Product_E, request => {
    return service.tx(request).run(request.query);
  });
});