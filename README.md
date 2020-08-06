# Crêt-Vaillant 22

Visite interactive d'un appartement au Crêt-Vaillant 22.

L'application originale, réalisée en 2012, est écrite en Flash. Le but est de la redévelopper en standards du web.

* Version flash: https://cret-vaillant.ch/22/old/
* Cette version: https://cret-vaillant.ch/22/

## Développement

### Back-end

Lancer un serveur PHP local qui pointe sur cockpit:

```
php -S localhost:1234 -t cockpit
```

### Front-end

Lancer l'application Vue.js en local:

```
npm run serve
```

## Installation de Cockpit en local

[Télécharger cockpit](https://getcockpit.com/download)

Aller sur `<cockpit>/install`.

S'authentifier avec admin/admin.

### Structure de données

    singletons
      welcome
        title: Text
        content: Wysiwyg
      contact
        content: Wysiwyg
    collections
      views
        name: Text
        label: Text
        title: Text
        content: Wysiwyg

Pour rendre les données publiques par l'API, à l'édition d'un singleton ou d'une collection, aller dans le menu Permissions et cliquer le switch correspondant.

### Gestion des utilisateurs

#### Création d'un groupe author

Depuis la page settings, créer un fichier de configuration. Attention: cela crée un fichier yaml alors que la configuration d'exemple dans [la doc](https://getcockpit.com/documentation/reference/configuration) est php.

Pour créer un groupe "author":

```yaml
groups:
  author:
    $admin: false
    cockpit:
      backend: true
```

### Modifier les permissions sur les objets

Une fois le groupe configuré, il faut encore aller dans les permissions des singletons et collections pour lui autoriser les accès.

#### Ajout d'utilisateur au groupe

Lors de la création d'un compte, on peut l'affecter au nouveau groupe `author`.

### Archives des données

todo

## Déploiement

Compilation:
```
npm run build
```

Puis charger le contenu du dossier `dist` dans qqch comme `web/cret-vaillant/22/`

Cockpit est déjà en production dans le même dossier.
