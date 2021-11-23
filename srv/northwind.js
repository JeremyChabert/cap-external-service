const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { Regions, Customers } = this.entities;
  const service = await cds.connect.to('Northwind');
  this.on('READ', Regions, request => {
    return service.tx(request).run(request.query);
  });
  this.on('READ', Customers, request => {
    return service.tx(request).run(request.query);
  });
});