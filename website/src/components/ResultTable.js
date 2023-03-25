import React from 'react';
import '../styles/ResultTable.css';

function ResultTable({ results }) {
  return (
    <div className="ResultTable">
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Fire Damage</th>
            <th>Torn</th>
            <th>Mold</th>
            <th>Crease/Fold</th>
            <th>Insects Damage</th>
            <th>Gnawed</th>
            <th>Water Damage</th>
            <th>Spots</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.filename}</td>
              <td>{result.fire_damage}</td>
              <td>{result.torn}</td>
              <td>{result.mold}</td>
              <td>{result.crease_fold}</td>
              <td>{result.insects_damage}</td>
              <td>{result.gnawed}</td>
              <td>{result.water_damage}</td>
              <td>{result.spots}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;

