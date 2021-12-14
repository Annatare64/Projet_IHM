import { useState } from "react";
import { useEffect } from "react";
import ExoVocab from "./AtelierExercices/ExoVocabulaires";
import ExoGramm from "./AtelierExercices/ExoGrammaires";
import ExoConj from "./AtelierExercices/ExoConjugaison";
import ExoConj1 from "./AtelierExercices/exercices/ConjExo";
import ExoGramm1 from "./AtelierExercices/exercices/GrammExo1";
import ExoVocab1 from "./AtelierExercices/exercices/VocabExo";
import Magazines from "./Magazines/magazines";
import Magazinescui from "./Magazines/magazinescui";
import Magazinesfav from "./Magazines/magazinesfav";
import Magazinesinfo from "./Magazines/magazinesinfo";
import Magazinesrec from "./Magazines/magazinesrec";
import Accueil from "./Accueil/accueil";
import Guide from "./Outils/Guide";
import Lexique from "./Outils/Lexique";
import Vetement from "./Outils/Vetement";
import Present from "./Outils/present";
import Tete from "./EnTete";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Tete />
        <Routes>
          <Route exact path="/accueil" element={<Accueil />} />
          <Route exact path="/magazines" element={<Magazines />} />
          <Route exact path="/magazinescui" element={<Magazinescui />} />
          <Route exact path="/magazinesfav" element={<Magazinesfav />} />
          <Route exact path="/magazinesinfo" element={<Magazinesinfo />} />
          <Route exact path="/magazinesrec" element={<Magazinesrec />} />
          <Route exact path="/ExoVocab" element={<ExoVocab />} />
          <Route exact path="/ExoGramm" element={<ExoGramm />} />
          <Route exact path="/ExoConj" element={<ExoConj />} />
          <Route exact path="/ExoVocab1" element={<ExoVocab1 />} />
          <Route path="/ExoGramm1" element={<ExoGramm1 />} />
          <Route exact path="/ExoConj1" element={<ExoConj1 />} />
          <Route exact path="/Guide" element={<Guide />} />
          <Route exact path="/Lexique" element={<Lexique />} />
          <Route exact path="/Vetement" element={<Vetement />} />
          <Route exact path="/present" element={<Present />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
