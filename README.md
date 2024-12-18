Dans ce projet, vous devez créer un serveur IRC en NodeJS et ExpressJS, et un client en ReactJS.

Votre serveur devra accepter plusieurs connexions simultanées et implémenter la notion de canaux :

il doit être possible de rejoindre plusieurs canaux simultanément.
il doit pouvoir créer, renommer et supprimer des canaux.
un message doit s'afficher lorsqu'un utilisateur rejoint ou quitte un canal.
les utilisateurs doivent bien sûr pouvoir parler dans les canaux qu'ils ont rejoints.
Les canaux et les messages doivent être conservés de manière persistante. La persistance peut se faire avec la méthode qui vous semble la meilleure : fichier, base de données, ...

Chaque utilisateur doit donner un pseudo avant de pouvoir utiliser l'application.

Le client et le serveur doivent communiquer entre eux, avec le protocole de votre choix.
