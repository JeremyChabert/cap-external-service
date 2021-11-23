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
exports.PlannedOrderCapacityRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PlannedOrderCapacity_1 = require("./PlannedOrderCapacity");
/**
 * Request builder class for operations supported on the [[PlannedOrderCapacity]] entity.
 */
var PlannedOrderCapacityRequestBuilder = /** @class */ (function (_super) {
    __extends(PlannedOrderCapacityRequestBuilder, _super);
    function PlannedOrderCapacityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PlannedOrderCapacity` entity based on its keys.
     * @param plannedOrder Key property. See [[PlannedOrderCapacity.plannedOrder]].
     * @param capacityRequirement Key property. See [[PlannedOrderCapacity.capacityRequirement]].
     * @param capacityRequirementItem Key property. See [[PlannedOrderCapacity.capacityRequirementItem]].
     * @param capacityRqmtItemCapacity Key property. See [[PlannedOrderCapacity.capacityRqmtItemCapacity]].
     * @returns A request builder for creating requests to retrieve one `PlannedOrderCapacity` entity based on its keys.
     */
    PlannedOrderCapacityRequestBuilder.prototype.getByKey = function (plannedOrder, capacityRequirement, capacityRequirementItem, capacityRqmtItemCapacity) {
        return new core_1.GetByKeyRequestBuilderV4(PlannedOrderCapacity_1.PlannedOrderCapacity, {
            PlannedOrder: plannedOrder,
            CapacityRequirement: capacityRequirement,
            CapacityRequirementItem: capacityRequirementItem,
            CapacityRqmtItemCapacity: capacityRqmtItemCapacity
        });
    };
    /**
     * Returns a request builder for querying all `PlannedOrderCapacity` entities.
     * @returns A request builder for creating requests to retrieve all `PlannedOrderCapacity` entities.
     */
    PlannedOrderCapacityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PlannedOrderCapacity_1.PlannedOrderCapacity);
    };
    /**
     * Returns a request builder for creating a `PlannedOrderCapacity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PlannedOrderCapacity`.
     */
    PlannedOrderCapacityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PlannedOrderCapacity_1.PlannedOrderCapacity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PlannedOrderCapacity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PlannedOrderCapacity`.
     */
    PlannedOrderCapacityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PlannedOrderCapacity_1.PlannedOrderCapacity, entity);
    };
    PlannedOrderCapacityRequestBuilder.prototype.delete = function (plannedOrderOrEntity, capacityRequirement, capacityRequirementItem, capacityRqmtItemCapacity) {
        return new core_1.DeleteRequestBuilderV4(PlannedOrderCapacity_1.PlannedOrderCapacity, plannedOrderOrEntity instanceof PlannedOrderCapacity_1.PlannedOrderCapacity ? plannedOrderOrEntity : {
            PlannedOrder: plannedOrderOrEntity,
            CapacityRequirement: capacityRequirement,
            CapacityRequirementItem: capacityRequirementItem,
            CapacityRqmtItemCapacity: capacityRqmtItemCapacity
        });
    };
    return PlannedOrderCapacityRequestBuilder;
}(core_1.RequestBuilder));
exports.PlannedOrderCapacityRequestBuilder = PlannedOrderCapacityRequestBuilder;
//# sourceMappingURL=PlannedOrderCapacityRequestBuilder.js.map