INSTALL GRUNT FROM SCRATCH

1/ Install Node.js;

2/ Ouvrir l'invit de commande et naviguer jusqu'au dossier de projet;

3/ Install l'invit de commande Grunt dans le rep de travail:npm install -g grunt-cli;

4/ Install Grunt (génère le package.json) dans le rep de travail: npm init
5/ Install module grunt : npm install grunt gruntnpm init
	- pour sauvegarder cette dependance dans le package.json ajouter à la commande: --save-dev
	- Cela va créer un dossier node_modules dans le projet qui va contenir Grunt et les eventuels modules

	ATTENTION  : ne pas versionner ce dossier si on travaille sur GIT

	PS : Quand qq'un recupère le projet il n'a pas à installer chaque les dépendances, juste npm install, et 
	toutes les dépendances listées dans package.json vont être installer

6/ Créer le fichier Gruntfile.js à la racine
7/ installer les modules dont vous avez besoin, par exemple concat

ATTENTION : le uglify grunt change les noms de variable, avec angular cela posera problème car le framework
se base sur les noms spécifiques.

POUR IMAGEMIN, d'abord copier manuellement le dossier img dans DIST, sinon la minification renvoie uen erreur


/*Avec un gruntfile.js et un package.json existant*/


   1. Ouvrir l'invit de commande et naviguer jusqu'au dossier de projet;
   2. npm install.
   3. grunt
   4. grunt watch pour lancer le watcher
