function EmergencyContacts() {
  const contacts = [
    {
      name: "Campus Security",
      number: "9876543210",
      icon: "👮",
    },
    {
      name: "Campus Medical",
      number: "9876543211",
      icon: "🏥",
    },
    {
      name: "Fire Department",
      number: "101",
      icon: "🔥",
    },
    {
      name: "Emergency Services",
      number: "112",
      icon: "🚨",
    },
  ];

  return (
    <main className="emergency-page">
      <div className="emergency-container">

        <div className="emergency-header">
          <p className="small-text">CAMPUS SAFETY</p>
          <h1>Emergency Contacts</h1>
          <p>
            Quickly contact the right emergency service.
          </p>
        </div>

        <div className="contacts-list">
          {contacts.map((contact) => (
            <div className="contact-card" key={contact.name}>

              <div className="contact-icon">
                {contact.icon}
              </div>

              <div className="contact-info">
                <h2>{contact.name}</h2>
                <p>{contact.number}</p>
              </div>

              <a
                href={`tel:${contact.number}`}
                className="call-button"
              >
                📞 Call
              </a>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default EmergencyContacts;