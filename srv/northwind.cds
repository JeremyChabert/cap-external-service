using {Northwind as external} from './external/Northwind.csn';

@path : 'northwind'
service northwindAPI {

  @readonly
  entity Customers as projection on external.Customers;

  @readonly
  entity Regions   as projection on external.Regions;

}
