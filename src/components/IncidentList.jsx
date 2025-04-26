import IncidentItem from './IncidentItem';
import FilterSortControls from './FilterSortControls';
import '../styles/App.css';

const IncidentList = ({ 
  incidents, 
  severityFilter, 
  sortOrder, 
  setSeverityFilter, 
  setSortOrder 
}) => {
  const filteredIncidents = incidents.filter(incident => 
    severityFilter === 'All' || incident.severity === severityFilter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="incident-list-container">
      <div className="controls-section">
        <FilterSortControls 
          severityFilter={severityFilter}
          sortOrder={sortOrder}
          setSeverityFilter={setSeverityFilter}
          setSortOrder={setSortOrder}
        />
      </div>
      
      <div className="incidents-section">
        {sortedIncidents.length > 0 ? (
          <ul className="incidents-grid">
            {sortedIncidents.map(incident => (
              <IncidentItem key={incident.id} incident={incident} />
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📊</div>
            <h3>No incidents found</h3>
            <p>Try adjusting your filters or report a new incident</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncidentList;