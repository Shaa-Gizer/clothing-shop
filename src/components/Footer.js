import React from 'react';
import f from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={f.footer}>
            <form className={f.form}>
                <input className={f.input} placeholder={'Your name:'}/>
                <input className={f.input} placeholder={'Your email:'}/>
                <textarea className={f.message} placeholder={'Your message:'}></textarea>
                <button className={f.btn}
                        onClick={() => alert('Thanks for feedback!')}
                >Send</button>
            </form>
            <div className={f.copyright}>Craciun Svetlana's practice project. All rights reserved &copy;</div>
        </footer>
    );
};

export default Footer;