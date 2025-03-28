/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * Insure Investors API
 * OpenAPI spec version: v1
 */
import type { DomainModelMemberActivityDto } from './domainModelMemberActivityDto';
import type { DomainModelNewBusinessProducerProductionDto } from './domainModelNewBusinessProducerProductionDto';

export interface DomainModelProductionDivider {
  AGENTID?: number;
  AnnualPremium?: number;
  AssetStatusID?: number;
  BILLINGMONTHLYPAYMENT?: number;
  ClosingRatio?: number;
  CREATEDATE?: string;
  CUSTOMERID?: number;
  Earn?: number;
  FIRSTNAME?: string;
  LASTNAME?: string;
  MemberActivity?: DomainModelMemberActivityDto;
  MonthlyPremium?: number;
  MonthlyPremiumBilled?: number;
  MonthlyPremiumCLOSED?: number;
  MonthlyPremiumOutstanding?: number;
  MonthlyPremiumQuoted?: number;
  NewBusinessProducerProduction?: DomainModelNewBusinessProducerProductionDto;
  NumberOfCustomers?: number;
  NumberOfProspects?: number;
  PremiumWon?: number;
  ReceivedPremium?: number;
}
