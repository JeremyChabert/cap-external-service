using {AnotherAPI as service} from '../../srv/S4service';

annotate service.SetlDoc with @UI : {LineItem : [
  {
    $Type : 'UI.DataField',
    Value : AssignmentReference,
  },
  {
    $Type : 'UI.DataField',
    Value : BillToParty,
  },
  {
    $Type : 'UI.DataField',
    Value : CanceledSettlmtDoc,
  },
  {
    $Type : 'UI.DataField',
    Value : CustSettlmtCompanyCode,
  },
  {
    $Type : 'UI.DataField',
    Value : CustTotEligibleAmtForCshDisc,
  },
  {
    $Type : 'UI.DataField',
    Value : CustomerCashDiscount1Days,
  }

]};
