//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =============================================================

import { useState } from "react"

const UseStateCounter = () => {
 const [count, setCount] = useState(0)

 const [person, setPerson] = useState({
    name: "John",
    surname: "Doe",
    age: 43
 })

 
 const inc = () => {
    setCount(count + 1)
}

const incAge = () => {
    //? Bu şekilde  bir atama ile sayısal değer state in üzerine yazılmış oldu
    //? dolayısıyla obje yapısı bozuldu
    /* setPerson(person.age + 1) */

    setPerson({...person, age: person.age + 1})
}

  /*   const dec = () => {
        if(count > 0){
            setCount(count - 1)
        
    }

 } */

  return (
    <div className="container text-center mt-4">
        <section>
    <h1>USESTATE HOOK</h1>
    <h2 className="display-4 text-danger">COUNT:{count}</h2>
    <button onClick={inc} className="btn btn-success">INC</button>
    <button onClick={() => setCount(0)} className="btn btn-dark">CLR</button>
{/*     <button onClick={dec} className="btn btn-danger">DEC</button>  */}   <button onClick={() => count > 0 && setCount(count - 1)} className="btn btn-danger">DEC</button>
  </section>
  <section>
  <h1>USESTATE OBJECT</h1>
  <h2>{person.name}</h2>
  <h2>{person.surname}</h2>
  <h4>{person.age}</h4>
  <button onClick={incAge} className="btn btn-info">inc age</button>
  </section>
    
  </div>
  )
}

export default UseStateCounter