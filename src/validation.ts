import type { Address, Company, Employee } from "./types";

const isString = (v: unknown): v is string => typeof v === "string";
const isNumber = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v);
const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const isAddress = (v: unknown): v is Address =>
  isObject(v) &&
  isString(v.street) &&
  isString(v.number) &&
  isString(v.city) &&
  isString(v.country);

const isEmployee = (v: unknown): v is Employee =>
  isObject(v) && isString(v.name) && isNumber(v.salary);

export const parseCompany = (id: string, body: unknown): Company | undefined => {
  if (!isObject(body)) return undefined;
  const { name, address, employees } = body;
  if (!isString(name) || !isAddress(address)) return undefined;
  if (!Array.isArray(employees) || !employees.every(isEmployee)) return undefined;
  return {
    id,
    name,
    address: {
      street: address.street,
      number: address.number,
      city: address.city,
      country: address.country,
    },
    employees: employees.map(({ name, salary }) => ({ name, salary })),
  };
};

export const invalidCompanyError = {
  error:
    "name must be a string, address must have string street, number, city and country, " +
    "employees must be an array of { name: string, salary: number }",
};
