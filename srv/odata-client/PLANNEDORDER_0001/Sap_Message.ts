/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CollectionField, ComplexTypeField, ConstructorOrField, EdmTypeField, EntityV4, FieldBuilder, FieldOptions, FieldType, OrderableEdmTypeField, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createSap_Message(json: any): Sap_Message {
  return Sap_Message.build(json);
}

/**
 * Sap_MessageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class Sap_MessageField<EntityT extends EntityV4, NullableT extends boolean = false, SelectableT extends boolean = false> extends ComplexTypeField<EntityT, Sap_Message, NullableT, SelectableT> {
  private _fieldBuilder: FieldBuilder<this> = new FieldBuilder(this);
  /**
   * Representation of the [[Sap_Message.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: EdmTypeField<EntityT, 'Edm.String', false, false> = this._fieldBuilder.buildEdmTypeField('code', 'Edm.String', false);
  /**
   * Representation of the [[Sap_Message.message]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  message: EdmTypeField<EntityT, 'Edm.String', false, false> = this._fieldBuilder.buildEdmTypeField('message', 'Edm.String', false);
  /**
   * Representation of the [[Sap_Message.target]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  target: EdmTypeField<EntityT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('target', 'Edm.String', true);
  /**
   * Representation of the [[Sap_Message.additionalTargets]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalTargets: CollectionField<EntityT, 'Edm.String', false, false> = this._fieldBuilder.buildCollectionField('additionalTargets', 'Edm.String', false);
  /**
   * Representation of the [[Sap_Message.transition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transition: EdmTypeField<EntityT, 'Edm.Boolean', false, false> = this._fieldBuilder.buildEdmTypeField('transition', 'Edm.Boolean', false);
  /**
   * Representation of the [[Sap_Message.numericSeverity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numericSeverity: OrderableEdmTypeField<EntityT, 'Edm.Byte', false, false> = this._fieldBuilder.buildEdmTypeField('numericSeverity', 'Edm.Byte', false);
  /**
   * Representation of the [[Sap_Message.longtextUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  longtextUrl: EdmTypeField<EntityT, 'Edm.String', true, false> = this._fieldBuilder.buildEdmTypeField('longtextUrl', 'Edm.String', true);

  /**
   * Creates an instance of Sap_MessageField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>, fieldOptions?: FieldOptions<NullableT, SelectableT>) {
    super(fieldName, fieldOf, Sap_Message, fieldOptions);
  }
}

export namespace Sap_Message {
  /**
   * Metadata information on all properties of the `Sap_Message` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Sap_Message>[] = [{
    originalName: 'code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'message',
    name: 'message',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'target',
    name: 'target',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'additionalTargets',
    name: 'additionalTargets',
    type: 'Edm.String',
    isCollection: true
  }, {
    originalName: 'transition',
    name: 'transition',
    type: 'Edm.Boolean',
    isCollection: false
  }, {
    originalName: 'numericSeverity',
    name: 'numericSeverity',
    type: 'Edm.Byte',
    isCollection: false
  }, {
    originalName: 'longtextUrl',
    name: 'longtextUrl',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): Sap_Message {
    return deserializeComplexTypeV4(json, Sap_Message);
  }
}
