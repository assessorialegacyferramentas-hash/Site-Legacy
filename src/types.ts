/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DiagnosticLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  monthlyRevenue: string;
  niche: string;
  status: 'New' | 'Contacted' | 'Closed' | 'Rejected';
  notes: string;
  createdAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

export interface PillarItem {
  id: number;
  title: string;
  description: string;
  result: string;
}

export interface WhyTrustItem {
  id: number;
  title: string;
  description: string;
}

export interface GrowthBenefit {
  id: number;
  text: string;
}

export interface GrowthPlan {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  contract: string;
  isPopular?: boolean;
}
