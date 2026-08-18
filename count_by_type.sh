#!/bin/bash

echo "=== QUESTIONS-ENG-2.JS - Breakdown por TYPE y d ==="

for type in "grammar" "idiom" "reading" "sentence correction" "vocabulary"; do
  echo ""
  echo "TYPE: $type"
  
  # Crear patrón específico para este tipo
  case "$type" in
    "sentence correction")
      pattern='type: "sentence correction"'
      ;;
    *)
      pattern="type: \"$type\""
      ;;
  esac
  
  # Buscar todos los bloques que contengan este tipo
  # y contar los 'd:' valores dentro de ese bloque
  
  d1=$(awk -v p="$pattern" '
    /\{/ { in_block=1; block="" }
    in_block { block = block "\n" $0 }
    /\}/ { 
      if (in_block && index(block, p) > 0 && index(block, "d: 1") > 0) {
        d1_count++
      }
      in_block=0
    }
    END { print d1_count + 0 }
  ' questions-eng-2.js)
  
  d2=$(awk -v p="$pattern" '
    /\{/ { in_block=1; block="" }
    in_block { block = block "\n" $0 }
    /\}/ { 
      if (in_block && index(block, p) > 0 && index(block, "d: 2") > 0) {
        d2_count++
      }
      in_block=0
    }
    END { print d2_count + 0 }
  ' questions-eng-2.js)
  
  d3=$(awk -v p="$pattern" '
    /\{/ { in_block=1; block="" }
    in_block { block = block "\n" $0 }
    /\}/ { 
      if (in_block && index(block, p) > 0 && index(block, "d: 3") > 0) {
        d3_count++
      }
      in_block=0
    }
    END { print d3_count + 0 }
  ' questions-eng-2.js)
  
  total=$((d1 + d2 + d3))
  echo "  d:1 = $d1,  d:2 = $d2,  d:3 = $d3  →  Total: $total"
done
