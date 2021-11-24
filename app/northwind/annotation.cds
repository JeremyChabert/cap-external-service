using {northwindAPI as service} from '../../srv/northwind';

annotate service.Customers with @UI : {LineItem : [
  {
    $Type : 'UI.DataField',
    Value : CustomerID,
  },
  {
    $Type : 'UI.DataField',
    Value : CompanyName,
  },
  {
    $Type : 'UI.DataField',
    Value : ContactName,
  },
  {
    $Type : 'UI.DataField',
    Value : ContactTitle,
  },
  {
    $Type : 'UI.DataField',
    Value : Address,
  },
  {
    $Type : 'UI.DataField',
    Value : City,
  },
  {
    $Type : 'UI.DataField',
    Value : Region,
  },
  {
    $Type : 'UI.DataField',
    Value : PostalCode,
  },
  {
    $Type : 'UI.DataField',
    Value : Country,
  },
  {
    $Type : 'UI.DataField',
    Value : Phone,
  },
  {
    $Type : 'UI.DataField',
    Value : Fax,
  },
]};
