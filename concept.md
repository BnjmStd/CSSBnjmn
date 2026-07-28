https://www.youtube.com/watch?v=Nt_Heh_P08M

Heap (1:08-1:43): Es el "almacén" de memoria donde viven todos los objetos que crea tu aplicación. Imagínalo como una gran bodega con infinitos estantes donde cada objeto ocupa un espacio mientras es necesario.

Garbage Collector (2:06-2:50): Es el "janitor" o encargado de limpieza automático de JavaScript. Su trabajo es recorrer el heap periódicamente para identificar qué objetos ya no se usan y liberar el espacio que ocupan, manteniendo la aplicación ligera.

Reachable (3:09-4:17): Es el criterio principal para decidir si algo debe sobrevivir. Un objeto es "alcanzable" si el Garbage Collector puede llegar a él siguiendo una cadena de referencias desde un punto de inicio conocido (la root, como el objeto window). Si es alcanzable, se marca como vivo; si no, se barre.

Detached DOM Node (5:23-6:41): Es un nodo (elemento HTML) que ya fue eliminado de la página visualmente, pero que sigue existiendo en el heap porque alguna variable en tu JavaScript todavía lo está referenciando. Es básicamente un "zombie" que consume memoria innecesariamente.

Retaining Path (8:58-10:00): Es el mapa o "cadena de custodia" que muestra exactamente por qué un objeto no ha sido eliminado. En Chrome DevTools, este camino te permite ver qué variable o qué event listener olvidado está manteniendo vivo ese objeto, permitiéndote identificar el origen de una fuga de memoria (leak).

WeakMap (10:48-11:18): Es un tipo especial de colección en JavaScript. A diferencia de un objeto o un Map tradicional, el WeakMap guarda sus referencias de manera "débil".