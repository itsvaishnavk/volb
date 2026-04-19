export default function handler(req, res) {
  res.status(200).json({
    app: "VOLB",
    version: "1.0.0",
    size: "1.77 MB",
    updated: "April 19 2026",
    download: "/apk/volb.apk"
  });
}
