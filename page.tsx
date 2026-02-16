
"use client";
import { useState } from "react";

export default function Page() {
  const [sent,setSent]=useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={{padding:"40px",textAlign:"center"}}>
      <h1>Mirage Glass & Resin</h1>
      <p>Luxury Resin Art</p>

      <h2>Каталог</h2>
      <p>Брошки • Брелки • Подвески • Подставки • Ручки • Подстаканники</p>

      <a href="https://t.me/MirageGlassResin" target="_blank">
        Смотреть работы в Telegram
      </a>

      <h2 style={{marginTop:"40px"}}>Заявка</h2>

      {sent ? <p>Спасибо! Мы свяжемся с вами</p> :
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"10px",maxWidth:"300px",margin:"auto"}}>
        <input placeholder="Имя" required/>
        <input placeholder="Телефон" required/>
        <textarea placeholder="Комментарий"/>
        <button>Отправить</button>
      </form>}

      <h2 style={{marginTop:"40px"}}>Контакты</h2>
      <p>+7 912 711 90 17</p>
    </div>
  )
}
