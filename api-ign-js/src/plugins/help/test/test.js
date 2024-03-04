import Help from 'facade/help';

/*
  Necesidades:
  - Parámetros básicos
    - Position: por defecto TR
    - Nota: collapsed, collapsible e isDraggable: no están implementados porque no tiene panel
    - Collapsible: no tendrá efecto ya que no tiene panel
    - Tooltip: por defecto Ayuda
  - Parámetros del plugin
    - Cabecera: puede recibir título e imágenes.
      header: {
        images: [...], Por defecto: [`${M.config.MAPEA_URL}img/logo_ge.svg`, `${M.config.MAPEA_URL}img/ign.svg`]
        title: '...' Por defecto: Ayuda API-CNIG
      }
    - Ayuda para mostrar (inicial):
      - Por defecto mostrará una introducción de la API-CNIG y la ayuda de los plugins que dispongan de ello
      - Si no se desea mostrar la introducción por defecto se usará el parámetro extendInitialExtraContents a false
      - Si se desea extender la información que se muestra ANTES de la ayuda de los plugins/controles usar el parámetro initialExtraContents.
        - extendInitialExtraContents tiene que tener valor true
        - initialExtraContents: [...]
        - initialExtraContents tendrá el formato: 
          { title: '...', content: '...', subContents : [{ title: '...', content: '...'}]}
          - El subContents es opcional
          - Formato recomendable para content es:
            <div><h2>Titulo</h2><div>HTML</div></div>
          - La información por defecto de la API se añadirá después de la indicada por el usuario
    - Ayuda plugins y controles
      - Siempre lo muestra
    - Ayuda para mostrar (final):
      - Independiente de los parámetros extendInitialExtraContents e initialExtraContents
      - Es igual que initialExtraContents pero llamándose finalExtraContents
  - Otras funcionalidades
      - Imprimir en PDF la ayuda

*/

// Probar idiomas
// M.language.setLang('en');
// Añadir buscador
// Locator tendría 3 subapartados
// Parametrizar título
// Probar idomas con las ayudas

const map = M.map({
  container: 'mapjs',
});


const mp = new Help({
  position: 'TL', // TR, BR, TL, BL
  tooltip: 'Mi ayuda',
  header: {
    images: [
      'https://www.gravatar.com/avatar/586252adace7084ee98aa8977fe5cc2b?rating=PG&size=128&default=wavatar',
      'https://www.gravatar.com/avatar/75df827b1b67c5f04f1715dd01016735?rating=PG&size=64x64&default=wavatar',
    ],
    title: 'Título definido por el usuario'
  },
  extendInitialExtraContents: true,
  initialExtraContents: [
    { title: 'Índice 1', content: '<div><h2>Título 1</h2><div><p>Contenido 1</p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tyto_alba_close_up.jpg/200px-Tyto_alba_close_up.jpg" width="300" height="400"></div></div>',
      subContents : [
        { title: 'Índice 2', content: '<div><h2>Título 2</h2><div><p>Contenido 2</p></div></div>'},
      ]
    },
    { title: 'Índice 3', content: '<div><h2>Título 3</h2><div><p>Contenido 3</p></div></div>'},
    { title: 'Índice 4', content: '<div><h2>Título 4</h2><div><p>Contenido 4</p></div></div>',
      subContents : [
        { title: 'Índice 5', content: '<div><h2>Título 5</h2><div><p>Contenido 5</p></div></div>',
          subContents : [{ title: 'Índice 6', content: '<div><h2>Título 6</h2><div><p>Contenido 6</p></div></div>',
        subContents : [{ title: 'Índice 6 esp', content: '<div><h2>Título 6 esp</h2><div><p>Contenido 6 esp</p></div></div>' }], },
      ]
        },
      ]
    },
  ],
  finalExtraContents: [
    { title: 'Índice 7', content: '<div><h2>Título 7</h2><div><p>Contenido 7</p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tyto_alba_close_up.jpg/200px-Tyto_alba_close_up.jpg" width="300" height="400"></div></div>',
      subContents : [
        { title: 'Índice 8', content: '<div><h2>Título 8</h2><div><p>Contenido 8</p></div></div>'},
      ]
    },
    { title: 'Índice 9', content: '<div><h2>Título 9</h2><div><p>Contenido 9</p></div></div>'},
    { title: 'Índice 10', content: '<div><h2>Título 10</h2><div><p>Contenido 10</p></div></div>',
      subContents : [
        { title: 'Índice 11', content: '<div><h2>Título 11</h2><div><p>Contenido 11</p></div></div>',
          subContents : [{ title: 'Índice 12', content: '<div><h2>Título 10</h2><div><p>Contenido 12</p></div></div>' },
      ]
        },
      ]
    },
  ],
});

map.addPlugin(mp); 
window.map = map;

 