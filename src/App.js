import React, { useState } from 'react';

function App() {
  const [paivat, setPaivat] = useState(["ma", "ti", "ke", "to", "pe", "la", "su"])
  const [tyotunnit, setTyotunnit] = useState([0, 0, 0, 0, 0, 0, 0])

  const tunnitMuuttuneet = (event, i) => {
    var tyotunnitCopy = [...tyotunnit]
    tyotunnitCopy[i] = event.target.value
    setTyotunnit(tyotunnitCopy)
  }

  return (
    <div>
      <h1>JavaScript-ohjelmointi II, (taulukot)</h1><hr />
      <ul>
        {paivat.map((paiva, i) => (
          <li>{paiva} ({tyotunnit[i]} h)<input
          onChange={(event) => tunnitMuuttuneet(event, i)}
        ></input></li>
        )
        )}
      </ul>
    </div>
  )
}

export default App;