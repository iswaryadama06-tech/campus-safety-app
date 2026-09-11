import { useState } from "react";

function ReportIncident() {
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.type || !formData.location || !formData.description) {
      setError("Please fill in all the fields.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    setTimeout(() => {
      const oldReports =
        JSON.parse(localStorage.getItem("campusReports")) || [];

      const newReport = {
        id: Date.now(),
        type: formData.type,
        location: formData.location,
        description: formData.description,
        status: "Reported",
        date: new Date().toLocaleString(),
      };

      localStorage.setItem(
        "campusReports",
        JSON.stringify([...oldReports, newReport])
      );

      setLoading(false);
      setSuccess("Incident reported successfully!");

      setFormData({
        type: "",
        location: "",
        description: "",
      });
    }, 1000);
  };

  return (
    <main className="report-page">
      <div className="report-container">

        <div className="report-header">
          <p className="small-text">CAMPUS SAFETY</p>

          <h1>Report an Incident</h1>

          <p>
            Tell us about an incident so the campus safety team
            can respond quickly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="report-form">

          <div className="form-group">
            <label>Incident Type</label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Select incident type</option>
              <option value="Medical Emergency">
                Medical Emergency
              </option>
              <option value="Fire">Fire</option>
              <option value="Theft">Theft</option>
              <option value="Harassment">Harassment</option>
              <option value="Unsafe Area">Unsafe Area</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Example: Library Block"
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what happened..."
              maxLength="400"
              rows="6"
            />

            <div className="character-count">
              {formData.description.length}/400
            </div>
          </div>

          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          {success && (
            <div className="success-message">
              ✓ {success}
            </div>
          )}

          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Report"}
          </button>

        </form>
      </div>
    </main>
  );
}

export default ReportIncident;