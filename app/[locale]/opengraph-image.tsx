import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Consulting & Automation Agency | CodeHunter Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
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
                        top: -100,
                        right: -100,
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background: "rgba(0, 255, 136, 0.08)",
                        filter: "blur(80px)",
                    }}
                />
                {/* Orange glow bottom-left */}
                <div
                    style={{
                        position: "absolute",
                        bottom: -100,
                        left: -100,
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "rgba(255, 107, 0, 0.06)",
                        filter: "blur(80px)",
                    }}
                />

                {/* Tag */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        background: "rgba(0, 255, 136, 0.08)",
                        border: "1px solid rgba(0, 255, 136, 0.2)",
                        borderRadius: 999,
                        padding: "6px 18px",
                        marginBottom: 32,
                    }}
                >
                    <span style={{ color: "#00ff88", fontSize: 14, letterSpacing: 2 }}>
                        CODEHUNTER LAB
                    </span>
                </div>

                {/* Headline */}
                <div
                    style={{
                        fontSize: 56,
                        fontWeight: 700,
                        color: "#ffffff",
                        lineHeight: 1.1,
                        marginBottom: 24,
                        maxWidth: 800,
                    }}
                >
                    AI Consulting & Automation That{" "}
                    <span style={{ color: "#00ff88" }}>Ships to Production.</span>
                </div>

                {/* Description */}
                <div
                    style={{
                        fontSize: 22,
                        color: "#9ca3af",
                        maxWidth: 700,
                        lineHeight: 1.5,
                        marginBottom: 48,
                    }}
                >
                    AI Agents · Workflow Automation · System Integration · Leiden, Netherlands
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
                        www.codehunterlab.com
                    </span>
                </div>
            </div>
        ),
        { ...size }
    );
}
