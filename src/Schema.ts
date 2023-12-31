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
import type { StructField } from './StructField';
/**
 *
 * @export
 * @interface Schema
 */
export type Schema = {
    /**
     *
     * @type {string}
     * @memberof Schema
     */
    type: "struct";
    /**
     *
     * @type {Array<StructField>}
     * @memberof Schema
     */
    fields: Array<StructField>;
    /**
     *
     * @type {number}
     * @memberof Schema
     */
    readonly "schema-id"?: number;
    /**
     *
     * @type {Array<number>}
     * @memberof Schema
     */
    "identifier-field-ids"?: Array<number>;
}
