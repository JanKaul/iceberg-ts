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
import type { Type } from './Type';
/**
 *
 * @export
 * @interface StructField
 */
export type StructField = {
    /**
     *
     * @type {number}
     * @memberof StructField
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof StructField
     */
    name: string;
    /**
     *
     * @type {Type}
     * @memberof StructField
     */
    type: Type;
    /**
     *
     * @type {boolean}
     * @memberof StructField
     */
    required: boolean;
    /**
     *
     * @type {string}
     * @memberof StructField
     */
    doc?: string;
}
