# Resotran-Astoria

1. Kratki Opis
Projekt predstavlja web aplikaciju za restoran Astoria koja omogućava korisnicima pregled menija, rezervacije i interakciju sa restoranskim sadržajem.

2. Korištene Tehnologije
- Frontend Framework: React.js 18.2.0
- Routing: React Router DOM 7.6.1
- Backend Simulacija: JSON Server 1.0.0-beta.3
- Testing biblioteke:
    - @testing-library/react 16.3.0
    - @testing-library/dom 10.4.0
    - @testing-library/jest-dom 6.6.3
    - @testing-library/user-event 13.5.0
    - Package Manager: npm
    - Ostale važne biblioteke:
    - react-dom 18.2.0
    - web-vitals 2.1.4

 3. Struktura Projekta
    
 3.1 Glavni direktoriji

/
├── Restoran-Astoria-main/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.js
│   ├── public/
│   └── db.json

 3.2 Ključni fajlovi
- `src/App.js` - Glavni React komponent
- `src/index.js` - Entry point aplikacije
- `src/data.js` - Fajl sa podacima
- `db.json` - Backend simulacija baze podataka
- `src/components/` - Reusable komponente
- `src/pages/` - Stranice aplikacije
- `src/assets/` - Slike i drugi statični resursi

 4. Funkcionalnosti

 4.1 Osnovne funkcionalnosti
- Pregled menija restorana
- Sistem rezervacija
- Pregled informacija o restoranu
- Responsive dizajn za različite uređaje

 4.2 Tehnička implementacija
- Single Page Application (SPA) arhitektura
- Routing sistem za navigaciju
- Simulirana backend integracija preko JSON Servera
- Testiranje komponenti

 5. Dizajn
 5.1 Arhitektura
- Komponentno-bazirana arhitektura
- Modularni pristup razvoju
- Odvajanje logike i prezentacije

 5.2 UI/UX principi
- Responsive design
- Intuitivna navigacija
- Konzistentan vizualni identitet

 6. Korisničke uloge
 6.1 Posjetitelj
- Pregled menija
- Pregled informacija o restoranu
- Mogućnost rezervacije

 6.2 Administrator (ako postoji)
- Upravljanje rezervacijama
- Ažuriranje sadržaja

 7. Pokretanje projekta
Za pokretanje projekta potrebno je izvršiti sljedeće komande:
 bash
# Instalacija zavisnosti
npm install

# Pokretanje aplikacije
npm start

# Pokretanje JSON servera (u novom terminalu)
npm run server

## 8. Testiranje
Za pokretanje testova:
 bash
npm test

