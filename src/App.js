import React from 'react';

function App() {
  const data = [{ "ma": 44 }, { "pe": 100 }, { "ke": 21 }, { "ti": 66 }, { "la": 22 }]
  const day = ["ma", "ti", "ke", "to", "pe", "la", "su"]

  return (
    <div>
      <h1>JavaScript-ohjelmointi II, (taulukot)</h1>

      <hr /><h2>Tehtävä 2.8</h2>
      <p>Sort järjestää taulukon kappaleet ja palauttaa järjestetyn taulukon. Compare on
        funktio joka määrittää sen millä tavalla taulukko järjestetään uudelleen.</p>

      <hr /><h2>Tehtävä 2.9</h2>
      <ul>
        {[...data].sort((a, b) => Object.values(a) - Object.values(b))
          .map(p => <li><pre>{Object.keys(p)}  {Object.values(p)}</pre></li>)}
      </ul>

      <hr /><h2>Tehtävä 2.10</h2>
      <ul>
        {[...data].sort((a, b) => {
          let pA = day.indexOf(Object.keys(a)[0]), pB = day.indexOf(Object.keys(b)[0])
          return (pA < pB ? -1 : pA > pB ? 1 : 0)
        }).map(p => <li><pre>{Object.keys(p)} {Object.values(p)}</pre></li>)}
      </ul>

      <hr /><h2>Tehtävä 2.11</h2>
      <ul>
        {[...data].map(p => Object.values(p) % 2 === 0 ? <li><pre>{Object.keys(p)}  {Object.values(p)}</pre></li> : null)}
      </ul>

      <hr /><h2>Tehtävä 2.12</h2>
      <ul>
        {[...data].map(p => Object.keys(p).toString().split('')[1] === "e" ? <li><pre>{Object.keys(p)}  {Object.values(p)}</pre></li> : null)}
      </ul>

    </div>
  )
}

export default App;