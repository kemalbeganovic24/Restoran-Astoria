import React, {useState} from 'react';

function RegisterForma({onRegister}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ime, setIme] = useState('');

    const handleSubmit= async (e) => {
        const noviKorisnik =    {
            ime,
            email,
            password,
            rola : "gost"
        }
        try{
            const res = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noviKorisnik)
            });
            if(res.ok){
                setIme('');
                setEmail('');
                setPassword('');
            }else{
                alert('Greska prilikom registracije');
            }
        }catch(error){
            alert('Server nije dostupan!');
        }
        onRegister(noviKorisnik);
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Registracija</h2>
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