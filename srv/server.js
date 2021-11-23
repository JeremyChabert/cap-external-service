const cds = require('@sap/cds');
const csrf = require('csurf');
const express = require('express');
const helmet = require('helmet');
// ... some custom bootstrapping ...
cds.on(
  'bootstrap',
  (app) => {
    app.use(helmet());
    //   var csrfProtection = csrf({ cookie: true });
    //   var parseForm = express.urlencoded({ extended: false });

    //   // app.use((err, req, res, next) => {
    //   //   res.set('x-csrf-token', "O8Gt6biLdmsfJXsAcN8gkw==")
    //   // })
    //  app.head(
    //     '/sap/opu/odata4/sap/api_settlmt_doc/srvd_a2x/sap/settlmtdoc/0001/',
    //     csrfProtection,
    //     function (req, res) {
    //       res.set('X-CSRF-Token', req.csrfToken());
    //       res.send();
    //     }
    //   );

    //   // TODO: provide actual service endpoints of served services
    //   // Needs to be adapted for non-Fiori Elements UIs
    //   app.post(
    //     '/sap/opu/odata4/sap/api_settlmt_doc/srvd_a2x/sap/settlmtdoc/0001/$batch',
    //     parseForm,
    //     csrfProtection,
    //     function (req, res, next) {
    //       next();
    //     }
    //   );

    //   app.use(function (err, req, res, next) {
    //     if (err.code !== 'EBADCSRFTOKEN') return next(err);

    //     res.status(403);
    //     res.set('X-CSRF-Token', 'required');
    //     res.send();
    //   });
  }
);

module.exports = cds.server; //> delegate to default server.js