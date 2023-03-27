export type ResourcesType =
  | 'books'
  | 'stories'
  | 'songs'
  | 'logical math activities'
  | 'reading and writing activities'
  | 'english activities'
  | 'thematic programming'

  export const Resources: ResourcesType[] = ['books','stories'
, 'songs'
, 'logical math activities'
, 'reading and writing activities'
, 'english activities'
, 'thematic programming'
]
/* El código define un tipo llamado ResourcesType, que es una unión de diferentes cadenas de texto que representan los tipos de recursos disponibles en la aplicación. 

Luego, se define una constante Resources que es un arreglo que contiene todos los posibles valores de ResourcesType. Esto permite un fácil acceso a los diferentes tipos de recursos desde diferentes partes de la aplicación sin tener que escribir manualmente la cadena de texto cada vez. */