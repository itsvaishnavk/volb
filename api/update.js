export default function handler(req, res) {
  res.status(200).json({
    app: "VOLB",
    version: "1.0.0",
    size: "1.77 MB",
    download: "/apk/volb.apk",
    official: "https://volb.vercel.app"
  });
}
