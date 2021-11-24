using {ZPDCDS_SRV as service} from '../../srv/service';

annotate service.SEPMRA_I_Product_E with @UI : {LineItem : [
  {
    $Type : 'UI.DataField',
    Value : Product,
  },
  {
    $Type : 'UI.DataField',
    Value : ProductType,
  },
  {
    $Type : 'UI.DataField',
    Value : ProductCategory,
  },
  {
    $Type : 'UI.DataField',
    Value : Width,
  },
  {
    $Type : 'UI.DataField',
    Value : Height,
  },
  {
    $Type : 'UI.DataField',
    Value : Depth,
  }

]};
