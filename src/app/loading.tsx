export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fbf7f0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "3px solid #e7dccb",
            borderTopColor: "#c2542b",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#8a7c6a",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Loading…
        </span>
      </div>
    </div>
  );
}
