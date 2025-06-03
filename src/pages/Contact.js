import React, {useState} from 'react';
import '../assets/styles/contact.css';

function ContactForm(){
    const [formData,setFormData] = useState({
        name:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    })
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors={};
        if(!formData.name) newErrors.name = 'Unesite ime!';
        if (!formData.lastName) newErrors.lastName = 'Unesite prezime!';
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Pogrešan format emaila!';
        }
        if (!formData.phone || !/^\d{9}$/.test(formData.phone)) {
            newErrors.phone = 'Unesite ispravan broj telefona (9 cifara bez razmaka)!';
        }
        if (!formData.message || formData.message.trim().length < 5) {
            newErrors.message = 'Poruka mora sadržavati barem 5 karaktera!';
        }
        return newErrors;
    };

    const handleChange=(e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit= async (e) =>{
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

            await fetch('http://localhost:5002/kontaktPoruke', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
        alert('Poruka je uspješno poslana!');
        setFormData({ name: '', lastName: '', email: '', phone: '', message: '' });
        setErrors({});
    };



    return (
        <div className="form-container">
            <div className="form-info">
                <h2>Imaš pitanje?</h2>
                <p>Mi smo tu da pomognemo! Popuni odgovarajuća polja u formi ili nam se javi na broj telefona!</p>
                <p> Uvijek se javljamo u rasponu od 8:00 sati do 19:00 sati!</p>
                <p> restoranastroia@gmail.com</p>
                <p> +387 062 470 002</p>
            </div>
            <form className="contact-form-grid" onSubmit={handleSubmit}>

                <input name="name" type="text" placeholder="Ime" value={formData.name} onChange={(handleChange)} />
                {errors.name && <span className="error">{errors.name}</span>}

                <input name="lastName" type="text" placeholder="Prezime" value={formData.lastName} onChange={(handleChange) } />
                {errors.lastName && <span className="error">{errors.lastName}</span>}

                <input name="email" type="text" placeholder="Email" value={formData.email} onChange={(handleChange)} />
                {errors.email && <span className="error">{errors.email}</span>}

                <input name="phone" type="tel" placeholder="Broj Mobitela" maxLength={9} value={formData.phone} onChange={(handleChange)}/>
                {errors.phone && <span className="error">{errors.phone}</span>}

                <textarea name="message" placeholder="Vaša poruka" value={formData.message} onChange={(handleChange)} />
                {errors.message && <span className="error">{errors.message}</span>}


                <button type="submit">Pošalji!</button>
            </form>
            <div className="map-container">
                <p>Možete nas posjetiti na lokaciji</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.8926670945217!2d17.912972633767435!3d44.20333810592933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee39bbcc2715f%3A0x7b9acd2396aaf6b7!2sAstoria%20Pancakes%20and%20Pizza!5e1!3m2!1sen!2sba!4v1748972451379!5m2!1sen!2sba"
                    width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default ContactForm;
