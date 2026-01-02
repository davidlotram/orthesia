📘 Orthésia — Mode d’emploi Professeur

Ce document explique comment utiliser, modifier et gérer Orthésia sans casser l’accès élève.

🧭 Structure générale du projet
orthesia/
│
├─ index.html                → Page d’accueil élèves (publique)
├─ classes/
│   ├─ 4e/
│   │   └─ orthesia_4e_view.html
│   ├─ 5e-proust/
│   │   └─ orthesia_5e_proust_view.html
│   └─ 5e-sarraute/
│       └─ orthesia_5e_sarraute_view.html
│
├─ assets/                   → CSS, images, sons
├─ (autres fichiers techniques)

🎒 Accès élèves (PUBLIC)

Les élèves accèdent uniquement à ces pages :

🌐 Accueil :
👉 https://davidlotram.github.io/orthesia/

Classes :

4e → https://davidlotram.github.io/orthesia/classes/4e/

5e Proust → https://davidlotram.github.io/orthesia/classes/5e-proust/

5e Sarraute → https://davidlotram.github.io/orthesia/classes/5e-sarraute/

⚠️ Les élèves ne voient jamais les fichiers internes (.html, .js, etc.)
Ils ne voient que les pages publiques.

🔐 Accès PROF (non public)

Les fichiers prof sont dans la branche main et non exposés sur GitHub Pages.

Exemples :

orthesia_4e_prof.html

orthesia_5e_proust_prof.html

orthesia_5e_sarraute_prof.html

Accès pour le professeur

Via GitHub uniquement :

https://github.com/davidlotram/orthesia/blob/main/orthesia_4e_prof.html


💡 Ces fichiers :

❌ ne sont PAS accessibles par URL publique

✅ sont visibles uniquement depuis GitHub

✅ sont sécurisés par conception

🛑 À ne surtout pas faire

❌ Ne jamais mettre les fichiers *_prof.html dans gh-pages
❌ Ne pas lier les pages prof depuis le site élève
❌ Ne pas utiliser raw.githubusercontent.com pour les élèves

🧠 Astuce pédagogique

Les élèves peuvent :

consulter leur progression

naviguer librement

sans jamais modifier les données

Le professeur garde :

la structure

les réglages

les accès spéciaux

✅ Résumé express
Élément	Accès
Accueil élève	✅ Public
Pages de classe	✅ Public
Pages prof	❌ Privées
GitHub Pages	Élèves uniquement
Branche main	Prof uniquement
