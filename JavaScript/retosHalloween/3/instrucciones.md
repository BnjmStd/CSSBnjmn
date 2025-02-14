Estás en la pesadilla de Freddy Krueger  te persigue. El sueño esta representado por un laberinto de celdas, donde cada celda tiene un valor numérico que indica el nivel de peligro de esa parte del suelo.

Debes encontrar el camino más seguro ( es decir, el que tenga el menor valor total de peligro ) desde la esquina superior izquierda hasta la esquina inferior derecha de la matriz.

En este desafio, sólo puedes moverte hacia  la derecha o hacia  abajo (no puedes retroceder ni moverte en diagonal) y debes calcular el nivel total de peligro del camino más seguro 

La pesadilla esta representadad por una matriz dream de tamaño n x m donde cada celda es un numero positivo que representa el nivel de peligro de esa celda en el sueño 

y tienes que devolver el valor total de peligro del camino más seguro de la esquina superior izquierda (position[0][0]) a la esquina inferior derecha (position[n-1][m-1])

const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]

const bestPath = findSafesPath(dream) 

mejor camino

[0, 0] 
[0, 1]
[0, 2]
[1, 2]
[2, 2]

1, 3, 1, 1, 1 = 7