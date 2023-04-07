import React from 'react';
import Sidebar from './Sidebar';

export default function ClimateData() {
  return (
    <div>
      <Sidebar />
      <div
        className="container d-flex align-items-center justify-content-center flex-column"
        style={{ height: '100%' }}
      >
        <h1>Climate Data</h1>
        <table class="table table-hover table-bordered table-dark">
          <thead>
            <tr>
              <th>Options</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>North India Plane</td>
            </tr>
            <tr>
              <td>Moisture Clarification</td>
              <td>Sub Humid</td>
            </tr>
            <tr>
              <td>Moisture Index</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Duration of dry season</td>
              <td>0.5 (as a fraction of year)</td>
            </tr>
            <tr>
              <td>Mean Monthly precipitation</td>
              <td>100 mm</td>
            </tr>
            <tr>
              <td>Temperature Classisfication</td>
              <td>Subtropical - hot</td>
            </tr>
            <tr>
              <td>Mean Temperature</td>
              <td>30&deg;C.</td>
            </tr>
            <tr>
              <td>Average Temeparture Range</td>
              <td>12&deg;C.</td>
            </tr>
            <tr>
              <td>Days T{'>'}32&deg;C.</td>
              <td>120 Days</td>
            </tr>
            <tr>
              <td>Freeze Index</td>
              <td>0 C-days</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
