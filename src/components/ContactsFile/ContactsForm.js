import React, { useState } from 'react'
import './contactsform.css';

const ContactsForm = () => {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", nom, prenom, email,tel,subject, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <div id="contact" className='form-container'>
      <h1>Envoyer nous vos messages</h1>
      <input type="hidden" name="form-name" value="contact" />
      <form name="contact" method="POST" data-netlify="true">
        <input required type='text' name='Nom' id='Nom' placeholder='Nom' onChange={(e) => setNom(e.target.value)}/>
        <input required type='text' name='prenom' id="prenom" placeholder='Prenom' onChange={(e) => setPrenom(e.target.value)}/>
        <input required type='email' name='email' is="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input required type='tel' name='tel' id="tel" placeholder='Numéro de téléphone' onChange={(e) => setTel(e.target.value)}/>
        <input required type='text' name='sujet' id="sujet" placeholder='Sujet' onChange={(e) => setSubject(e.target.value)}/>
        <textarea name='message' id="message" placeholder='Ecrivez votre message ici..' rows={4} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Envoyez</button>
      </form>
    </div>
  )
}

export default ContactsForm