"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetlDocRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SetlDoc_1 = require("./SetlDoc");
/**
 * Request builder class for operations supported on the [[SetlDoc]] entity.
 */
var SetlDocRequestBuilder = /** @class */ (function (_super) {
    __extends(SetlDocRequestBuilder, _super);
    function SetlDocRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SetlDoc` entity based on its keys.
     * @param settlmtDoc Key property. See [[SetlDoc.settlmtDoc]].
     * @returns A request builder for creating requests to retrieve one `SetlDoc` entity based on its keys.
     */
    SetlDocRequestBuilder.prototype.getByKey = function (settlmtDoc) {
        return new core_1.GetByKeyRequestBuilderV4(SetlDoc_1.SetlDoc, { SettlmtDoc: settlmtDoc });
    };
    /**
     * Returns a request builder for querying all `SetlDoc` entities.
     * @returns A request builder for creating requests to retrieve all `SetlDoc` entities.
     */
    SetlDocRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SetlDoc_1.SetlDoc);
    };
    /**
     * Returns a request builder for creating a `SetlDoc` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SetlDoc`.
     */
    SetlDocRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SetlDoc_1.SetlDoc, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SetlDoc`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SetlDoc`.
     */
    SetlDocRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SetlDoc_1.SetlDoc, entity);
    };
    SetlDocRequestBuilder.prototype.delete = function (settlmtDocOrEntity) {
        return new core_1.DeleteRequestBuilderV4(SetlDoc_1.SetlDoc, settlmtDocOrEntity instanceof SetlDoc_1.SetlDoc ? settlmtDocOrEntity : { SettlmtDoc: settlmtDocOrEntity });
    };
    return SetlDocRequestBuilder;
}(core_1.RequestBuilder));
exports.SetlDocRequestBuilder = SetlDocRequestBuilder;
//# sourceMappingURL=SetlDocRequestBuilder.js.map