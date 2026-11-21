import {Company} from "./types";

export const initialData: Company[] = [
  {
    id: "abc123",
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
    id: "def456",
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
    id: "ghi789",
    name: "Third mock company",
    address: {
      street: "Adlerstrasse",
      number: "156",
      city: "Bern",
      country: "Switzerland"
    },
    employees: []
  }
]