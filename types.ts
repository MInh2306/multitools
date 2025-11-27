import { ReactNode } from 'react';

export interface ToolDef {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: ReactNode;
}

export interface ApiResult {
  success: boolean;
  data?: string;
  error?: string;
}

export interface ToolPageProps {
  toolName: string;
  description: string;
}