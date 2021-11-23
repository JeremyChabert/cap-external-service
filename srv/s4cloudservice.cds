using {ZPDCDS_SRV as external} from './external/ZPDCDS_SRV.csn';

@path : 's4cloud'
service S4APIService {
  entity AddressEmailAddress {
    addressId                      : String;
    person                         : String;
    ordinalNumber                  : String;
    isDefaultEmailAddress          : Boolean;
    emailAddress                   : String;
    searchEmailAddress             : String;
    addressCommunicationRemarkText : String;
  }

}
