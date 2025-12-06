export interface Category {
  id: number;
  nome: string;
  parent?: Category | null;
  children?: Category[];
}
