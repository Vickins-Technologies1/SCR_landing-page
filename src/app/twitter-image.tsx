import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, rgba(30,58,138,0.12) 0%, rgba(66,199,117,0.18) 100%)",
          padding: 72,
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 48,
            background: "rgba(255,255,255,0.86)",
            border: "1px solid rgba(30,58,138,0.14)",
            boxShadow: "0 30px 90px -60px rgba(30,58,138,0.55)",
            padding: 56,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 18, letterSpacing: 6, textTransform: "uppercase", color: "rgba(30,58,138,0.72)" }}>
            Sorana • Kenya
          </div>
          <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.05, color: "#1e3a8a" }}>{site.shortName}</div>
          <div style={{ fontSize: 26, color: "rgba(30,58,138,0.76)" }}>{site.description}</div>
        </div>
      </div>
    ),
    size
  );
}

