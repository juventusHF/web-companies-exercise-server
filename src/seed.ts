import { randomUUID } from "node:crypto";
import type { Company } from "./types";

const initialData: Omit<Company, "id">[] = [
  {
    name: "First mock company",
    address: {
      street: "Heimstrasse",
      number: "8",
      city: "Zurich",
      country: "Switzerland"
    },
    employees: [
      {name: "John Doe", salary: 120000}
    ]
  },
  {
    name: "Second mock company",
    address: {
      street: "Zanderweg",
      number: "12",
      city: "Zurich",
      country: "Switzerland"
    },
    employees: [
      {name: "Martina Less", salary: 80000},
      {name: "Sandra Neder", salary: 75000},
    ]
  },
  {
    name: "Third mock company",
    address: {
      street: "Adlerstrasse",
      number: "156",
      city: "Bern",
      country: "Switzerland"
    },
    employees: []
  }
];

export function seed(companies: Map<string, Company>) {
  for (const data of initialData) {
    const id = randomUUID();
    companies.set(id, { id, ...data });
  }
}