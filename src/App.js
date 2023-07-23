import { createContext, useState } from "react";
import { BrojKorisnika, DodajKorisnika, PrikazKorisnika } from "./Components";
export const KorisniciContext = createContext(3);

function App() {
  const [korisnici, setKorisnici] = useState([
    { id: 1, ime: "Pero", prezime: "Perić" },
    { id: 2, ime: "Marko", prezime: "Marković" },
    { id: 3, ime: "Ivan", prezime: "Ivanović" },
  ]);

  const dodavanjeKorisnika = ({ ime, prezime }) => {
    const noviKorisnik = [
      ...korisnici,
      { id: korisnici.length + 1, ime: ime, prezime: prezime },
    ];
    setKorisnici(noviKorisnik);
  };

  return (
    <div>
      <KorisniciContext.Provider value={korisnici.length}>
        <BrojKorisnika />
      </KorisniciContext.Provider>
      <ul>
        {korisnici.map((korisnik) => (
          <li key={korisnik.id}>
            <PrikazKorisnika ime={korisnik.ime} prezime={korisnik.prezime} />
          </li>
        ))}
      </ul>
      <DodajKorisnika submit={dodavanjeKorisnika} />
    </div>
  );
}

export default App;
