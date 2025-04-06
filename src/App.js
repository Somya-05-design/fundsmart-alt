import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>FundSmart</h1>
      </header>
      
      <div className="dashboard">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li>Investments</li>
            <li>AI Recommendations</li>
            <li>Risk Analysis</li>
            <li>Investment Goals</li>
            <li>Community</li>
            <li>Global Markets</li>
            <li>Transactions</li>
            <li>Analytics</li>
            <li>Wallets</li>
          </ul>
        </div>
        
        <div className="main-content">
          <div className="stats-container">
            <StatCard 
              title="Total Assets" 
              value="$128,432.28" 
              change="+3.2%" 
              note="Updated just now" 
            />
            <StatCard 
              title="Monthly Return" 
              value="$2,845.36" 
              change="+4.7%" 
              note="Compared to last month" 
            />
            <StatCard 
              title="Annual Return" 
              value="12.4%" 
              change="+2.3%" 
              note="Compared to market average" 
            />
            <StatCard 
              title="Next Dividend" 
              value="$345.92" 
              note="Expected on Dec 15" 
            />
          </div>
          
          <div className="portfolio-section">
            <div className="portfolio-performance">
              <h3>Portfolio Performance</h3>
              <div className="performance-value">
                <span>$13,402.03</span>
                <span className="positive-change">+32.36% 3M change</span>
              </div>
              <div className="performance-chart">
                {/* This would be replaced with an actual chart component */}
                <div className="chart-placeholder">
                  <div className="chart-line" style={{ height: '80%' }}></div>
                  <div className="chart-line" style={{ height: '70%' }}></div>
                  <div className="chart-line" style={{ height: '60%' }}></div>
                  <div className="chart-line" style={{ height: '50%' }}></div>
                </div>
                <div className="chart-labels">
                  <span>$12,000</span>
                  <span>$11,500</span>
                  <span>$11,000</span>
                  <span>$10,500</span>
                </div>
              </div>
              <div className="time-filter">
                <span>3M</span>
                <span>▼</span>
                <span>▼</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="portfolio-allocation">
              <h3>Portfolio Allocation</h3>
              <p>Current asset distribution</p>
              {/* This would be replaced with an actual allocation chart */}
              <div className="allocation-chart-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, note }) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <div className="stat-value">{value}</div>
      {change && <div className="stat-change">{change}</div>}
      <div className="stat-note">{note}</div>
    </div>
  );
}

export default App;