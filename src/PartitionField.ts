/**
 * Apache Iceberg REST Catalog API
 * Defines the specification for the first version of the REST Catalog API. Implementations should ideally support both Iceberg table specs v1 and v2, with priority given to v2.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PartitionField
 */
export type PartitionField = {
    /**
     *
     * @type {number}
     * @memberof PartitionField
     */
    "field-id"?: number;
    /**
     *
     * @type {number}
     * @memberof PartitionField
     */
    "source-id": number;
    /**
     *
     * @type {string}
     * @memberof PartitionField
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof PartitionField
     */
    transform: string;
}
