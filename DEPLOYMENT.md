# GitHub Setup & Deployment Guide

## Steg 1: Skapa GitHub Repository
1. Gå till https://github.com/new
2. Repository name: `dekorfabriken-v2`
3. Description: `Modern, exklusiv hemsida för folieringsfirma med avancerad spotlight-effekt`
4. Sätt till **Public** (krävs för GitHub Pages)
5. **OBS:** Kryssa INTE i "Add a README file" (vi har redan en)
6. Klicka "Create repository"

## Steg 2: Anslut och pusha till GitHub
När repot är skapat, kopiera repository URL och kör:

```bash
# Lägg till GitHub som remote origin (byt ut DIN_GITHUB_USERNAME)
git remote add origin https://github.com/DIN_GITHUB_USERNAME/dekorfabriken-v2.git

# Pusha koden till GitHub
git push -u origin main
```

## Steg 3: Aktivera GitHub Pages
1. Gå till repository → Settings → Pages
2. Under "Source" välj: **GitHub Actions**
3. GitHub Actions workflow kommer automatiskt att deployas

## Steg 4: Vänta på deployment
- Gå till Actions-fliken för att se deployment-progress
- När det är klart får du en URL: `https://DIN_GITHUB_USERNAME.github.io/dekorfabriken-v2/`

## Framtida updates
När du gör ändringar:
```bash
git add .
git commit -m "Din commit-meddelande"
git push
```

Hemsidan uppdateras automatiskt via GitHub Actions!

## Felsökning
Om något går fel:
1. Kontrollera Actions-fliken för felmeddelanden
2. Se till att repository är Public
3. Kontrollera att Pages är aktiverat i Settings
