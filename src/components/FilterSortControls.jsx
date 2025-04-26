import React from 'react';

const FilterSortControls = ({ 
    severityFilter, 
    sortOrder, 
    setSeverityFilter, 
    setSortOrder 
  }) => {
    return (
      <div className="filter-sort-container">
        <div className="filter-group">
          <label htmlFor="severity-filter">Filter by Severity:</label>
          <select
            id="severity-filter"
            className="filter-select"
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
          >
            <option value="All">All Severities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        
        <div className="sort-group">
          <label htmlFor="sort-order">Sort by Date:</label>
          <select
            id="sort-order"
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default FilterSortControls;