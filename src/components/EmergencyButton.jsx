function EmergencyButton() {
  const handleEmergency = () => {
    const confirmEmergency = window.confirm(
      "Are you sure you want to send an emergency alert?"
    );

    if (confirmEmergency) {
      alert("Emergency alert sent successfully!");
    }
  };

  return (
    <section className="emergency-section">
      <button
        className="emergency-button"
        onClick={handleEmergency}
      >
        <span className="sos-icon">🚨</span>

        <span className="sos-title">
          EMERGENCY SOS
        </span>

        <span className="sos-text">
          Get help immediately
        </span>
      </button>
    </section>
  );
}

export default EmergencyButton;