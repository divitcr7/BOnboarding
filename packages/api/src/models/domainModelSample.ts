/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * Insure Investors API
 * OpenAPI spec version: v1
 */
import type { DomainModelSampleStatus } from './domainModelSampleStatus';
import type { DomainModelUser } from './domainModelUser';

export interface DomainModelSample {
  Barcode?: string;
  CreatedAt?: string;
  CreatedBy?: number;
  SampleId?: number;
  Status?: DomainModelSampleStatus;
  StatusId?: number;
  User?: DomainModelUser;
}
