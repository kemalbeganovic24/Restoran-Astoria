import React from 'react';
import '../assets/styles/welcome.css'

function Welcome() {
    const korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));

    return (
        <div style={{ padding: "20px" }} className="content1">
            <h2>Dobrodošao, {korisnik?.ime || "korisniče"}!</h2>
            <p>Uspješno ste prijavljeni kao {korisnik?.role}</p>
        </div>
    );
}

export default Welcome;