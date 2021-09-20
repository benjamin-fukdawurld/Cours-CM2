import React from "react";

export interface CellProperties {
  pre?: React.ReactNode | string;
  post?: React.ReactNode | string;
  value?: React.ReactNode | string;
  active?: boolean;
}
