# useEffect

Rappel des méthodes fréquemment utilisées dans une Class:

* componentDidMount
* componentDidUpdate
* componentWillUnmout


Me permettent de déclencher AUTOMATIQUEMENT du code soit au tout premier render, soit apres qchaque render, soir juste avant que le composant soit retiré du DOM

Le hook useEffect me permet de réagir à presque ces mêmes cas de figure, avec un chouilla plus de flexibilité

Ce hook peut être utilisé de différentes façons, et on les détaille ici.

## équivalent de didMount + didUpdate en même temps

```javascript
import {useEffect} from 'react';

const MonComp = () => {
    
    useEffect(() => {
        // Cette fonction sera exécutée au tout premier render
        // Ainsi qu'à tous les suivants !
    })

    return (<MonJsx />)
}
```

## équivalent de DidMount uniquement

```javascript
import {useEffect} from 'react';

const MonComp = () => {
    
    useEffect(() => {
        // Cette fonction sera exécutée au tout premier render
        // et c'est tout, c'est l'équivalent du DidMount
    }, []);

    return (<MonJsx />)
}
```

## didMount plus didUpadate conditionnel

Si on veut contr^oler le fait que notre fonction ne doit être exécutée que SI certaines choses ont changée. 

Ex: je veux reéxécuter ma fonction si la page active dans mon state a changé, mais pour tous les autres changements de mon state, je ne veux pas reéxécuter ma fonction

```javascript
import {useEffect} from 'react';

const MonComp = () => {
    
    useEffect(() => {
        // Cette fonction sera exécutée au tout premier render
        // et à chaque fois que une de mes dépendances de la tableau a changé de valeur
        // Si pageActive est un state par exemple, le fait de changer ce state déclenchera le rappel de ma fonction.
        // alors que changer un autre state (comme posts) ici n'aura aucun impact car je ne surveille pas ce state dans mon tableau
    }, [pageActive, truc, machin]);

    return (<MonJsx />)
}
```


## et l'équivalent du willUnmount ?

```javascript

const Timer = () =>  {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {   
        // Le contenu de ma fonction ne sera exécuté qu'une seule fois ([])
        // j'en profite pour lancer un setInterval
        const monTimer = setInterval(() => {
            setSeconds(seconds + 1)
        }, 1000);

        // Je veux nettoyer mon timer juste avant que mon composant soit viré du DOM
        // Ce que je RETURN ici (une fonction) sera exécuté juste avant que mon composant
        // soit retiré du DOM
        return () => {
            // Ne sera exécuté par React que JUSTE avant le retrait de mon composant
            clearInterval(monTimer);
        }


    }, []);
    

    return <TIMER seconds={seconds}/>
}


```
