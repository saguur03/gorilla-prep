#!/bin/bash

# Para questions-eng.js, necesito procesar de forma especial porque no todos tienen 'd' explícito
# Los que no tienen 'd' usan defaults

echo "=== QUESTIONS-ENG.JS (88 questions) ==="

# Contar preguntas por type
echo "Por TYPE:"
grep -o 'type: *"[^"]*"' questions-eng.js | sed 's/type: *"//' | sed 's/".*//' | sort | uniq -c

# Las preguntas sin 'd' explícito usan defaults:
# vocabulary: d=1
# grammar: d=2
# idiom: d=2
# sentence correction: d=2
# reading: d=3

# Contar preguntas que TIENEN 'd' explícito
echo -e "\nPreguntas con d: explícito:"
grep -c 'd: *[0-9]' questions-eng.js

# Extraer todas las 'd: ' donde aparecen
echo -e "\nDistribución de d (de preguntas con d explícito):"
grep -o 'd: *[0-9]' questions-eng.js | sed 's/d: */d:/' | sort | uniq -c

echo -e "\n=== QUESTIONS-ENG-2.JS ==="
echo "Por TYPE:"
grep -o 'type: *"[^"]*"' questions-eng-2.js | sed 's/type: *"//' | sed 's/".*//' | sort | uniq -c

echo -e "\nDistribución de d:"
grep -o 'd: *[0-9]' questions-eng-2.js | sed 's/d: */d:/' | sort | uniq -c

echo -e "\n=== QUESTIONS-ENG-C1.JS ==="
echo "Por TYPE:"
grep -o 'type: *"[^"]*"' questions-eng-c1.js | sed 's/type: *"//' | sed 's/".*//' | sort | uniq -c

echo -e "\nDistribución de d:"
grep -o 'd: *[0-9]' questions-eng-c1.js | sed 's/d: */d:/' | sort | uniq -c
