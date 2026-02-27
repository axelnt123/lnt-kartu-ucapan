import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h1>Kartu Ucapan</h1>

        <label>Masukkan Nama:</label>
        <input
          type="text"
          placeholder="Masukkan nama..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {name && (
          <div className="greeting-card">
            <h2>Halo, {name}!</h2>
            <p>Selamat datang di aplikasi React pertamaku.</p>
            <p>Semoga harimu menyenangkan!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
