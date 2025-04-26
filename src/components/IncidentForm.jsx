import { useState } from 'react';

const IncidentForm = ({ addIncident, showForm }) => {  // Make sure to destructure showForm from props
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Medium');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    
    if (!title.trim()) validationErrors.title = 'Title is required';
    if (!description.trim()) validationErrors.description = 'Description is required';
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addIncident({ title, description, severity });
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className={`incident-form ${showForm ? 'visible' : ''}`}>
      <h2>Report New Incident</h2>
      
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>
      
      <div className="form-group">
        <label>Severity:</label>
        <div className="severity-options">
          {['Low', 'Medium', 'High'].map(level => (
            <label key={level}>
              <input
                type="radio"
                name="severity"
                value={level}
                checked={severity === level}
                onChange={() => setSeverity(level)}
              />
              {level}
            </label>
          ))}
        </div>
      </div>
      
      <button type="submit" className="submit-btn">Submit Incident</button>
    </form>
  );
};

export default IncidentForm;