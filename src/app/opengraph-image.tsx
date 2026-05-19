import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffffff 0%, rgba(66,199,117,0.14) 55%, rgba(30,58,138,0.10) 100%)",
          position: "relative",
          padding: 72,
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(30,58,138,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.5,
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: 48,
            border: "1px solid rgba(30,58,138,0.14)",
            background: "rgba(255,255,255,0.78)",
            boxShadow: "0 30px 90px -60px rgba(30,58,138,0.55)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 56,
          }}
        >
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 22,
                background: "rgba(66,199,117,0.14)",
                border: "1px solid rgba(66,199,117,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1e3a8a",
                fontWeight: 800,
                fontSize: 30,
              }}
            >
              S
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 18, letterSpacing: 6, textTransform: "uppercase", color: "rgba(30,58,138,0.7)" }}>
                Sorana
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#1e3a8a" }}>Property Managers</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.05, color: "#1e3a8a" }}>{site.name}</div>
            <div style={{ fontSize: 26, color: "rgba(30,58,138,0.76)" }}>{site.description}</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 20, color: "rgba(30,58,138,0.72)" }}>{site.url.replace("https://", "")}</div>
            <div
              style={{
                padding: "14px 18px",
                borderRadius: 999,
                background: "#42c775",
                color: "#ffffff",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Premium Management • Kenya
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}

