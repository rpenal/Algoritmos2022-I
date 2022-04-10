# Laboratorio 3: Búsqueda por Fuerza Bruta

En este laboratorio desarrollamos un algoritmo para encontrar por fuerza bruta un target/segmento de bases en un archivo con una secuencia del virus SARS-Cov2.

La complejidad del algoritmo es O(n^2) 
Esto lo sabemos porque el algoritmo primero tiene un ciclo sobre todo el genoma (O(n)), y luego dentro de este ciclo tiene otro ciclo anidado sobre la longitud de nuetro objetivo (O(n)). Sobre esta longitud se hace una serie de comprobaciones caracter a caracter (O(1)), que en el peor de los casos va a ser igual a la longitud de la secuencia.

En total, tenemos O(n) [O(1) + O(1) + O(n) [ O(1)]]

Luego, la complejidad del algoritmo es O(n^2)
