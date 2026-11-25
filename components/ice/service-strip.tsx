export function ServiceStrip() {
  const items = ["AI PRODUCT VISUALS", "VIDEO & MOTION", "BRAND IDENTITY", "CGI & 3D", "SMART CHATBOTS", "DIGITAL EXPERIENCES", "CREATIVE CAMPAIGNS", "AUTOMATION"];
  return <div className="hm-service-strip hm-service-strip-premium" aria-label="خدمات ICE"><div className="hm-service-track">{[...items, ...items].map((item, i) => <span key={i}>{item}<b>✳</b></span>)}</div></div>;
}
