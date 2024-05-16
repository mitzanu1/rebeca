import React from 'react'
import styles from './cv.module.css'

function Cv() {
  return (
    <section className={styles.cv}>
      <article>
        <h1>Despre mine</h1>
        <p>Agilitatea, entuziasmul, viteza sunt punctele mele forte. Setea de cunoaștere și performanță sunt câteva dintre obiectivele care mi-au marcat întreaga viață. Pentru informatii suplimentare, referinte, proiecte si alte activitati ma puteti contacta pe email sau telefonic.</p>
      </article>
      <article>
        <h1>Experienta profesionala</h1>
        <h2>08.08.2022 – ÎN CURS <br/>
            CONSILIER CLIENTI SCC ROMANIA</h2>
        <ul>
          <li><p>integrarea si procesarea comenzilor manual sau automat</p></li>
          <li><p>monitorizarea comenzii</p></li>
          <li><p>tratarea litigiilor</p></li>
          <li><p>comunicare scrisă cu clienții pentru a oferi informații cu privire la starea comenzii, timpul de livrare, facturarea etc. și cu inginerii, editorii și furnizorii</p></li>
          <li><p>accelerarea performanței colegilor mei prin aplicarea leadership-ului situațional</p></li>
          <li><p>urmăriți situațiile de urgență și tratați-le cât mai repede posibil pentru a menține profesionalismul și a vinde clientului cel mai bun produs</p></li>
        </ul>
        <h2>01/06/2021 – ÎN CURS <br />
            FREELANCING</h2>
        <p>Colaborare cu studenții pentru inițierea unui proces de cercetare: dezvoltarea și implementarea metodologiilor de cercetare eficiente, testarea și validarea ipotezelor cu ajutorul tehnicilor statistice și SPSS.</p>
      </article>
      <article>
        <h1>Educație și formare profesională</h1>
        <h2>03.10.2018 – 21.06.2021 <br/>
            Licenta in psihologie</h2>
        <p>Universitatea din Transilvania, <br />
            Facultatea de Psihologie și Științe ale Educației</p>
        <h2>03.10.2021 – 20.07.2023 <br/>
            Master în Psihologie Clinică, Consiliere Psihologică și Psihoterapie </h2>
        <p> Universitatea din Transilvania, <br/>
            Facultatea de Psihologie și Științe ale Educației</p>
        <h2>11.11.2022 – ÎN CURS  <br/>  
            Formare pe termen lung în terapii cognitiv-comportamentale și programe de reabilitare </h2>
        <p> Asociația de terapii cognitiv-comportamentale și programe de reabilitare (ATCCPR)</p>    
        <h1>Aptitudini lingvistice</h1>
        <h2>Franceză (Nivel – C1), Engleză (Nivel C1)</h2>    
      </article>
    </section>
  )
}

export default Cv