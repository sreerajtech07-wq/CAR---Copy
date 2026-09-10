import React from "react";
import ReactDOM from "react-dom/client";
import { ParticleNetworkBackground } from "./components/common/ParticleNetworkBackground";
import "./index.css";
import "./particle-preview.css";

const PreviewPage: React.FC = () => {
  return (
    <main className="particle-preview-page">
      <ParticleNetworkBackground
        particleColor="180, 140, 30"
        particleAlpha={[0.28, 0.45]}
        connectionAlpha={0.12}
        mouseConnectionAlpha={0.3}
        canvasOpacity={0.82}
      />

      <div className="particle-preview-content">
        <header className="particle-preview-header">
          <div>
            <p className="preview-kicker">PARTICLE NETWORK // VISUAL PREVIEW</p>
            <h1>White luxury atmosphere.</h1>
            <p className="preview-intro">
              A restrained champagne-gold network for the automotive studio environment.
              Move the pointer through the field and scroll to confirm the canvas stays fixed.
            </p>
          </div>
          <div className="preview-status">
            <span className="status-dot" />
            LIVE CANVAS
          </div>
        </header>

        <section className="preview-panel preview-panel-wide">
          <p className="preview-kicker">01 // SURFACE LANGUAGE</p>
          <h2>Precision in the quiet details.</h2>
          <p>
            The particles drift slowly, connect only at close range, and respond gently when
            the cursor enters their orbit. The page remains deliberately white so the gold
            network can be judged without the existing website layered over it.
          </p>
          <div className="preview-metrics">
            <div>
              <strong>CHAMPAGNE</strong>
              <span>Low-opacity gold field</span>
            </div>
            <div>
              <strong>FIXED</strong>
              <span>Viewport-attached canvas</span>
            </div>
            <div>
              <strong>RESPONSIVE</strong>
              <span>Capped density by device</span>
            </div>
          </div>
        </section>

        <section className="preview-card-grid">
          <article className="preview-panel">
            <p className="preview-kicker">02 // DETAILING</p>
            <h2>Clearcoat clarity.</h2>
            <p>
              Fine connections echo inspection-light geometry while keeping headings and body
              copy clean and easy to read.
            </p>
          </article>
          <article className="preview-panel">
            <p className="preview-kicker">03 // PROTECTION</p>
            <h2>Quietly intelligent.</h2>
            <p>
              Cursor links become slightly more visible nearby, then recede naturally when the
              pointer leaves the frame.
            </p>
          </article>
        </section>

        <section className="preview-spacer">
          <p className="preview-kicker">04 // SCROLL CHECK</p>
          <h2>The atmosphere stays with the viewport.</h2>
          <p>
            This preview is intentionally more than 200vh tall. Continue down the page to see
            content move while the network remains fixed behind it.
          </p>
        </section>

        <footer className="preview-footer">
          <span>3M CAR CARE STUDIO</span>
          <span>WHITE + GOLD PARTICLE NETWORK</span>
        </footer>
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PreviewPage />
  </React.StrictMode>
);
