import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static assets with appropriate caching
  app.use(express.static(distPath, {
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      // Long-term immutable cache for hashed assets (images, js, css, video)
      if (filePath.match(/\.(png|jpg|jpeg|gif|webp|svg|ico|mp4|webm)$/) ||
          filePath.match(/assets\/.*\.(js|css)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } 
      // No cache for HTML files to ensure fresh app updates
      else if (filePath.match(/\.html$/)) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
      // Short cache for other files
      else {
        res.setHeader('Cache-Control', 'public, max-age=3600');
      }
    }
  }));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
