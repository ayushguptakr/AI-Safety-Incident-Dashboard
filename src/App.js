import { useState } from 'react';
import { initialIncidents } from './mockData';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import './styles/App.css';
import { FaReact, FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaSearch, FaChevronDown } from 'react-icons/fa';

function App() {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [language, setLanguage] = useState('English');
  const [incidents, setIncidents] = useState(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showForm, setShowForm] = useState(false);

  
  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowLanguageMenu(false);
  };

  const addIncident = (newIncident) => {
    setIncidents([...incidents, {
      ...newIncident,
      id: incidents.length + 1,
      reported_at: new Date().toISOString()
    }]);
    setShowForm(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <span className="app-icon"><FaReact /></span>
          <h1 className='nav-title'>
            <a href='#' className='nav-home'>
            AISiD </a></h1>
        </div>
      
        
        <div className="nav-right">
          <div className="language-dropdown">
            <button 
              className="language-toggle" 
              onClick={toggleLanguageMenu}
            >
              {language} <FaChevronDown />
            </button>
            {showLanguageMenu && (
              <div className="language-menu">
                <div className="language-option" onClick={() => handleLanguageChange('English')}>English</div>
                <div className="language-option" onClick={() => handleLanguageChange('Spanish')}>Español</div>
                <div className="language-option" onClick={() => handleLanguageChange('French')}>Français</div>
              </div>
            )}
          </div>
          
          <div className="social-icons-container">
            <div className="social-icons">
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaGithub /></a>
            </div>
            
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>
        </div>
      </nav>

      <div className="app">
        <div className="app-header">
          <h1>AI Safety Incident Dashboard</h1>
        </div>
        
        <div className="report-button-container">
          <div className="header-quote">
            <p className='typing-effect'>"Safety is not an option — it's a responsibility."</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="toggle-form-btn"
          >
            {showForm ? 'Cancel' : 'Report New Incident'}
          </button>
        </div>
        
        {showForm && <IncidentForm addIncident={addIncident} />}
        
        <IncidentList 
          incidents={incidents}
          severityFilter={severityFilter}
          sortOrder={sortOrder}
          setSeverityFilter={setSeverityFilter}
          setSortOrder={setSortOrder}
        />
      </div>
    </>
  );
}

export default App;