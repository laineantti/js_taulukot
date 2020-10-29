import React from 'react';

function App() {
  const data = [{ "ma": 44 }, { "pe": 100 }, { "ke": 21 }, { "ti": 66 }, { "la": 22 }]
  const dataObject = { "ma": 44, "pe": 100, "ke": 21, "ti": 66, "la": 22 }
  const day = ["ma", "ti", "ke", "to", "pe", "la", "su"]

  const tehtava2_13 = () => {
    const objects = []
    for (const [key, value] of Object.entries(dataObject)) {
      const o = {}
      o[key] = value
      objects.push(o)
    }
    return objects
  }

  return (
    <div>
      <h1>JavaScript-ohjelmointi II, (taulukot)</h1>

      <hr /><h2>Tehtävä 2.8</h2>
      <p>Sort järjestää taulukon kappaleet ja palauttaa järjestetyn taulukon. Compare on
        funktio joka määrittää sen millä tavalla taulukko järjestetään uudelleen.</p>

      <hr /><h2>Tehtävä 2.9</h2>
      <ul>
        {[...data].sort((a, b) => Object.values(a) - Object.values(b))
          .map(p => <li key={Object.keys(p)}><pre>{Object.keys(p)}  {Object.values(p)}</pre></li>)}
      </ul>

      <hr /><h2>Tehtävä 2.10</h2>
      <ul>
        {[...data].sort((a, b) => {
          let pA = day.indexOf(Object.keys(a)[0]), pB = day.indexOf(Object.keys(b)[0])
          return (pA < pB ? -1 : pA > pB ? 1 : 0)
        }).map(p => <li key={Object.keys(p)}><pre>{Object.keys(p)} {Object.values(p)}</pre></li>)}
      </ul>

      <hr /><h2>Tehtävä 2.11</h2>
      <ul>
        {[...data].map(p => Object.values(p) % 2 === 0 ? <li key={Object.keys(p)}><pre>{Object.keys(p)}  {Object.values(p)}</pre></li> : null)}
      </ul>

      <hr /><h2>Tehtävä 2.12</h2>
      <ul>
        {[...data].map(p => Object.keys(p).toString().split('')[1] === "e" ? <li key={Object.keys(p)}><pre>{Object.keys(p)}  {Object.values(p)}</pre></li> : null)}
      </ul>

      <hr /><h2>Tehtävä 2.13</h2>
      <ul>
        {tehtava2_13(dataObject).map(p => <li key={Object.keys(p)}><pre>{Object.keys(p)} {Object.values(p)}</pre></li>)}
      </ul>

    </div>
  )
}

export default App;