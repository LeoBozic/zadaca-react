import React, { useContext } from "react";
import { KorisniciContext } from "../App";

function BrojKorisnika() {
  const brojKorisnika = useContext(KorisniciContext);
  return <h3>Trenutni broj korisnika je: {brojKorisnika}</h3>;
}

export default BrojKorisnika;
