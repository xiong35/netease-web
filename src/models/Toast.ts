export type Toast = {
  id: number;
  severity: "success" | "error" | "warning" | "info";
  value: string;
};
