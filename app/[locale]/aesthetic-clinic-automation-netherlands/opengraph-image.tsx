import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aesthetic Clinic Automation Netherlands — CodeHunter Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0B0B0B",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Green glow top-right */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(0, 255, 136, 0.10)",
          filter: "blur(80px)",
        }}
      />
      {/* Orange glow bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(255, 107, 0, 0.07)",
          filter: "blur(80px)",
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(0, 255, 136, 0.08)",
          border: "1px solid rgba(0, 255, 136, 0.2)",
          borderRadius: 999,
          padding: "6px 18px",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#00ff88",
          }}
        />
        <span style={{ color: "#00ff88", fontSize: 13, letterSpacing: 3, fontWeight: 700 }}>
          AESTHETIC AUTOMATION NL
        </span>
      </div>

      {/* Headline */}
      <div
        style={{
          fontSize: 58,
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1.05,
          marginBottom: 28,
          maxWidth: 820,
          letterSpacing: "-2px",
        }}
      >
        Aesthetic Clinic Automation <span style={{ color: "#00ff88" }}>Netherlands.</span>
      </div>

      {/* Three service pills */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 44,
        }}
      >
        {["Instagram DM", "Booking", "CRM"].map((label) => (
          <div
            key={label}
            style={{
              padding: "8px 20px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "#9ca3af",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#00ff88",
          }}
        />
        <span style={{ color: "#6b7280", fontSize: 16 }}>
          codehunterlab.com/aesthetic-clinic-automation-netherlands
        </span>
      </div>
    </div>,
    { ...size }
  );
}
