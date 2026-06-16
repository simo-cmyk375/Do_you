// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   // State variables for each input
//   const [nom, setNom] = useState("");
//   const [prenom, setPrenom] = useState("");
//   const [groupe, setGroupe] = useState("");
//   const [module, setModule] = useState("");
//   const [note, setNote] = useState("");
//   const [notesList, setNotesList] = useState([]);
//   const [average, setAverage] = useState(0);

//   // Function to handle adding notes
//   const handleAddNote = () => {
//     if (nom && prenom && groupe && module && note) {
//       const newNote = {
//         module: module,
//         note: parseInt(note),
//       };

//       // Add the new note to the list
//       setNotesList([...notesList, newNote]);

//       // Calculate the average
//       let total = 0;
//       for (let i = 0; i < notesList.length; i++) {
//         total += notesList[i].note;
//       }
//       total += parseInt(note);
//       const avg = total / (notesList.length + 1);
//       setAverage(avg.toFixed(1));

//       // Reset fields
//       setNom("");
//       setPrenom("");
//       setGroupe("");
//       setModule("");
//       setNote("");
//     }
//   };

//   return (
//     <div className="App">
//       <div className="form">
//         <div>
//           <label>Nom:</label>
//           <input
//             type="text"
//             value={nom}
//             onChange={(n) => setNom(n.target.value)}
//           />
//         </div>
//         <div>
//           <label>Prénom:</label>
//           <input
//             type="text"
//             value={prenom}
//             onChange={(p) => setPrenom(p.target.value)}
//           />
//         </div>
//         <div>
//           <label>Groupe:</label>
//           <select
//             value={groupe}
//             onChange={(g) => setGroupe(g.target.value)}>
//             <option value="groupe1">groupe1</option>
//             <option value="groupe2">groupe2</option>
//             <option value="groupe2">groupe2</option>

//           </select>
//         </div>
//         <div>
//           <label>Module:</label>
//           <select
//             value={module}
//             onChange={(m) => setModule(m.target.value)}
//           >
//             <option value="module1">module1</option>
//             <option value="module2">module2</option>
//           </select>
//         </div>
//         <div>
//           <label>Note:</label>
//           <input
//             type="number"
//             value={note}
//             onChange={(n) => setNote(n.target.value)}
//           />
//         </div>
//         <button onClick={handleAddNote}>Ajouter</button>
//       </div>

//       <div className="notes">
//         <h3>Les notes</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Module</th>
//               <th>Note</th>
//             </tr>
//           </thead>
//           <tbody>
//             {notesList.map((noteItem, index) => (
//               <tr key={index}>
//                 <td>{noteItem.module}</td>
//                 <td>{noteItem.note}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="average">
//           <strong>Moyenne:</strong> {average}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  
  // Hna kanzido f l-7ajm dial l-bouton Yes kolma wrek 3la No
  const yesButtonSize = noCount * 30 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "Have a heart!",
    ];
    // Kanb9aw nbadlo f text, w ila wrek bzaf kanb9aw f l-kher
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  if (yesPressed) {
    return (
      <div className="container">
        <h1 className="success-text">I know it 😏</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="emoji">{noCount > 0 ? "😢" : "🥰"}</div>
      <h1 className="question">{noCount > 0 ? "Are you sure?" : "Do you love me?"}</h1>
      
      <div className="buttons">
        <button
          className="yes-button"
          style={{ fontSize: yesButtonSize }}
          onClick={() => setYesPressed(true)}
        >
          Yes
        </button>
        
        {/* L-bouton No ghadi yb9a yban sghir b l-mo9arana m3a Yes li kaykber */}
        <button
          className="no-button"
          onClick={handleNoClick}
        >
          {noCount === 0 ? "No" : getNoButtonText()}
        </button>
      </div>
    </div>
  );
}