import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PlannedOrderHeader } from './PlannedOrderHeader';
/**
 * Request builder class for operations supported on the [[PlannedOrderHeader]] entity.
 */
export declare class PlannedOrderHeaderRequestBuilder extends RequestBuilder<PlannedOrderHeader> {
    /**
     * Returns a request builder for retrieving one `PlannedOrderHeader` entity based on its keys.
     * @param plannedOrder Key property. See [[PlannedOrderHeader.plannedOrder]].
     * @returns A request builder for creating requests to retrieve one `PlannedOrderHeader` entity based on its keys.
     */
    getByKey(plannedOrder: string): GetByKeyRequestBuilderV4<PlannedOrderHeader>;
    /**
     * Returns a request builder for querying all `PlannedOrderHeader` entities.
     * @returns A request builder for creating requests to retrieve all `PlannedOrderHeader` entities.
     */
    getAll(): GetAllRequestBuilderV4<PlannedOrderHeader>;
    /**
     * Returns a request builder for creating a `PlannedOrderHeader` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PlannedOrderHeader`.
     */
    create(entity: PlannedOrderHeader): CreateRequestBuilderV4<PlannedOrderHeader>;
    /**
     * Returns a request builder for updating an entity of type `PlannedOrderHeader`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PlannedOrderHeader`.
     */
    update(entity: PlannedOrderHeader): UpdateRequestBuilderV4<PlannedOrderHeader>;
    /**
     * Returns a request builder for deleting an entity of type `PlannedOrderHeader`.
     * @param plannedOrder Key property. See [[PlannedOrderHeader.plannedOrder]].
     * @returns A request builder for creating requests that delete an entity of type `PlannedOrderHeader`.
     */
    delete(plannedOrder: string): DeleteRequestBuilderV4<PlannedOrderHeader>;
    /**
     * Returns a request builder for deleting an entity of type `PlannedOrderHeader`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PlannedOrderHeader` by taking the entity as a parameter.
     */
    delete(entity: PlannedOrderHeader): DeleteRequestBuilderV4<PlannedOrderHeader>;
}
//# sourceMappingURL=PlannedOrderHeaderRequestBuilder.d.ts.map