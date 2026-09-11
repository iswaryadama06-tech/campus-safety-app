import EmergencyButton from "../components/EmergencyButton";
import QuickAction from "../components/QuickAction";

function Home() {
  return (
    <main className="home">
      <section className="welcome">
        <p className="small-text">CAMPUS SAFETY</p>
        <h1>Your safety matters.</h1>
        <p>
          Quickly access emergency help and report incidents
          around your campus.
        </p>
      </section>

      <EmergencyButton />

      <section className="quick-section">
        <h2>Quick Actions</h2>

        <div className="quick-grid">
          <QuickAction icon="🏥" title="Medical" />
          <QuickAction icon="👮" title="Security" />
          <QuickAction icon="🔥" title="Fire" />
          <QuickAction icon="📞" title="Emergency 112" />
        </div>
      </section>
    </main>
  );
}

export default Home;