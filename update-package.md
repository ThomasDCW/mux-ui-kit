## Publication d'une nouvelle version du package

Pour publier une nouvelle version du package `mux-ui-kit`, suivez les étapes ci-dessous :

1. **Mettre à jour la version dans `package.json`** :

   - Ouvrez le fichier `package.json`.
   - Modifiez la valeur de la propriété `"version"` pour refléter la nouvelle version. Par exemple, si la version actuelle est `"1.0.1"`, vous pouvez la mettre à jour en `"1.0.2"`.

2. **Construire le package** :

   - Exécutez la commande suivante pour construire le package :
     ```bash
     npm run build
     ```

3. **Publier sur npm** :

   - Assurez-vous d'être connecté à votre compte npm. Si ce n'est pas le cas, connectez-vous en utilisant :
     ```bash
     npm login
     ```
   - Publiez le package en utilisant la commande suivante :
     ```bash
     npm publish
     ```

4. **Créer un tag git** (optionnel mais recommandé) :
   - Créez un tag pour la nouvelle version :
     ```bash
     git tag v1.0.2
     ```
   - Poussez le tag vers le dépôt distant :
     ```bash
     git push origin v1.0.2
     ```

En suivant ces étapes, vous pourrez publier une nouvelle version de `mux-ui-kit` sur npm.
