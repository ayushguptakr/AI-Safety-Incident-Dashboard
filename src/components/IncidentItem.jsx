import { useState } from 'react';


const IncidentItem = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className={`incident-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="incident-summary">
        <h3>{incident.title}</h3>
        <div className="incident-meta">
          <span className={`severity-badge ${incident.severity.toLowerCase()}`}>
            {incident.severity}
          </span>
          <span className="reported-date">
            {new Date(incident.reported_at).toLocaleDateString()}
          </span>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="view-details-btn"
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      
      {isExpanded && (
        <div className="incident-details">
          <p>{incident.description}</p>
        </div>
      )}
    </li>
  );
};

export default IncidentItem;