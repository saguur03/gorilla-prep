BEGIN {
  # Arrays para guardar type + d
  for (i=1; i<=3; i++) {
    for (type in types) delete types[type,i]
  }
}

{
  # Buscar type: "..."
  if (match($0, /type: "([^"]+)"/, a)) {
    current_type = a[1]
  }
  # Buscar d: [0-9]
  if (match($0, /d: ([0-9])/, a)) {
    current_d = a[1]
    types[current_type,current_d]++
  }
}

END {
  print "Type\td:1\td:2\td:3\tTotal"
  total_d1=0; total_d2=0; total_d3=0
  
  types_list = "grammar idiom reading sentence correction vocabulary"
  n = split(types_list, arr)
  for (i=1; i<=n; i++) {
    type = arr[i]
    c1 = types[type,1] + 0
    c2 = types[type,2] + 0
    c3 = types[type,3] + 0
    total = c1 + c2 + c3
    printf "%s\t%d\t%d\t%d\t%d\n", type, c1, c2, c3, total
    total_d1 += c1
    total_d2 += c2
    total_d3 += c3
  }
  grand_total = total_d1 + total_d2 + total_d3
  printf "TOTAL\t%d\t%d\t%d\t%d\n", total_d1, total_d2, total_d3, grand_total
}
