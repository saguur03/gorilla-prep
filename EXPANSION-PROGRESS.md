# Expansión del banco a 690 preguntas — Registro

> Iniciado y completado el 13 ago 2026. Objetivo: 20 preguntas/día durante 34 días sin repetir.

## Resultado

| Sección | Antes | Nuevas | Ahora |
|---|---|---|---|
| Critical Thinking | 100 | +100 | 200 |
| Numerical Reasoning | 82 | +82 | 164 |
| English | 88 | +88 | 176 |
| Working with Data | 83 | +67 | 150 |
| **Total (4 módulos reales)** | **353** | **+337** | **690** |
| Business Judgment (opcional) | 16 | +16 | 32 |

`DAILY_GOAL` = 20 (`app.js:14`). La práctica mixta ahora usa `DAILY_GOAL` en lugar de un 11 fijo (`app-ui.js:331`), así que una sesión mixta cubre la meta del día. **690 ÷ 20 = 34 días sin repetir.**

## Arquitectura

Las preguntas nuevas viven en archivos separados que hacen `push` sobre los arrays existentes:

`questions-ct-2.js` · `questions-num-2.js` · `questions-data-2.js` · `questions-eng-2.js` · `questions-judgment-2.js`

Cargados en `index.html` después de los originales (y de `questions-charts.js`), antes de `app.js`.

**Por qué así:** `app.js:99` asigna ids por índice (`cat + '-' + i`). Al añadir al final, los ids existentes no se mueven, así que `es-explanations.js` y `es-takeaways.js` siguen apuntando al sitio correcto. Verificado: la primera pregunta sin traducción ES es `ct-100`, exactamente la primera nueva.

**Reglas seguidas:**
- Cada pregunta nueva trae `type` y `d` explícitos (los IIFE de dificultad por defecto viven al final de los archivos originales y ya se ejecutaron).
- Solo se usaron tipos que ya existían — 31 tipos, todos con tema en `guide-en.js` y `guide-es.js`. Ningún tipo nuevo, así que el botón de técnica funciona en todas.
- Distribución por tipo replicada exactamente de cada banco original.
- CT: enunciados de 75–95 palabras con contexto de negocio (criterio del Paso 6).
- Opciones numéricas en orden ascendente, con la posición de la respuesta correcta variada a propósito.

## Distribución por tipo de las preguntas nuevas

**CT (100):** weaken 14 · inference 13 · flaw 12 · arrangement 10 · assumption 10 · strengthen 10 · argument-strength 8 · paradox 8 · syllogism 8 · evaluate 7

**Numerical (82):** multistep 15 · series 10 · percent 9 · margin 8 · business 8 · rates 7 · growth 6 · estimation 6 · average 5 · ratio 4 · probability 4

**English (88):** grammar 32 · vocabulary 22 · sentence correction 17 · idiom 9 · reading 8

**Data (67):** table 46 · statistics 11 · validation 10 — sobre 10 datasets nuevos (`T2_QUARTER`, `T2_HEADCOUNT`, `T2_COSTS`, `T2_STORES`, `T2_COUNTRY`, `T2_MONTHLY`, `T2_PROJECT`, `T2_MARKET`, `T2_DEALS`, `T2_DIRTY2`)

**Judgment (16):** judgment 16, con `takeaway` en línea como en el archivo original

## Verificación ejecutada (13 ago 2026)

Servidor local `powershell -File server.ps1` en el puerto 8420 (config en `.claude/launch.json`), chequeos en consola:

- **Estructural: 0 errores** sobre las 722 preguntas — `answer` dentro de rango, `d` entre 1 y 3, `type`, `prompt` y `explanation` presentes, sin opciones duplicadas.
- **Cobertura de guías: completa.** Los 31 tipos tienen tema en las dos guías (`missingIn_en` y `missingIn_es` vacíos).
- **Estabilidad de ids: confirmada.** Las 353 preguntas originales conservan su traducción ES; la primera sin traducción es `ct-100`.
- **Sesgo posicional:** en las 238 preguntas con opciones de orden fijo, la respuesta correcta cae en las posiciones 1/2/3/4 en 61/67/59/51 casos. Sin sesgo material.
- **Consola: sin errores.** Sesión mixta de 20 preguntas respondida de principio a fin sin excepciones.

## Pendiente (opcional, no bloquea el uso)

- Las 337 preguntas nuevas no tienen traducción al español. La app hace *fallback* automático al inglés, así que funcionan en ambos idiomas; solo la explicación sale en inglés con el toggle en ES.
- Las preguntas nuevas no tienen campo `takeaway` (salvo las de judgment, que lo traen en línea).

## Despliegue

Repo: `https://github.com/saguur03/gorilla-prep` · URL: `https://gorilla-prep.vercel.app`
Push a `main` redespliega solo. El service worker es network-first, así que basta con recargar.
