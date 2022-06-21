# React Router

Cette librairie nous permet d'utiliser les urls pour savoir quoi afficher.
Elle permet également de naviguer sur différentes url internes à mon site SANS recharger la page.

## Etapes

1. installer react-router-dom
2. Importer BrowserRouter à la racine de mon app
3. Englober mon composant d'application dans le `<Router>`
4. Mettre en place les liens de navigation (pour changer l'url SANS recharger la page)
5. Mettre en place la logique d'affichage des composants en fonction de l'url


Pour l'étape 4, je peux utiliser le composant NavLink pour mon menu

Ex
```javascript
{
        list.map(({ label, route }) => (
          <NavLink
            key={ label }
            className="menu-link"
            to={route}
          >
            {label}
          </NavLink>
        ))
      }
```

Pour l'étape 5; j'utilise les composants Routes et Route pour gérer mes routes.

Pour chaque route a gérer, je dois spécifier:
* le path auquel je veux réagir
* l'élément que je veux afficher pour ce path


Ex

```javascript
 <Routes>
        {
          categoriesData.map(({ label, route }) => (
            <Route
              path={route}
              element={(
                <Posts
                  list={getFilteredPosts(label)}
                  zenMode={zenMode}
                />
            )}
            />
          ))
        }
      </Routes>
```
