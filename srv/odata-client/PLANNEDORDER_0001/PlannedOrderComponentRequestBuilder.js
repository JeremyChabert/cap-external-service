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
exports.PlannedOrderComponentRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PlannedOrderComponent_1 = require("./PlannedOrderComponent");
/**
 * Request builder class for operations supported on the [[PlannedOrderComponent]] entity.
 */
var PlannedOrderComponentRequestBuilder = /** @class */ (function (_super) {
    __extends(PlannedOrderComponentRequestBuilder, _super);
    function PlannedOrderComponentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PlannedOrderComponent` entity based on its keys.
     * @param plannedOrder Key property. See [[PlannedOrderComponent.plannedOrder]].
     * @param reservation Key property. See [[PlannedOrderComponent.reservation]].
     * @param reservationItem Key property. See [[PlannedOrderComponent.reservationItem]].
     * @returns A request builder for creating requests to retrieve one `PlannedOrderComponent` entity based on its keys.
     */
    PlannedOrderComponentRequestBuilder.prototype.getByKey = function (plannedOrder, reservation, reservationItem) {
        return new core_1.GetByKeyRequestBuilderV4(PlannedOrderComponent_1.PlannedOrderComponent, {
            PlannedOrder: plannedOrder,
            Reservation: reservation,
            ReservationItem: reservationItem
        });
    };
    /**
     * Returns a request builder for querying all `PlannedOrderComponent` entities.
     * @returns A request builder for creating requests to retrieve all `PlannedOrderComponent` entities.
     */
    PlannedOrderComponentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PlannedOrderComponent_1.PlannedOrderComponent);
    };
    /**
     * Returns a request builder for creating a `PlannedOrderComponent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PlannedOrderComponent`.
     */
    PlannedOrderComponentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PlannedOrderComponent_1.PlannedOrderComponent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PlannedOrderComponent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PlannedOrderComponent`.
     */
    PlannedOrderComponentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PlannedOrderComponent_1.PlannedOrderComponent, entity);
    };
    PlannedOrderComponentRequestBuilder.prototype.delete = function (plannedOrderOrEntity, reservation, reservationItem) {
        return new core_1.DeleteRequestBuilderV4(PlannedOrderComponent_1.PlannedOrderComponent, plannedOrderOrEntity instanceof PlannedOrderComponent_1.PlannedOrderComponent ? plannedOrderOrEntity : {
            PlannedOrder: plannedOrderOrEntity,
            Reservation: reservation,
            ReservationItem: reservationItem
        });
    };
    return PlannedOrderComponentRequestBuilder;
}(core_1.RequestBuilder));
exports.PlannedOrderComponentRequestBuilder = PlannedOrderComponentRequestBuilder;
//# sourceMappingURL=PlannedOrderComponentRequestBuilder.js.map