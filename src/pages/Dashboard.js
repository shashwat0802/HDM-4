import React, { useState } from 'react';
import ClimateData from '../components/ClimateData';

export default function Dashboard() {
  return (
    <div style={{ height: '90vh' }}>
      <ClimateData />
    </div>
  );
}
