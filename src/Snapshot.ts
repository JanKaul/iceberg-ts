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
import type { SnapshotSummary } from './SnapshotSummary';
/**
 *
 * @export
 * @interface Snapshot
 */
export type Snapshot = {
    /**
     *
     * @type {number}
     * @memberof Snapshot
     */
    "snapshot-id": number;
    /**
     *
     * @type {number}
     * @memberof Snapshot
     */
    "parent-snapshot-id"?: number;
    /**
     *
     * @type {number}
     * @memberof Snapshot
     */
    "sequence-number"?: number;
    /**
     *
     * @type {number}
     * @memberof Snapshot
     */
    "timestamp-ms": number;
    /**
     * Location of the snapshot's manifest list file
     * @type {string}
     * @memberof Snapshot
     */
    "manifest-list": string;
    /**
     *
     * @type {SnapshotSummary}
     * @memberof Snapshot
     */
    summary: SnapshotSummary;
    /**
     *
     * @type {number}
     * @memberof Snapshot
     */
    "schema-id"?: number;
}