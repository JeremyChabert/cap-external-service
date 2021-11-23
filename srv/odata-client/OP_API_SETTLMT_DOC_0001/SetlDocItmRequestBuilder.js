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
exports.SetlDocItmRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SetlDocItm_1 = require("./SetlDocItm");
/**
 * Request builder class for operations supported on the [[SetlDocItm]] entity.
 */
var SetlDocItmRequestBuilder = /** @class */ (function (_super) {
    __extends(SetlDocItmRequestBuilder, _super);
    function SetlDocItmRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SetlDocItm` entity based on its keys.
     * @param settlmtDoc Key property. See [[SetlDocItm.settlmtDoc]].
     * @param settlmtDocItem Key property. See [[SetlDocItm.settlmtDocItem]].
     * @returns A request builder for creating requests to retrieve one `SetlDocItm` entity based on its keys.
     */
    SetlDocItmRequestBuilder.prototype.getByKey = function (settlmtDoc, settlmtDocItem) {
        return new core_1.GetByKeyRequestBuilderV4(SetlDocItm_1.SetlDocItm, {
            SettlmtDoc: settlmtDoc,
            SettlmtDocItem: settlmtDocItem
        });
    };
    /**
     * Returns a request builder for querying all `SetlDocItm` entities.
     * @returns A request builder for creating requests to retrieve all `SetlDocItm` entities.
     */
    SetlDocItmRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SetlDocItm_1.SetlDocItm);
    };
    /**
     * Returns a request builder for creating a `SetlDocItm` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SetlDocItm`.
     */
    SetlDocItmRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SetlDocItm_1.SetlDocItm, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SetlDocItm`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SetlDocItm`.
     */
    SetlDocItmRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SetlDocItm_1.SetlDocItm, entity);
    };
    SetlDocItmRequestBuilder.prototype.delete = function (settlmtDocOrEntity, settlmtDocItem) {
        return new core_1.DeleteRequestBuilderV4(SetlDocItm_1.SetlDocItm, settlmtDocOrEntity instanceof SetlDocItm_1.SetlDocItm ? settlmtDocOrEntity : {
            SettlmtDoc: settlmtDocOrEntity,
            SettlmtDocItem: settlmtDocItem
        });
    };
    return SetlDocItmRequestBuilder;
}(core_1.RequestBuilder));
exports.SetlDocItmRequestBuilder = SetlDocItmRequestBuilder;
//# sourceMappingURL=SetlDocItmRequestBuilder.js.map