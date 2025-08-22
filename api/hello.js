export default function handler(req, res) {
  res.status(200).json({ status: "ok", message: "Hello from /api/hello" });
}
