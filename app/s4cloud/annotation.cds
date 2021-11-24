using {S4APIService as service} from '../../srv/s4cloudservice';

annotate service.AddressEmailAddress with @UI : {LineItem : [
  {
    $Type : 'UI.DataField',
    Value : addressId,
  },
  {
    $Type : 'UI.DataField',
    Value : emailAddress,
  },
  {
    $Type : 'UI.DataField',
    Value : person,
  },
  {
    $Type : 'UI.DataField',
    Value : searchEmailAddress,
  },
  {
    $Type : 'UI.DataField',
    Value : isDefaultEmailAddress,
  },
  {
    $Type : 'UI.DataField',
    Value : addressCommunicationRemarkText,
  }
]};
