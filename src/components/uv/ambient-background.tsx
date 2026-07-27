export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-halo)" }} />
      <div className="absolute inset-0 uv-grid" />
      <div className="uv-particles" />
      <div className="uv-particles uv-particles-2" />
      <div className="uv-aurora absolute -left-40 top-[8%] h-[30rem] w-[30rem] rounded-full bg-primary/25 blur-[140px]" />
      <div
        className="uv-aurora absolute -right-40 top-[45%] h-[34rem] w-[34rem] rounded-full bg-accent/25 blur-[150px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="uv-aurora absolute bottom-[-10%] left-1/3 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-[130px]"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
