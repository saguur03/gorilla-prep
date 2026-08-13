# Expansión del banco a ~706 preguntas — Registro de progreso

> Documento de estado para poder retomar en otra sesión.
> Iniciado: 13 ago 2026. Objetivo: 20 preguntas/día durante 34 días sin repetir.

## Objetivo

Duplicar el banco: 353 → ~706 preguntas. `DAILY_GOAL` ya cambiado de 11 a **20** en `app.js:14`.

## Inventario base (antes de la expansión)

| Sección | Archivo | Preguntas |
|---|---|---|
| Critical Thinking | `questions-ct.js` | 100 |
| Numerical Reasoning | `questions-num.js` | 82 |
| English | `questions-eng.js` | 88 |
| Working with Data | `questions-data.js` (67) + `questions-charts.js` (16) | 67* |
| Business Judgment | `questions-judgment.js` | 16 |
| **Total** | | **353** |

\* el conteo de 67 en `questions-data.js`; los 16 de charts se suman aparte al mismo banco.

### Distribución por tipo a replicar

**CT (100 nuevas):** weaken 14 · inference 13 · flaw 12 · arrangement 10 · assumption 10 · strengthen 10 · argument-strength 8 · paradox 8 · syllogism 8 · evaluate 7

**Numerical (82 nuevas):** multistep 15 · series 10 · percent 9 · margin 8 · business 8 · rates 7 · growth 6 · estimation 6 · average 5 · ratio 4 · probability 4

**English (88 nuevas):** grammar 32 · vocabulary 22 · sentence correction 17 · idiom 9 · reading 8

**Data (67 nuevas):** table 46 · statistics 11 · validation 10

**Judgment (16 nuevas):** judgment 16

## Arquitectura de la expansión

Las preguntas nuevas van en archivos **separados** que hacen `push` sobre los arrays existentes:

- `questions-ct-2.js`
- `questions-num-2.js`
- `questions-data-2.js`
- `questions-eng-2.js`
- `questions-judgment-2.js`

Cargados en `index.html` **después** de los originales (y de `questions-charts.js`) y **antes** de `app.js`.

**Por qué así:** `app.js:99` asigna ids por índice (`cat + '-' + i`). Al añadir al final, los ids existentes no se mueven, así que `es-explanations.js` y `es-takeaways.js` siguen apuntando al sitio correcto.

**Regla obligatoria:** cada pregunta nueva debe traer `type` y `d` explícitos. Los IIFE de dificultad por defecto viven al final de los archivos originales y ya se ejecutaron; no alcanzan a las nuevas.

**Regla de `type`:** solo usar tipos que ya existen (ver `TYPE_NAMES` en `app.js:43`). Un tipo nuevo obliga a añadir su tema a `guide-en.js` Y `guide-es.js` o el botón de técnica desaparece.

**Formato:** `{type, prompt, choices, answer, explanation, d, table?}` — `answer` es índice 0-based.

**Estilo CT:** enunciados de 75–95 palabras con contexto de negocio realista (criterio del Paso 6 ya aplicado al banco original).

**Opciones numéricas:** no se barajan en runtime cuando todas empiezan con dígito o `$`. Evitar que la respuesta correcta caiga siempre en la posición media.

## Estado por paso

- [x] **Paso 1 — Análisis del banco actual.** Completado.
- [ ] **Paso 2 — Generación (~353 preguntas).** En curso, ver tabla abajo.
- [ ] **Paso 3 — Integración técnica** (`<script src>` en `index.html`, verificar carga).
- [ ] **Paso 4 — Revisión de calidad TestGorilla** de todas las nuevas.
- [ ] **Paso 5 — Prueba técnica** (chequeos de consola, 20 preguntas seguidas).

### Detalle del Paso 2

| Archivo | Meta | Escritas | Estado |
|---|---|---|---|
| `questions-ct-2.js` | 100 | 49 | en curso — hechas: weaken 14, strengthen 10, inference 13, flaw 12. Faltan: assumption 10, arrangement 10, paradox 8, syllogism 8, argument-strength 8, evaluate 7 |
| `questions-num-2.js` | 82 | 0 | pendiente |
| `questions-data-2.js` | 67 | 0 | pendiente |
| `questions-eng-2.js` | 88 | 0 | pendiente |
| `questions-judgment-2.js` | 16 | 0 | pendiente |

## Verificación final (Paso 5)

Cargar la app y correr en consola:
1. Chequeo estructural: `answer` dentro de rango, `d` en 1–3, opciones duplicadas.
2. Cobertura guía↔banco en ambos idiomas (todo `type` debe tener tema en las dos guías).
3. Alineación de traducciones ES vs EN (comparar números de cada explicación).

## Despliegue

Repo: `https://github.com/saguur03/gorilla-prep` · URL: `https://gorilla-prep.vercel.app`
Push a `main` redespliega solo. El service worker es network-first, así que los cambios llegan al recargar.
