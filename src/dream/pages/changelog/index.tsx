import React from 'react';
import { changelog } from '../../content/changelog';
import CardDream from '../../components/CardDream';

const Changelog: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Changelog</h1>
      <div style={{ marginTop: 12 }}>
        {changelog.versions.map(v => (
          <CardDream key={v.version} style={{ marginBottom: 12 }}>
            <h3>{v.version}</h3>
            <ul style={{ marginTop: 8 }}>
              {v.items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </CardDream>
        ))}
        <CardDream>
          <h3>Backlog</h3>
          <ul style={{ marginTop: 8 }}>
            {changelog.backlog.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </CardDream>
      </div>
    </div>
  );
};

export default Changelog;
