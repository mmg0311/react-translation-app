import React from "react";
import "./styles.css";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function App() {
  const { t } = useTranslation();

  function handleClick(lang){
    i18next.changeLanguage(lang);
  }

  return (
    <div className="App">
     <div>
      <button onClick={()=>handleClick('en')}>English</button>
      <button onClick ={()=>handleClick('chi')}>Chinese</button>
     </div>
      <p>{t('Start.1')}</p>
    </div>
  );
}
