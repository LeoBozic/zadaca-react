import React, { useState } from "react";

function DodajKorisnika({ submit }) {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ime && prezime) {
      submit({ ime, prezime });
      setIme("");
      setPrezime("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Ime: </label>
        <input
          type="text"
          value={ime}
          onChange={(event) => setIme(event.target.value)}
        />
      </p>
      <p>
        <label>Prezime: </label>
        <input
          type="text"
          value={prezime}
          onChange={(event) => setPrezime(event.target.value)}
        />
      </p>
      <button type="submit">Dodaj korisnika</button>
    </form>
  );
}

export default DodajKorisnika;
