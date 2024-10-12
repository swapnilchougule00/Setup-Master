export interface Dependency {
  label: string;
  value: string;
  checked: boolean;
  icon: string;
}

export interface Category {
  label: string;
  collapsible: boolean;
  children: Dependency[] | Category[];
}

export type DependencyOrCategory = Category | Dependency;
