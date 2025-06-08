# Resotran-Astoria

# 1. Kratki Opis
Projekt predstavlja web aplikaciju za restoran Astoria koja omogućava korisnicima pregled menija, rezervacije i interakciju sa restoranskim sadržajem.

# 2. Korištene Tehnologije
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

# 3. Struktura Projekta
    
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
- `db.json` - Backend simulacija baze podataka
- `src/components/` - Reusable komponente
- `src/pages/` - Stranice aplikacije
- `src/assets/` - Slike i drugi statični resursi

 # 4. Funkcionalnosti

Prikaz glavne stranice s pozadinskom slikom i pozivom na akciju
Navigacijski meni s prilagođenim izgledom i hamburger menijem za mobilne uređaje
Kontakt forma
Mogućnost rezervacije stola
Samo prijavljeni korisnici mogu naručiti hranu
Gosti imaju samo pregled menija i da kontaktiraju
Administrator vidi admin panel koji može da vidi narudžbe i kontakt poruke

 # 5. Dizajn
 
 5.1 Arhitektura
- Komponentno-bazirana arhitektura
- Modularni pristup razvoju
- Odvajanje logike i prezentacije

 5.2 UI/UX principi
- Responsive design
- Intuitivna navigacija
- Konzistentan vizualni identitet

# 6. Korisničke uloge

 6.1 Posjetitelj
- Pregled menija
- Pregled informacija o restoranu
- Mogućnost rezervacije

 6.2 Administrator 
- Upravljanje narudžbama (Odobravanje narudžbih)
- Pregled naružbih
- Pregled Kontakt poruka 

 # 7. Pokretanje projekta
Za pokretanje projekta potrebno je izvršiti sljedeće komande:

Instalacija
1. npm install
2. Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

Pokretanje aplikacije:
npm start

Pokretanje JSON servera (u novom terminalu):

1. npm install -g json server
2. npm install json-server --save-dev
3. json-server --watch db.json --port 5002


