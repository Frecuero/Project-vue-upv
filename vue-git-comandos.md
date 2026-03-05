## Instalaciones y configuraciones de Git
Importante, esto es una pequeña fracción de Git, pero necesito que nos acostumbremos a usar estos comandos para evitar pérdida de trabajo o conflictos con nuevas versiones de código.


[Git - Instalar](https://git-scm.com/)

```
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
git config --global init.defaultBranch main
```

## Crear repositorio
```
git init
```

## Subir cambios al staging area
```
git add .
```

## Hacer un commit
```
git commit -m "usuario_upv: Descripción breve de lo realizado"
```

## Ver el historial de la rama en la que estás
```
git log --oneline
```

## Ver el historial de todas las ramas
```
git log --oneline --all --graph --decorate
```


## Crear rama y moverse a ella
```
git checkout -b nombre-rama
```

## Crear rama en otro commit (hash) y moverse a ella
```
git checkout -b nombre-rama a1b2c3d
```

## Cambiar de rama
```
git checkout nombre-rama
```

## Empezar de cero desde el último commit, si no te gustan los cambios que has hecho en el working copy.
```
git checkout -- .
```
