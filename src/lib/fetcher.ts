export default async function fetcher(url: string) {
  const endpoint =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

  const res = await fetch(`${endpoint}${url}`, { cache: "no-store" });
  return res.json();
}