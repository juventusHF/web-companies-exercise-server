import express from "express";
import cors from "cors";
import { randomUUID } from "node:crypto";
import type { Company } from "./types";
import { invalidCompanyError, parseCompany } from "./validation";
import {initialData} from "./mock-data";

const port = 3000;
const companies = new Map<string, Company>();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/companies", (_req, res) => {
  if (companies.size === 0) return void res.json(initialData);
  res.json([...companies.values()]);
});

app.get("/companies/:id", (req, res) => {
  const company = companies.get(req.params.id);
  if (!company) return void res.status(404).json({ error: "Company not found" });
  res.json(company);
});

app.post("/companies", (req, res) => {
  const company = parseCompany(randomUUID(), req.body);
  if (!company) return void res.status(400).json(invalidCompanyError);
  companies.set(company.id, company);
  res.status(201).json(company);
});

app.put("/companies/:id", (req, res) => {
  if (!companies.has(req.params.id)) {
    return void res.status(404).json({ error: "Company not found" });
  }
  const company = parseCompany(req.params.id, req.body);
  if (!company) return void res.status(400).json(invalidCompanyError);
  companies.set(company.id, company);
  res.json(company);
});

app.delete("/companies/:id", (req, res) => {
  if (!companies.delete(req.params.id)) {
    return void res.status(404).json({ error: "Company not found" });
  }
  res.status(204).end();
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
