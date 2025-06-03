import React, {useState} from 'react';

function RegisterForma({onRegister}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ime, setIme] = useState('');

    const handleSubmit= async (e) => {

        e.preventDefault();

        const noviKorisnik = {
            ime,
            email,
            password,
            role: "gost"
        };

        try {
            const res = await fetch('http://localhost:5002/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noviKorisnik)
            });

            if (res.ok) {
                const upisanKorisnik = await res.json();
                setIme('');
                setEmail('');
                setPassword('');
                onRegister(upisanKorisnik);
            } else {
                alert('Greška prilikom registracije');
            }
        } catch (error) {
            alert('Server nije dostupan!');
        }
    };

    return(
        <form onSubmit={handleSubmit}>

            <label>Ime:</label>
            <input type='text' value={ime} onChange={(e) => setIme(e.target.value)}
                   required
            />
            <label>Email:</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}
                   required
            />
            <label>Lozinka:</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                   required
            />
            <button type='submit'>Registruj se</button>
        </form>
    )
}
export default RegisterForma;