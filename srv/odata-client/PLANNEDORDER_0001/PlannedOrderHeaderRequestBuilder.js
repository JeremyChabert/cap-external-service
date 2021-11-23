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
exports.PlannedOrderHeaderRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PlannedOrderHeader_1 = require("./PlannedOrderHeader");
/**
 * Request builder class for operations supported on the [[PlannedOrderHeader]] entity.
 */
var PlannedOrderHeaderRequestBuilder = /** @class */ (function (_super) {
    __extends(PlannedOrderHeaderRequestBuilder, _super);
    function PlannedOrderHeaderRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PlannedOrderHeader` entity based on its keys.
     * @param plannedOrder Key property. See [[PlannedOrderHeader.plannedOrder]].
     * @returns A request builder for creating requests to retrieve one `PlannedOrderHeader` entity based on its keys.
     */
    PlannedOrderHeaderRequestBuilder.prototype.getByKey = function (plannedOrder) {
        return new core_1.GetByKeyRequestBuilderV4(PlannedOrderHeader_1.PlannedOrderHeader, { PlannedOrder: plannedOrder });
    };
    /**
     * Returns a request builder for querying all `PlannedOrderHeader` entities.
     * @returns A request builder for creating requests to retrieve all `PlannedOrderHeader` entities.
     */
    PlannedOrderHeaderRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PlannedOrderHeader_1.PlannedOrderHeader);
    };
    /**
     * Returns a request builder for creating a `PlannedOrderHeader` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PlannedOrderHeader`.
     */
    PlannedOrderHeaderRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PlannedOrderHeader_1.PlannedOrderHeader, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PlannedOrderHeader`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PlannedOrderHeader`.
     */
    PlannedOrderHeaderRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PlannedOrderHeader_1.PlannedOrderHeader, entity);
    };
    PlannedOrderHeaderRequestBuilder.prototype.delete = function (plannedOrderOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PlannedOrderHeader_1.PlannedOrderHeader, plannedOrderOrEntity instanceof PlannedOrderHeader_1.PlannedOrderHeader ? plannedOrderOrEntity : { PlannedOrder: plannedOrderOrEntity });
    };
    return PlannedOrderHeaderRequestBuilder;
}(core_1.RequestBuilder));
exports.PlannedOrderHeaderRequestBuilder = PlannedOrderHeaderRequestBuilder;
//# sourceMappingURL=PlannedOrderHeaderRequestBuilder.js.map