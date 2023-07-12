# <center> Présentation du projet </center>
## Introduction
Bienvenue sur notre application web développée dans le cadre du module front-web. Notre application web a été conçue avec Angular, en utilisant l'API "TheCocktailDB".
Dans cette application, une fois connecté, vous pourrez retrouver sur la page d'accueil un carrousel avec quelques exemples de recette de cocktail aléatoir et en dessous la liste avec pagination des cocktails avec alcool.
Il est possible d'afficher seulement des cocktails avec ou sans alcool en naviguant sur les pages via la nav-bar.
Une barre de recherche est aussi disponible. Une fois, une première recherche effectué, il est possible de trier les résultats en fonction de l'alcool souhaité, du type de verre ou bien de l'ingrédient principal.

## Présentation d'Angular

Angular est un framework Javascript côté client qui permet de réaliser des applications Cross-platform Web, Mobilie et Desktop.
Angular est Open Source et développé par Google. Il utilise l’architecture MVM (Modèle Vue Modèle), proche du modèle MVC.
Cela va permettre de structurer son code et bien séparer la vue (l’interface) des modèles (fonctionnement) avec ce que l’on appelle les composants .
Les composants constituent le bloc de construction le plus élémentaire d’une interface utilisateur dans une application Angular, ce qui implique donc qu’une application Angular est une arborescence de composants.
Le code source d’Angular est écrit en TypeScript. Le TypeScript est une couche supérieur au Javascript développé par Microsoft qui se compile en JavaScript simple. 
Etant un language typé, il permet de créer des classes, des variables, des signatures de fonction et l’utilisation de modules. 
Il est important de noter que l’utilisation du TypeScript est facultative, on peut tout à fait utiliser du JavaScript dans un fichier TypeScript.

# Structure de note app

- Lors de la connexion, nous enregistrons le token renvoyé de notre api dans le local storage. Une fois cela effectué, un Guard (service qui peut être appelé lors d'un routage) placé sur la route "home" va checker si l'utilisateur est bien connecté (si le tocken est bien présent) et en fonction va rediriger vers la page de connexion ou autoriser l'accès aux autres pages.


- En ce qui concerne l'appel à L'API TheCocktailDB, nous utilisons notre service "alcool-service", en l'appelant dans les composants qui en ont besoin. Ce service utilise RXJS, qui est un ensemble d'outils directement intégré à Angular. Grâce à lui, les fonctions nous renvoient un observable auquel nous pouvons souscrire pour accéder à nos données de façon asynchrone et en gérant les erreurs. 


- Pour alléger le code, nous avons créé plusieurs composant t'elle que les card des recettes. Pour les créer, nous bouclons sur une liste de cocktail et via le data-binding nous injectons un cocktail pour chaque card créée, que nous récupérons dans le composant de la card (alcool-card.ts), via la balise @Input. Nous pouvons comparer cette fonctionnalité Angular aux Props pour React.

- De la même manière, nous utilisons pour effectuer une recherche, la balise @Output, qui permet d'emmètre un event, que nous écoutons dans le composant parent pour récupérer la requête de la recherche pour rediriger vers une nouvelle page avec les résultats de la recherche.



# <center> RxJS avec Angular vs React </center>
## Introduction
RxJS (Reactive Extensions for JavaScript) est une bibliothèque de programmation réactive qui est couramment utilisée avec Angular et React pour gérer les flux de données asynchrones et les événements. Bien que RxJS soit utilisé de manière similaire dans les deux frameworks, il existe quelques différences dans la façon dont il est intégré et utilisé.

## Observables
- Angular : Angular met fortement l'accent sur l'utilisation des Observables de RxJS pour gérer les flux de données asynchrones. Les Observables sont utilisés pour représenter une séquence de valeurs diffusées sur une période de temps. Ils sont largement utilisés dans les fonctionnalités intégrées d'Angular, tels que les appels HTTP et les événements DOM. Les Observables peuvent être manipulés à l'aide d'opérateurs pour filtrer, transformer et combiner les données émises.
 

- React : Bien que React n'utilise pas nativement les Observables de RxJS, il peut être utilisé avec React en tant que bibliothèque tierce pour gérer les flux de données réactifs. Dans React, les flux de données réactifs sont souvent gérés à l'aide de bibliothèques telles que Redux ou MobX, qui fournissent des mécanismes similaires aux Observables pour gérer les mises à jour de l'état et les réactions aux événements.

## Opérateurs
- Angular : RxJS fournit une grande variété d'opérateurs qui permettent de manipuler et de transformer les flux de données émis par les Observables. Les opérateurs tels que map, filter, merge, switchMap, etc., sont couramment utilisés dans Angular pour effectuer des opérations sur les données émises par les Observables. Ces opérateurs permettent d'effectuer des transformations déclaratives des données et d'appliquer des logiques complexes de manière efficace.


- React : Lorsqu'il est utilisé avec des bibliothèques tierces comme Redux ou MobX, React utilise des mécanismes tels que les "reducers" et les "selectors" pour gérer les transformations et les manipulations des données réactives. Ces bibliothèques fournissent leurs propres ensembles d'opérations et de fonctions pour gérer les mises à jour de l'état et effectuer des transformations sur les données.

## Abonnements
- Angular : Dans Angular, les Observables nécessitent un abonnement explicite pour commencer à écouter les valeurs émises. Les abonnements sont créés en appelant la méthode subscribe() sur un Observable et en fournissant des fonctions de rappel pour gérer les valeurs émises. Il est important de se désabonner des Observables lorsqu'ils ne sont plus nécessaires, afin d'éviter les fuites de mémoire.


- React : Lorsque des bibliothèques tierces comme Redux ou MobX sont utilisées, React gère généralement automatiquement les abonnements aux données réactives. Les composants React peuvent s'abonner aux "stores" (magasins) ou aux "observables" fournis par ces bibliothèques et réagir automatiquement aux mises à jour de l'état sans avoir besoin d'un abonnement explicite.

## Intégration avec le framework
 - Angular : Angular a une intégration étroite avec RxJS, et de nombreuses fonctionnalités intégrées d'Angular utilisent les Observables de RxJS. Par exemple, le module HttpClient d'Angular renvoie des Observables pour gérer les appels HTTP asynchrones. Les formulaires réactifs d'Angular utilisent également RxJS pour observer les changements des champs de formulaire et effectuer des validations réactives.


 - React : Bien que React ne soit pas directement intégré à RxJS, il est possible d'utiliser RxJS avec React en tant que bibliothèque tierce. En utilisant des bibliothèques telles que redux-observable ou rx-react, vous pouvez combiner les fonctionnalités réactives de RxJS avec la gestion de l'état de React pour créer des applications réactives et performantes.

## Conclusion
 - RxJS est un outil puissant pour gérer les flux de données asynchrones et les événements dans les applications Angular et React. Tandis qu'Angular utilise fortement RxJS et les Observables pour la gestion des flux de données, React utilise des bibliothèques tierces telles que Redux ou MobX pour atteindre des fonctionnalités similaires.

 
