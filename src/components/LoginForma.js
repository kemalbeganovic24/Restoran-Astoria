import React, {useState} from 'react';
import '../assets/styles/stilovi.css'
import '../assets/styles/login.css'

function LoginForma({ onLogin }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5002/users?email=${email}&password=${password}`);
            const podaci = await res.json();
            if(podaci.length > 0){
                const korisnik = podaci[0];
                localStorage.setItem('ulogovaniKorisnik', JSON.stringify(korisnik));
                onLogin(korisnik);
            }else{
                alert('Pogresan email ili lozinka');
            }
        }catch(error) {
           alert('Server nije dostupan!');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type='email'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
            />
            <label>Lozinka:</label>
            <input type='password'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   required
            />
            <button type='submit' >Prijavi se</button>
        </form>
    );
}

export default LoginForma;
