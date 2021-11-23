import { CollectionField, ComplexTypeField, ConstructorOrField, EdmTypeField, EntityV4, FieldOptions, FieldType, OrderableEdmTypeField, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * Sap_Message
 */
export interface Sap_Message {
    /**
     * Code.
     */
    code: string;
    /**
     * Message.
     */
    message: string;
    /**
     * Target.
     * @nullable
     */
    target?: string;
    /**
     * Additional Targets.
     */
    additionalTargets: string[];
    /**
     * Transition.
     */
    transition: boolean;
    /**
     * Numeric Severity.
     */
    numericSeverity: number;
    /**
     * Longtext Url.
     * @nullable
     */
    longtextUrl?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[Sap_Message.build]] instead.
 */
export declare function createSap_Message(json: any): Sap_Message;
/**
 * Sap_MessageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Sap_MessageField<EntityT extends EntityV4, NullableT extends boolean = false, SelectableT extends boolean = false> extends ComplexTypeField<EntityT, Sap_Message, NullableT, SelectableT> {
    private _fieldBuilder;
    /**
     * Representation of the [[Sap_Message.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: EdmTypeField<EntityT, 'Edm.String', false, false>;
    /**
     * Representation of the [[Sap_Message.message]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    message: EdmTypeField<EntityT, 'Edm.String', false, false>;
    /**
     * Representation of the [[Sap_Message.target]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    target: EdmTypeField<EntityT, 'Edm.String', true, false>;
    /**
     * Representation of the [[Sap_Message.additionalTargets]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalTargets: CollectionField<EntityT, 'Edm.String', false, false>;
    /**
     * Representation of the [[Sap_Message.transition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transition: EdmTypeField<EntityT, 'Edm.Boolean', false, false>;
    /**
     * Representation of the [[Sap_Message.numericSeverity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numericSeverity: OrderableEdmTypeField<EntityT, 'Edm.Byte', false, false>;
    /**
     * Representation of the [[Sap_Message.longtextUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    longtextUrl: EdmTypeField<EntityT, 'Edm.String', true, false>;
    /**
     * Creates an instance of Sap_MessageField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>, fieldOptions?: FieldOptions<NullableT, SelectableT>);
}
export declare namespace Sap_Message {
    /**
     * Metadata information on all properties of the `Sap_Message` complex type.
     */
    const _propertyMetadata: PropertyMetadata<Sap_Message>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): Sap_Message;
}
//# sourceMappingURL=Sap_Message.d.ts.map