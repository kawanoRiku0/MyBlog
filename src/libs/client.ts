import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "s9me99ulxa",
  apiKey: process.env.API_KEY || "",
});
