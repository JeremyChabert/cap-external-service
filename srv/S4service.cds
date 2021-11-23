
using {OP_API_SETTLMT_DOC_0001.sap.gateway.srvd_a2x.api_settlmt_doc.v0001 as anotherexternal} from './external/OP_API_SETTLMT_DOC_0001.csn';

@path : 'sapS4onprem'
service AnotherAPI {
  @readonly
  entity SetlDoc as projection on anotherexternal.SetlDoc;

}
