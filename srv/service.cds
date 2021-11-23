using {ZPDCDS_SRV as external} from './external/ZPDCDS_SRV.csn';

@path : 'sapes5'
service APIService {
  @readonly
  entity SEPMRA_I_Product_E as projection on external.SEPMRA_I_Product_E;

}
