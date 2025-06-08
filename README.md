# Resotran-Astoria

# 1. Kratki Opis
Projekt predstavlja web aplikaciju za restoran Astoria koja omogućava korisnicima pregled menija, rezervacije i interakciju sa restoranskim sadržajem.

# 2. Korištene Tehnologije
Frontend: React.js
Routing: React Router
Stilizacija: CSS (custom stilovi)
Fontovi: Google Fonts (Dancing Script, Arial)
Ikonice i slike: FontAwesome, PNG/JPG slike
Deployment (opcionalno): GitHub 


# 3. Struktura Projekta
    
 3.1 Glavni direktoriji

root/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       ├── header.css
│   │       ├── home.css
│   │       └── contact.css
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Meni.js
│   │   ├── Order.js
│   │   └── Admin.js
│   ├── App.js
│   └── index.js


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

 6.2. Administrator 
- Upravljanje narudžbama (Odobravanje narudžbih)
- Pregled naružbih
- Pregled Kontakt poruka 

# 7. Dizajn:
Boje:

#fca311 (narančasta – primarna)
#000000 i #ffffff (kontrast)
Tamni overlay (rgba(0, 0, 0, 0.5)) na hero slici

Fontovi:

Dancing Script (naslovi, dekoracija)
Arial, Helvetica, sans-serif (tekst)

# 8. Uloge korisnika
Uloga	Dozvole
Gost - Može pregledati sadržaj, napraviti rezervaciju i naručiti
Admin - Ima pristup admin panelu i može upravljati sadržajem

# 9. Kratki opis doprinosa članova tima
Ime člana	Doprinos

Ramo Kozlić	- Frontend dizajn i Meni,
Emir Đelilbašić	- Routing, Diazjn, Slider,
Kemal Beganović	Admin panel, funkcionalnost

Svi	Testiranje i zajednička dorada dizajna

 # . Pokretanje projekta
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
4. (Ukoliko dođe do errora u termnalu, ukucati komandu cd naziv projekta)

# Snimci ekrana radne apliakcije
![Početna stranica](./screenshots/pocetna.png)
![Početna stranica1](./screenshots/pocetna1.png)
![Početna stranica2](./screenshots/pocetna2.png)

![AboutUs](./screenshots/onama.png)
![AboutUs](./screenshots/onama1.png)

![Contact](./screenshots/kontaktforma.png)

![Meni](./screenshots/meni.png)
![MeniPiletina](./screenshots/menipiletina.png)
![MeniPalacinke](./screenshots/menipalacinke.png)
![MeniPizza](./screenshots/menipizza.png)
![MeniTjestenina](./screenshots/menitjestenina.png)
![MeniPiće](./screenshots/menipice.png)

![Login](./screenshots/prijava.png)
![Register](./screenshots/registracija.png)

![WelcomeUser](./screenshots/welcomegost.png)
![OrderUser](./screenshots/naruci.png)
![OrderUser](./screenshots/naruci1.png)

![WelcomeAdmin](./screenshots/welcomeadmin.png)
![AdminPanel](./screenshots/adminnarudzbe.png)
![AdminKontakt](./screenshots/adminporuke.png)

![PaletaBoja](./screenshots/paletaboja.png)

