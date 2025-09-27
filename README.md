Lección 01: Hello world
El Angular CLI es la herramienta esencial para crear y gestionar proyectos.

El comando ng new inicializa un nuevo espacio de trabajo con una estructura de archivos estándar.

ng serve compila la aplicación y levanta un servidor de desarrollo local con recarga automática.

Un proyecto nuevo ya viene con una aplicación de ejemplo funcional.

Las opciones --routing y --style permiten preconfigurar el enrutamiento y el formato de estilos.

Lección 02: Creating a component
Los componentes son los bloques de construcción fundamentales de una aplicación de Angular.

El comando ng generate component crea la estructura de archivos de un componente (.ts, .html, .css).

Cada componente tiene un "selector" (ej: app-home) que se usa como una etiqueta HTML para renderizarlo.

Los componentes standalone declaran sus propias dependencias, haciendo la estructura más modular.

Para usar un componente, se debe importar en el módulo o componente donde se va a utilizar.

Lección 03: Creating the application’s shell
El AppComponent puede funcionar como un "shell" o contenedor principal para toda la aplicación.

La directiva <router-outlet> actúa como un marcador de posición donde Angular renderiza los componentes de cada ruta.

La directiva [routerLink] se usa para crear enlaces de navegación internos sin recargar la página.

El enrutamiento desacopla los componentes, permitiendo que AppComponent no necesite conocer a HomeComponent directamente.

Una buena estructura inicial separa la capa de presentación principal (shell) del contenido dinámico (rutas).

Lección 04: Add housing location component
Las aplicaciones de Angular se construyen componiendo componentes, anidando unos dentro de otros.

Generar componentes específicos para cada pieza de la UI (como una tarjeta de vivienda) mejora la reutilización.

Para usar un componente hijo, el componente padre debe importarlo en su propiedad imports.

Esta práctica fomenta una arquitectura limpia y mantenible.

La estructura visual de la página se puede entender mirando la composición de componentes en el HTML.

Lección 05: Create an interface
Una interfaz en TypeScript define un "contrato" o una estructura para la forma de los objetos.

Ayuda a prevenir errores al asegurar que los datos que manejamos tengan las propiedades y tipos correctos.

El comando ng generate interface crea el archivo .ts para la nueva interfaz.

No se compilan a JavaScript; son una herramienta exclusiva para el desarrollo en TypeScript.

Mejoran la autocompletación en el editor de código y la legibilidad general del proyecto.

Lección 06: Add an input to the component
Los componentes pueden recibir datos de su componente padre a través de propiedades de entrada (Input).

El decorador @Input() marca una propiedad de una clase para que pueda recibir un valor desde el exterior.

La "vinculación de propiedades" o property binding ([propiedad]="valor") se usa en la plantilla del padre para pasar los datos.

Esta es la principal forma de comunicación unidireccional de padre a hijo.

Permite crear componentes hijos reutilizables y configurables.

Lección 07: Add dynamic values to template
La interpolación, con la sintaxis de doble llave {{ expresion }}, se usa para mostrar texto dinámico en el HTML.

El property binding, con corchetes [propiedad]="expresion", se usa para vincular valores a atributos de elementos HTML.

Es preferible usar property binding para propiedades del DOM como src de una imagen por seguridad y eficiencia.

Se puede acceder a las propiedades del objeto recibido por @Input() directamente desde la plantilla del componente.

La combinación de ambas técnicas permite que las plantillas sean completamente dinámicas y reactivas a los datos.

Lección 08: Use @for to display list of items
La nueva sintaxis de control de flujo @for se utiliza para iterar sobre colecciones en las plantillas.

Reemplaza a la directiva *ngFor tradicional, ofreciendo un mejor rendimiento y una sintaxis más clara.

La cláusula track es obligatoria y ayuda a Angular a optimizar las actualizaciones del DOM.

Permite renderizar dinámicamente una lista de componentes a partir de un array de datos.

Cada elemento de la iteración se puede pasar como un @Input() al componente hijo.

Lección 09: Add a service to the application
Un servicio es una clase diseñada para encapsular lógica de negocio o datos que pueden ser compartidos.

La "inyección de dependencias" es el mecanismo que usa Angular para proporcionar instancias de servicios a los componentes.

@Injectable({ providedIn: 'root' }) hace que el servicio esté disponible como una única instancia para toda la aplicación.

Separar la obtención de datos en un servicio mantiene los componentes limpios y enfocados en la presentación.

Los componentes no crean servicios, sino que los "solicitan" a través de su constructor o la función inject().

Lección 10: Add routing
El archivo routes.ts define las reglas de navegación de la aplicación, mapeando una URL a un componente.

Las rutas pueden incluir parámetros dinámicos (ej: details/:id) para mostrar contenido específico.

provideRouter en app.config.ts es la forma moderna de registrar las rutas en una aplicación standalone.

La directiva [routerLink] puede aceptar un array para construir rutas complejas con parámetros.

Para que [routerLink] funcione en un componente standalone, este debe importar RouterModule.

Lección 11: Get route parameters
El servicio ActivatedRoute proporciona información sobre la ruta que está activa en ese momento.

Se puede inyectar en un componente para acceder a los parámetros, query params y otros datos de la URL.

route.snapshot.params['id'] permite leer el valor de un parámetro dinámico de la ruta de forma síncrona.

El valor obtenido de la URL siempre es un string, por lo que se debe convertir si se espera un número.

Este mecanismo permite que el componente de detalles cargue los datos correspondientes al id de la URL.

Lección 12: Add forms to the application
Angular ofrece ReactiveFormsModule para manejar formularios de una manera más robusta y escalable.

FormGroup representa el formulario completo, y FormControl representa un campo individual dentro del mismo.

La directiva [formGroup] vincula el modelo del formulario en el .ts con la etiqueta <form> en el .html.

formControlName vincula cada FormControl con su respectivo elemento <input>.

El evento (submit) en el formulario permite ejecutar una función cuando el usuario lo envía.

Lección 13: Add search functionality
Las "variables de referencia de plantilla" (ej: #filter) permiten acceder a un elemento del DOM directamente en la plantilla.

Se puede capturar el evento (click) de un botón para ejecutar una función en el componente.

La lógica de filtrado de datos se implementa en el componente, modificando una lista que se muestra en la plantilla.

Es una buena práctica mantener una lista original de datos y una lista filtrada para la vista.

La interfaz de usuario reacciona a las acciones del usuario, actualizando la vista dinámicamente.

Lección 14: Add HTTP communication
Las operaciones de red, como las peticiones HTTP, son asíncronas y no bloquean la aplicación.

fetch es una API nativa del navegador para realizar peticiones HTTP, y devuelve un objeto Promise.

Una Promise representa un valor que estará disponible en el futuro (los datos de la respuesta del servidor).

async/await es una sintaxis más moderna y legible para trabajar con promesas, evitando el anidamiento de .then().

La lógica para comunicarse con una API externa debe residir en un servicio, no en el componente.

Lección 15 (Bonus): Mejorando los Estilos
Los estilos globales que afectan a toda la aplicación se definen en src/styles.css.

Cada componente tiene su propio archivo .css para estilos encapsulados que solo se aplican a él.

El uso de variables de CSS (:root { --primary-color: #...; }) facilita la creación de un tema consistente y fácil de modificar.

Flexbox y Grid son herramientas de CSS modernas para crear diseños complejos y responsivos.

Las @media queries permiten aplicar estilos diferentes según el tamaño de la pantalla, adaptando la app a móviles.
