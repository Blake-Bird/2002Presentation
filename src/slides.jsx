import React from 'react';

export const slides = [
  // SLIDE 1 – Title / Opening Hook
  {
    id: 1,
    maxStep: 5,
    render(step) {
      return (
        <div className="slide-1">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Quantum Walks Unveil the Physics Driving Market Microstructure
            </h1>
            <div
              className={`title-underline ${
                step >= 1 ? 'wipe-right' : 'hidden'
              }`}
            />
          </div>

          <div className="slide-1-main">
            <div className="slide-1-left">
              <div
                className={`image-placeholder double-slit has-img ${
                  step >= 3 ? 'wipe-left' : 'hidden'
                }`}
              >
                <img
                  src="/img/slide1_double-slit.png"
                  alt="Double-slit interference pattern"
                  className="media-img"
                />
              </div>
            </div>
            <div className="slide-1-right">
              <div
                className={`image-placeholder order-book has-img ${
                  step >= 4 ? 'wipe-right' : 'hidden'
                }`}
              >
                <img
                  src="/img/slide1_orderbook.png"
                  alt="Limit order book depth snapshot"
                  className="media-img"
                />
              </div>
            </div>
          </div>

          <p
            className={`slide-subtitle ${
              step >= 2 ? 'fade-in-delayed' : 'hidden'
            }`}
          >
            A physics-first model of limit-order-book dynamics using quantum
            walks and open-system tools.
          </p>
        </div>
      );
    },
  },

  // NEW SLIDE 2 – Definition: Open vs Closed
  {
    id: 1.1,
    maxStep: 5,
    render(step) {
      return (
        <div className="slide-2-new">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              The Physics of Information: Open vs. Closed Systems
            </h1>
          </div>

          <div className="two-col">
            {/* Left: The Textbook View */}
            <div className={`col panel-card ${step >= 2 ? 'fade-in-up' : 'hidden'}`}>
              <h2 className="model-title teal">Closed System (Textbook)</h2>
              <div className="icon-card has-img" style={{height: '180px'}}>
                 {/* Placeholder for an atom or sealed box */}
                 <div style={{fontSize: '60px'}}>⚛️</div>
              </div>
              <ul className="assumption-list" style={{fontSize: '18px'}}>
                <li>Isolated from environment.</li>
                <li><strong>Unitary Evolution</strong> (Reversible).</li>
                <li>Schrödinger Eq: <span className="equation">iħ ∂ψ/∂t = Hψ</span></li>
                <li style={{color: '#ff5757'}}>Fail: Cannot describe a market.</li>
              </ul>
            </div>

            {/* Right: The Reality */}
            <div className={`col panel-card ${step >= 3 ? 'fade-in-up' : 'hidden'}`}>
              <h2 className="model-title cyan">Open System (Reality)</h2>
              <div className="icon-card has-img" style={{height: '180px'}}>
                 {/* Placeholder for a box with arrows in/out */}
                 <div style={{fontSize: '60px'}}>🌊 ↔️ 📦</div>
              </div>
              <ul className="assumption-list" style={{fontSize: '18px'}}>
                <li>Interacts with "Bath" (News/Liquidity).</li>
                <li><strong>Dissipative</strong> (Info is lost/gained).</li>
                <li>Master Eq: <strong>Lindblad / Kraus</strong>.</li>
                <li style={{color: '#2ae3ff'}}>Success: Matches noisy data.</li>
              </ul>
            </div>
          </div>
          
          <p className={`footline ${step >= 5 ? 'fade-in-delayed' : 'hidden'}`}>
             A stock market is a macroscopic Open Quantum System. It has memory, interference, and decay.
          </p>
        </div>
      );
    },
  },

  // NEW SLIDE 3 – History/Tools
  {
    id: 1.3,
    maxStep: 4,
    render(step) {
      return (
        <div className="slide-3-new">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Bridging the Gap: 1931 to 1971
            </h1>
            <p className={`slide-subtitle ${step >= 1 ? 'fade-in-delayed' : 'hidden'}`}>
              We use two historic tools to model this "Macroscopic Interference."
            </p>
          </div>

          <div className="two-col">
            {/* Tool 1: Schrodinger */}
            <div className={`col ${step >= 2 ? 'wipe-right' : 'hidden'}`}>
              <div className="model-card" style={{borderColor: '#ffc857'}}>
                <h2 className="model-title gold">1. Schrödinger Bridge (1931)</h2>
                <div className="chart-placeholder tiny has-img">
                   {/* Visualization of gas diffusion */}
                   <span style={{fontSize:'40px'}}>☁️ ↝ ☁️</span>
                </div>
                <p className="panel-caption">
                  "If I know where a gas started and ended, what is the <em>most likely path</em>?"
                </p>
                <p className="panel-caption" style={{color: '#fff'}}>
                  <strong>Use:</strong> Forcing the quantum walk to match real price history.
                </p>
              </div>
            </div>

            {/* Tool 2: Kraus */}
            <div className={`col ${step >= 3 ? 'wipe-left' : 'hidden'}`}>
              <div className="model-card" style={{borderColor: '#2ae3ff'}}>
                <h2 className="model-title cyan">2. Kraus Operators (1971)</h2>
                <div className="chart-placeholder tiny has-img">
                   {/* Visualization of measurement */}
                   <span style={{fontSize:'40px'}}>👁️ ➔ 📉</span>
                </div>
                <p className="panel-caption">
                  Generalized measurement. Not just "Up/Down," but "Partial Collapse."
                </p>
                <p className="panel-caption" style={{color: '#fff'}}>
                  <strong>Use:</strong> Modeling trades that don't fully drain liquidity.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  
  
  
  // SLIDE 2 – Classical Probability
  {
    id: 2,
    maxStep: 7,
    render(step) {
      return (
        <div className="slide-2">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              What Classical Probability Can Describe — And What It Cannot
            </h1>
            <p
              className={`slide-subtitle small ${
                step >= 1 ? 'fade-in-delayed' : 'hidden'
              }`}
            >
              The comfortable world of definite states and simple noise.
            </p>
          </div>

          <div className="two-col">
            <div
              className={`col assumptions-box ${
                step >= 2 ? 'fade-in-up' : 'hidden'
              }`}
            >
              <h2 className="box-title">Assumptions</h2>
              <ul className="assumption-list">
                <li className={step >= 3 ? 'appear' : 'hidden'}>
                  State is definite
                </li>
                <li className={step >= 4 ? 'appear' : 'hidden'}>
                  Observables commute
                </li>
                <li className={step >= 5 ? 'appear' : 'hidden'}>
                  Randomness = ignorance
                </li>
                <li className={step >= 6 ? 'appear' : 'hidden'}>
                  Markov memory
                </li>
                <li className={step >= 7 ? 'appear' : 'hidden'}>
                  Gaussian / local noise
                </li>
              </ul>
            </div>

            <div className="col random-walk-col">
              <div
                className={`chart-placeholder random-walk has-img ${
                  step >= 2 ? 'zoom-in' : 'hidden'
                }`}
              >
                <img
                  src="/img/slide2_random-walk.png"
                  alt="Classical random walk path"
                  className="media-img"
                />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 3 – Quantum Probability
  {
    id: 3,
    maxStep: 9,
    render(step) {
      return (
        <div className="slide-3">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              How Quantum Probability Extends Classical Probability
            </h1>
          </div>

          <div className="bands-container">
            {/* Band 1: Density matrix */}
            <div className={`band ${step >= 2 ? 'fade-in-up' : 'hidden'}`}>
              <div className="band-left">
                <div className="matrix-card">
                  <div className="matrix-title">ρ</div>
                  <div className="matrix-2x2">
                    <span>p₍up₎</span>
                    <span>α</span>
                    <span>α*</span>
                    <span>p₍down₎</span>
                  </div>
                </div>
              </div>
              <div className="band-right">
                <p className={step >= 3 ? 'appear' : 'hidden'}>
                  Diagonal: usual probabilities.
                  <br />
                  Off-diagonal: relationships between possibilities (coherence).
                </p>
              </div>
            </div>

            {/* Band 2: Measurement */}
            <div className={`band ${step >= 4 ? 'fade-in-up' : 'hidden'}`}>
              <div className="band-left">
                <div className="icon-card has-img">
                  <img
                    src="/img/slide3_wave-detector.png"
                    alt="Wave to detector measurement icon"
                    className="media-img"
                  />
                </div>
              </div>
              <div className="band-right">
                <p className={step >= 5 ? 'appear' : 'hidden'}>
                  Measurement updates the state, not just our knowledge.
                </p>
              </div>
            </div>

            {/* Band 3: Decoherence/CPTP */}
            <div className={`band ${step >= 6 ? 'fade-in-up' : 'hidden'}`}>
              <div className="band-left">
                <div className="matrix-compare">
                  <div className="matrix-card small">
                    Before
                    <div className="matrix-2x2 tiny">
                      <span>⋯</span>
                      <span>α</span>
                      <span>α*</span>
                      <span>⋯</span>
                    </div>
                  </div>
                  <div className="matrix-card small faded">
                    After
                    <div className="matrix-2x2 tiny">
                      <span>⋯</span>
                      <span>0</span>
                      <span>0</span>
                      <span>⋯</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="band-right">
                <div className={step >= 7 ? 'appear' : 'hidden'}>
                  <div className="equation">ρ′ = Σᵢ Kᵢ ρ Kᵢ†</div>
                  <p className={step >= 8 ? 'appear' : 'hidden'}>
                    General evolution including environment (CPTP map).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className={`footline ${step >= 9 ? 'fade-in-delayed' : 'hidden'}`}>
            These tools are used when classical probability is not expressive
            enough.
          </p>
        </div>
      );
    },
  },

  // SLIDE 4 – Mapping Open System ↔ Microstructure
  {
    id: 4,
    maxStep: 7,
    render(step) {
      const rows = [
        ['Environment', 'Order flow'],
        ['Decoherence', 'Liquidity shocks'],
        ['Measurement', 'Trades'],
        ['Non-commutativity', 'Path-dependent responses'],
        ['CPTP maps', 'General stochastic evolution'],
      ];
      return (
        <div className="slide-4">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Mapping Physical Ideas to the System I Study
            </h1>
          </div>

          <div
            className={`mapping-table ${step >= 2 ? 'fade-in-up' : 'hidden'}`}
          >
            <div className="mapping-header">
              <span className="mapping-col-header cyan">
                Open Quantum System
              </span>
              <span />
              <span className="mapping-col-header gold">
                Microstructure System
              </span>
            </div>

            <div className="mapping-rows">
              {rows.map((row, idx) => (
                <div
                  key={row[0]}
                  className={`mapping-row ${
                    step >= 3 + idx ? 'row-highlight' : 'row-muted'
                  }`}
                >
                  <span>{row[0]}</span>
                  <span>↔</span>
                  <span>{row[1]}</span>
                </div>
              ))}
            </div>
          </div>

          <p className={`footline ${step >= 7 ? 'fade-in-delayed' : 'hidden'}`}>
            We borrow the math, not the particles.
          </p>
        </div>
      );
    },
  },

  // SLIDE 5 – Data & Observables
  {
    id: 5,
    maxStep: 5,
    render(step) {
      return (
        <div className="slide-5">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              The Physical Data Source: L3 Order-Book Events
            </h1>
          </div>

          <p
            className={`slide-subtitle small ${
              step >= 1 ? 'fade-in-delayed' : 'hidden'
            }`}
          >
            AAPL &amp; SPY, L3 ITCH, 1ms resolution, full add/cancel/trade
            stream.
          </p>

          <div className="three-panel-row">
            <div className={`panel-card ${step >= 2 ? 'wipe-up' : 'hidden'}`}>
              <div className="chart-placeholder has-img">
                <img
                  src="/img/slide5_ofi_timeseries.png"
                  alt="OFI time series"
                  className="media-img"
                />
              </div>
              <p className="panel-caption">OFI: net buying vs selling.</p>
            </div>

            <div className={`panel-card ${step >= 3 ? 'wipe-up' : 'hidden'}`}>
              <div className="chart-placeholder has-img">
                <img
                  src="/img/slide5_qi_timeseries.png"
                  alt="Queue imbalance time series"
                  className="media-img"
                />
              </div>
              <p className="panel-caption">QI: depth asymmetry.</p>
            </div>

            <div className={`panel-card ${step >= 4 ? 'wipe-up' : 'hidden'}`}>
              <div className="chart-placeholder has-img">
                <img
                  src="/img/slide5_returns_timeseries.png"
                  alt="High-frequency returns"
                  className="media-img"
                />
              </div>
              <p className="panel-caption">High-frequency returns.</p>
            </div>
          </div>

          <p className={`footline ${step >= 5 ? 'fade-in-delayed' : 'hidden'}`}>
            These observables define the constraints the model must match.
          </p>
        </div>
      );
    },
  },

  // SLIDE 6 – Classical Models & Gap
  {
    id: 6,
    maxStep: 5,
    render(step) {
      return (
        <div className="slide-6">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              What Existing Models Do — And Why They Aren&apos;t Enough
            </h1>
          </div>

          <div className="three-panel-row equal">
            <div className={`model-card ${step >= 2 ? 'zoom-in' : 'hidden'}`}>
              <h2 className="model-title cyan">Hawkes (1971)</h2>
              <div className="chart-placeholder tiny has-img">
                <img
                  src="/img/slide6_hawkes_intensity.png"
                  alt="Hawkes process intensity"
                  className="media-img"
                />
              </div>
              <p className="panel-caption">Explains clustered arrivals.</p>
            </div>

            <div className={`model-card ${step >= 3 ? 'zoom-in' : 'hidden'}`}>
              <h2 className="model-title gold">GARCH / EGARCH (1982)</h2>
              <div className="chart-placeholder tiny has-img">
                <img
                  src="/img/slide6_garch_volatility.png"
                  alt="GARCH volatility clustering"
                  className="media-img"
                />
              </div>
              <p className="panel-caption">Explains volatility clustering.</p>
            </div>

            <div className={`model-card ${step >= 4 ? 'zoom-in' : 'hidden'}`}>
              <h2 className="model-title teal">Order-book ABMs</h2>
              <div className="chart-placeholder tiny has-img">
                <img
                  src="/img/slide6_abm_depth_profile.png"
                  alt="Order-book depth profile"
                  className="media-img"
                />
              </div>
              <p className="panel-caption">Explains depth &amp; book shape.</p>
            </div>
          </div>

          <p className={`footline ${step >= 5 ? 'fade-in-delayed' : 'hidden'}`}>
            Gap: no classical model jointly reproduces fat tails, volatility
            clustering, directional asymmetry, and post-shock resiliency.
          </p>
        </div>
      );
    },
  },

  // SLIDE 7 – Research Question
  {
    id: 7,
    maxStep: 1, // Reduced step count since we removed the footer
    render(step) {
      return (
        <div className="slide-7">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Research Question
            </h1>
          </div>

          <div className={`rq-callout ${step >= 1 ? 'zoom-in' : 'hidden'}`}>
            <p>
               Can a physics-grounded quantum walk,
              calibrated through a Schrödinger Bridge and driven by true entropy
              and measured resiliency, outperform classical stochastic models in
              replicating and executing real market dynamics?
            </p>
          </div>
          {/* Footer removed to reduce clutter */}
        </div>
      );
    },
  },

  // SLIDE 8 – DTQW Engine
  {
    id: 8,
    maxStep: 6,
    render(step) {
      return (
        <div className="slide-8">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              The Discrete-Time Quantum Walk as a Stochastic Engine
            </h1>
          </div>

          <div className="two-col">
            <div className="col dtqw-flow">
              <div className={`flow-node ${step >= 2 ? 'zoom-in' : 'hidden'}`}>
                Coin
              </div>
              <div
                className={`flow-arrow ${step >= 2 ? 'wipe-right' : 'hidden'}`}
              >
                →
              </div>
              <div className={`flow-node ${step >= 3 ? 'zoom-in' : 'hidden'}`}>
                Shift
              </div>
              <div
                className={`flow-arrow ${step >= 3 ? 'wipe-right' : 'hidden'}`}
              >
                →
              </div>
              <div className={`flow-node ${step >= 4 ? 'zoom-in' : 'hidden'}`}>
                Channels
              </div>
              <div
                className={`flow-arrow ${step >= 4 ? 'wipe-right' : 'hidden'}`}
              >
                →
              </div>
              <div className={`flow-node ${step >= 5 ? 'zoom-in' : 'hidden'}`}>
                Measurement
              </div>
            </div>

            <div className="col dtqw-equation-col">
              <div
                className={`equation-card ${step >= 6 ? 'type-in' : 'hidden'}`}
              >
                <div className="equation-main">
                  ρₜ₊₁ = Σᵢ Kᵢ S C ρₜ C† S† Kᵢ†
                </div>
                <p className="equation-caption">
                  One step = coin, shift, noise, possible observation.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 9 – Schrödinger Bridge
  {
    id: 9,
    maxStep: 6,
    render(step) {
      return (
        <div className="slide-9">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Using the Schrödinger Bridge to Match Reality
            </h1>
          </div>

          <div className="three-stage-row">
            <div
              className={`stage-card ${step >= 2 ? 'fade-in-up' : 'hidden'}`}
            >
              <h2>Prior Generator</h2>
              <p>DTQW or classical baseline.</p>
            </div>
            <div
              className={`stage-card sb ${step >= 3 ? 'fade-in-up' : 'hidden'}`}
            >
              <h2>SB Solver</h2>
              <p>Entropic OT over paths.</p>
            </div>
            <div
              className={`stage-card ${step >= 4 ? 'fade-in-up' : 'hidden'}`}
            >
              <h2>Calibrated Generator</h2>
              <p>Matches observed constraints.</p>
            </div>
          </div>

          <div
            className={`constraint-row ${
              step >= 5 ? 'fade-in-delayed' : 'hidden'
            }`}
          >
            <span>α-tails</span>
            <span>ACF(r²)</span>
            <span>P(up | OFI)</span>
            <span>Resiliency</span>
          </div>

          <p className={`footline ${step >= 6 ? 'fade-in-delayed' : 'hidden'}`}>
            Find the closest path distribution (in KL sense) that fits the real
            microstructure statistics.
          </p>
        </div>
      );
    },
  },

  // SLIDE 10 – Physical Experiments
  {
    id: 10,
    maxStep: 5,
    render(step) {
      const quadrants = [
        ['P1 — QRNG', 'Randomness', 'Zener noise, ADC.'],
        ['P2 — RC Ladder', 'Resiliency', 'Exponential decay τₑff.'],
        ['P3 — Latency Rig', 'Timing', 'RTT histograms & alpha half-life.'],
        ['P4 — Queue Emulator', 'Execution', 'Fill probabilities vs position.'],
      ];
      const images = [
        '/img/slide10_p1_qrng.png',
        '/img/slide10_p2_rc-ladder.png',
        '/img/slide10_p3_latency-rig.png',
        '/img/slide10_p4_queue-emulator.png',
      ];
      return (
        <div className="slide-10">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Physical Experiments That Anchor Model Components
            </h1>
          </div>

          <div className="quad-grid">
            {quadrants.map(([title, tag, desc], idx) => (
              <div
                key={title}
                className={`quad-card ${
                  step >= 2 + idx ? 'zoom-in' : 'hidden'
                }`}
              >
                <h2>{title}</h2>
                <div className="quad-tag">{tag}</div>
                <div className="image-placeholder has-img">
                  <img
                    src={images[idx]}
                    alt={`${title} setup`}
                    className="media-img"
                  />
                </div>
                <p className="panel-caption">{desc}</p>
              </div>
            ))}
          </div>

          <p className={`footline ${step >= 5 ? 'fade-in-delayed' : 'hidden'}`}>
            These experiments keep the model tied to measurable physical
            behavior.
          </p>
        </div>
      );
    },
  },

  // SLIDE 11 – Codebase as Instrument
  {
    id: 11,
    maxStep: 7,
    render(step) {
      const boxes = [
        ['Prologue / Globals / I/O', 'Lab conditions, config, seeds.'],
        ['Quantum Core Engine', 'Density matrices, Kraus ops, DTQW steps.'],
        ['SB Calibration', 'Sinkhorn, constraints, diagnostics.'],
        ['Baselines', 'Hawkes, GARCH, order-book ABMs.'],
        ['Execution Layer', 'AC/LQR/MPC, impact models.'],
        ['Tests & Benchmarks', 'CPTP checks, unit tests, smoke runs.'],
      ];
      return (
        <div className="slide-11">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              How the Codebase Mirrors a Physics Experiment
            </h1>
          </div>

          <div className="pipeline">
            <div
              className={`pipeline-line ${step >= 2 ? 'wipe-down' : 'hidden'}`}
            />
            {boxes.map(([title, desc], idx) => (
              <div
                key={title}
                className={`pipeline-box ${
                  step >= 2 + idx ? 'fade-in-up' : 'hidden'
                }`}
              >
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  

  // SLIDE 13 – Limitations, Risks, Future Work
  {
    id: 13,
    maxStep: 5,
    render(step) {
      return (
        <div className="slide-13">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Limitations, Risks, and Future Work
            </h1>
          </div>

          <div className="two-col">
            <div className="col">
              <ul className="limitations-list">
                <li className={step >= 1 ? 'fade-in' : 'hidden'}>
                  Matrix dimension growth at long horizons.
                </li>
                <li className={step >= 2 ? 'fade-in' : 'hidden'}>
                  Assumes relatively stable tick regime; halts/regime shifts are
                  hard.
                </li>
                <li className={step >= 3 ? 'fade-in' : 'hidden'}>
                  Illiquid assets can be numerically unstable and poorly
                  calibrated.
                </li>
                <li className={step >= 4 ? 'fade-in' : 'hidden'}>
                  Risk of overfitting &amp; misuse — mitigated with
                  out-of-sample tests, execution benchmarks, and framing as a
                  tool for stability, not exploitation.
                </li>
              </ul>
            </div>
            <div className="col">
              <div
                className={`chart-placeholder has-img ${
                  step >= 2 ? 'zoom-in' : 'hidden'
                }`}
              >
                <img
                  src="/img/slide13_risk_matrix-halt.png"
                  alt="Risk and limitations visual"
                  className="media-img"
                />
              </div>
            </div>
          </div>

          <p className={`footline ${step >= 5 ? 'fade-in-delayed' : 'hidden'}`}>
            Future work: rough-vol drivers, multi-asset coupling, and stress
            tests on crisis periods.
          </p>
        </div>
      );
    },
  },

  // REVISED SLIDE 14 – Implications / Physics Scale
  {
    id: 13.5,
    maxStep: 5,
    render(step) {
      return (
        <div className="slide-14-revised">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Filling the Gap in Mesoscopic Physics
            </h1>
          </div>

          <div className="three-panel-row" style={{alignItems: 'center'}}>
            
            {/* Micro */}
            <div className={`panel-card ${step >= 2 ? 'fade-in-up' : 'hidden'}`} style={{opacity: 0.6}}>
              <h2 className="model-title">Microscopic</h2>
              <div className="chart-placeholder tiny has-img">⚛️</div>
              <p className="panel-caption">Quantum Mechanics<br/>(Atoms, Photons)</p>
            </div>

            {/* The Arrow */}
            <div className={`flow-arrow ${step >= 3 ? 'wipe-right' : 'hidden'}`} style={{fontSize:'40px'}}>?</div>

            {/* MESO (The Gap) */}
            <div className={`panel-card ${step >= 3 ? 'zoom-in' : 'hidden'}`} style={{border: '2px solid #2ae3ff', transform: 'scale(1.1)'}}>
              <h2 className="model-title cyan">Mesoscopic</h2>
              <div className="chart-placeholder tiny has-img">📊</div>
              <p className="panel-caption" style={{color: '#fff'}}>
                <strong>Complex Information Systems</strong><br/>
                (Markets, Neural Nets, Flocks)
              </p>
            </div>

            {/* The Arrow */}
            <div className={`flow-arrow ${step >= 3 ? 'wipe-right' : 'hidden'}`} style={{fontSize:'40px'}}>→</div>

            {/* Macro */}
            <div className={`panel-card ${step >= 4 ? 'fade-in-up' : 'hidden'}`} style={{opacity: 0.6}}>
              <h2 className="model-title">Macroscopic</h2>
              <div className="chart-placeholder tiny has-img">🍎</div>
              <p className="panel-caption">Classical Mechanics<br/>(Newton's Cradle, Gravity)</p>
            </div>

          </div>

          <div className={`quote-box ${step >= 5 ? 'fade-in-up' : 'hidden'}`} style={{marginTop: '40px'}}>
            <p style={{fontSize: '20px'}}>
              "Regardless of Alpha, this project tests if Quantum Probability is the correct language for <strong>Macroscopic Complexity</strong>."
            </p>
          </div>
        </div>
      );
    },
  },
  

  // SLIDE 14 – Conclusion
  {
    id: 14,
    maxStep: 2,
    render(step) {
      return (
        <div className="slide-14">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              What This Says About Physics and Modeling
            </h1>
          </div>

          <div className={`quote-box ${step >= 1 ? 'zoom-in-slow' : 'hidden'}`}>
            <p>
              “Quantum probability is not a metaphor; it is the mathematically
              correct generalization of classical probability. This project
              tests whether that framework, combined with physical experiments,
              can better describe a real, complex system.”
            </p>
          </div>

          <p
            className={`signature ${step >= 2 ? 'fade-in-delayed' : 'hidden'}`}
          >
            Blake Bird — Quantum Walks Unveil the Physics Driving Market
            Microstructure
          </p>
        </div>
      );
    },
  },

  // SLIDE 15 – Timeline
  {
    id: 15,
    maxStep: 3,
    render(step) {
      return (
        <div className="slide-15">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Timeline: Draft → Stabilize → Integrate
            </h1>
          </div>

          <div className="three-panel-row equal">
            <div
              className={`panel-card ${step >= 1 ? 'fade-in-up' : 'hidden'}`}
            >
              <h2 className="model-title cyan">Draft (Jan–Feb)</h2>
              <ul className="timeline-list">
                <li>Core DTQW engine, metrics, RNG utilities.</li>
                <li>Initial SB calibration on toy data.</li>
                <li>P1 entropy + P2 RC ladder prototypes.</li>
              </ul>
            </div>
            <div
              className={`panel-card ${step >= 2 ? 'fade-in-up' : 'hidden'}`}
            >
              <h2 className="model-title gold">Stabilize (Feb–Mar)</h2>
              <ul className="timeline-list">
                <li>Baselines (Hawkes, GARCH, queue) hardened.</li>
                <li>SB diagnostics &amp; power analysis.</li>
                <li>P3 latency rig &amp; P4 queue emulator online.</li>
              </ul>
            </div>
            <div
              className={`panel-card ${step >= 3 ? 'fade-in-up' : 'hidden'}`}
            >
              <h2 className="model-title teal">Integrate (Mar–Apr)</h2>
              <ul className="timeline-list">
                <li>Head-to-head runs across assets/days.</li>
                <li>Aggregation, figures, and poster build.</li>
                <li>Writing: methods, results, and discussion.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 16 – Resources & Budget
  {
    id: 16,
    maxStep: 3,
    render(step) {
      return (
        <div className="slide-16">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Resources, Budget, and Risk Management
            </h1>
          </div>

          <div className="two-col">
            <div className="col">
              <h2 className="model-title cyan">Hardware (P1–P4)</h2>
              <ul className="timeline-list">
                <li>USB audio interface, breadboards, headers.</li>
                <li>Zener diodes / photodiodes for entropy source.</li>
                <li>Resistor &amp; capacitor assortments for RC ladder.</li>
                <li>Arduino / Raspberry Pi, LEDs, small OLED.</li>
                <li>NICs / GPS pulse for cleaner timing (optional).</li>
              </ul>
            </div>
            <div className="col">
              <h2 className="model-title gold">Budget &amp; Data</h2>
              <ul className="timeline-list">
                <li>
                  Estimated new hardware: <strong>$439–459</strong>.
                </li>
                <li>
                  With shared lab hardware: <strong>$140–200</strong>.
                </li>
                <li>Market data: LOB samples / crypto history (~$0–40).</li>
                <li>
                  Risk management: reuse existing lab PCs, scope, and tooling;
                  keep experiments electrically isolated and logged.
                </li>
              </ul>
            </div>
          </div>

          <p className={`footline ${step >= 3 ? 'fade-in-delayed' : 'hidden'}`}>
            Design goal: high physics fidelity with a student-scale budget.
          </p>
        </div>
      );
    },
  },

  // SLIDE 17 – References
  {
    id: 17,
    maxStep: 2,
    render(step) {
      return (
        <div className="slide-17">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Key References
            </h1>
          </div>

          <ul
            className={`references-list ${step >= 1 ? 'fade-in-up' : 'hidden'}`}
          >
            <li>
              Bouchaud, J.-P., Farmer, J. D., &amp; Lillo, F.{' '}
              <em>How Markets Slowly Digest Information</em> (microstructure &
              stylized facts).
            </li>
            <li>
              Venegas-Andraca, S. E.{' '}
              <em>Quantum Walks: A Comprehensive Review</em> (discrete-time
              quantum walks as stochastic engines).
            </li>
            <li>
              Léonard, C. <em>A Survey of the Schrödinger Problem</em> (entropic
              optimal transport / Schrödinger Bridge).
            </li>
            <li>
              Bacry, E., Delattre, S., Hoffmann, M., &amp; Muzy, J.-F.{' '}
              <em>Hawkes Processes in Finance</em> (self-exciting order flow).
            </li>
            <li>
              Huang, Q., Lehalle, C.-A., &amp; Rosenbaum, M.{' '}
              <em>How to Model a Limit-Order Book</em> (queue-reactive
              intensities).
            </li>
          </ul>

          <p className={`footline ${step >= 2 ? 'fade-in-delayed' : 'hidden'}`}>
            Full bibliography in the written report; this list shows the main
            physics and microstructure pillars.
          </p>
        </div>
      );
    },
  },

  // SLIDE 18 – Questions
  {
    id: 18,
    maxStep: 1,
    render(step) {
      return (
        <div className="slide-18">
          <div className="slide-title-block">
            <h1 className={`slide-title ${step >= 1 ? 'fade-in' : 'hidden'}`}>
              Questions &amp; Discussion
            </h1>
          </div>

          <div
            className={`questions-card ${
              step >= 1 ? 'zoom-in-slow' : 'hidden'
            }`}
          >
            <h2>Thank you.</h2>
            <p>
              Where does the physics, the code, or the experiments still feel
              unclear?
            </p>
          </div>
        </div>
      );
    },
  },
];
