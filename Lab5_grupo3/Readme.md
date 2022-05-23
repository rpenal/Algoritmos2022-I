# Laboratorio 5

Este laboratorio consistió en maximizar una función por medio de algoritmos genéticos.

5. Contra funciones lineales o que solo tienen un maximo global, tiende a aglutinarse cerca de este maximo,
mas algunos valores se alejan, probablemente mutaciones.
Con funciones oscilantes, generalmente solo se acerca al optimo global. De vez en cuando algunas 
mutaciones lo alejan y le permiten encontrar algunos optimos globales.



6. Los parametros más importantes son el tamaño del gen, el tamaño de la poblacion y el numero de generaciones:
Estos parametros estan directamente relacionados con la cantidad de memora que se requerira tener en cuenta
en todo momento (tamaño del gen y tamaño de la poblacion) al afectar el espacio requerido por individuo.
                                     Los parametros tamaño de la poblacion y numero de generaciones afectan principalmente el tiempo al ser
los que dictan que tantos intentos de mutacion se realizan, que tantos emparejamientos se realizan y 
que tantas veces todos estos procedimientos realizaran a traves de las distintas generaciones.



7. El tamaño del genoma y la cantidad de generaciones tienen un gran impacto en el tiempo que la funcion ejecuta; sin
embargo, el parametro más importante a la hora de obtener la convergencia es definitivamente la probabilidad de 
mutacion, ya que puede alterar el espacio de busqueda y provocar una divergencia si es muy alta o nunca dar con
el punto buscado si es muy baja
