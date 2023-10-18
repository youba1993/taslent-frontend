import React from 'react'
import './contactsform.css';

const ContactsForm = () => {
  return (
    <div className='form-container'>
        <h1>Envoyer nous vos messages</h1>
        <form>
            <input required type='text' name='Nom' placeholder='Nom'/>
            <input required type='text' name='prenom' placeholder='Prenom' />
            <input required type='email' name='email' placeholder='Email' />
            <input required type='tel' name='tel' placeholder='Numéro de téléphone' />
            <input required type='text' name='sujet' placeholder='Sujet' />
            <textarea name='message' placeholder='Ecrivez votre message ici..' rows={4}></textarea>
            <button>Envoyez</button>
        </form>
    </div>
  )
}

export default ContactsForm