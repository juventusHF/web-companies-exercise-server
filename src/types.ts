export interface Address {
  street: string;
  number: string;
  city: string;
  country: string;
}

export interface Employee {
  name: string;
  salary: number;
}

export interface Company {
  id: string;
  name: string;
  address: Address;
  employees: Employee[];
}
