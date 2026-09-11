import { useEffect, useState } from "react";

function History() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const savedReports =
      JSON.parse(localStorage.getItem("campusReports")) || [];

    setReports(savedReports);
  }, []);

  return (
    <main className="history-page">
      <div className="history-container">

        <div className="history-header">
          <p className="small-text">CAMPUS SAFETY</p>
          <h1>Incident History</h1>
          <p>
            View the incidents you have reported.
          </p>
        </div>

        {reports.length === 0 ? (
          <div className="empty-history">
            <div className="empty-icon">📋</div>
            <h2>No incidents reported yet</h2>
            <p>
              Your submitted reports will appear here.
            </p>
          </div>
        ) : (
          <div className="report-list">
            {reports.map((report) => (
              <div className="incident-card" key={report.id}>

                <div className="incident-top">
                  <h2>{report.type}</h2>

                  <span className="status">
                    {report.status}
                  </span>
                </div>

                <p>
                  📍 <strong>Location:</strong>{" "}
                  {report.location}
                </p>

                <p>
                  {report.description}
                </p>

                <small>
                  Reported: {report.date}
                </small>

              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}

export default History;
