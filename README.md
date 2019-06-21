# EthNote # 
### V1.0.0


## Tabla de Contenido
1. [Herramientas utilizadas](#descripcion)
2. [Descripción de la aplicación web](#descripcion-func)
3. [Funsamentos del producto](#fundamentos)
    1. [Usuario objetivo](#usuario)
    2. [Research](#research)
    3. [Problemas a resolver para el usuario](#problemas)
    4. [User stories](#user-stories)

## <a name="descripcion"></a> Descripción de producto:
- Una web application dirigida a personas/investigadores que quieran emplear una herramienta digital de investigación cualitativa para realizar anotaciones durante el trabajo de campo: un diario de campo digital.

Permite crear diversos proyectos, cada uno de los cuales contará con sus notas de campo específicas, otorgando flexibilidad, gran capacidad de almacenamiento y gestión, al brindar la oportunidad de acceder a notas de manera organizada, sin que nada se pierda.
 
El usuario podrá listar y añadir proyectos, y notas relacionadas a los mismos, pudiendo identificar con facilidad fechas, periodo de campo, lugar de campo y tópicos de su investigación.

- Con esta app, el usuario tendrá a su disposición lo siguiente:
  
    - El usuario puede registrarse 
    - El usuario ingresará email y password para poder acceder a su sesión
    - El usuario puede obtener la vista de todos sus proyectos por título y las notas que lo integran
    - El usuario puede editar un proyecto
    - El usuario puede agregar un proyecto en una nueva vista, poniendo como datos requeridos el tìtulo y temas y como opcionales tópicos y objetivos.
    - El usuario puede agregar una nota en una nueva vista, poniendo como datos requeridos la ubicación y la fecha y como opcional el periodo.
    - El usuario podrá agregar con texto las dos perspectivas etnográficas de la observación participante.
    
    

## <a name="descripcion-func"></a> Descripción funcional: 

- Detalle sobre vistas y navegación.
    - Home
    - Darse de alta en la plataforma mediante un formulario de datos.
    - Acceso a la plataforma mediante un log in
    - Vista de sus proyectos
    - Vista de las notas por proyecto
    - Agregar proyectos
    - Editar proyectos
    - Agregar notas
    - Términos y condiciones. 

- <a name="navegacion"></a> Acerca de la navegación:
    - **Navegación No Lineal**: Uso de tabs para facilitar la navegación del usuario para que sea consistente y fácilmente identificable y que pueda saltar de una sección a otra.
    - Arquitectura de la información simple y clara para que el usuario pueda encontrar con facilidad lo que necesita.

## <a name="fundamentos"></a> Fundamentos del producto:

- ## <a name="usuario"></a> Usuario Objetivo:
    Personas/investigadores que quieran emplear una herramienta digital de investigación cualitativa, para realizar anotaciones durante el trabajo de campo:

- ## <a name="research"></a> Research:
    - Técnica de investigación utilizada: Etnografìas y Focus Group
    - Datos resultantes de la investigación:
        -Los usuarios potenciales son investigadores que realizan trabajo de campo en la ciudad
    
- ### <a name="problemas"></a> Problemas a Resolver para el usuario:
    - Otorga a usuarixs flexibilidad, gran capacidad de almacenamiento y gestión, al brindar la oportunidad de acceder a notas de manera organizada, sin que nada se pierda.


## <a name="user-stories"></a> User-stories ##

- *Lista general de todos las vistas*:
        1. Home
        2. Login Usuario
        3. SignUp Usuario
        4. Lista de proyectos
        5. Agregar Proyectos
        6. Editar nombre de proyecto
        7. Agregar Notas
        8. Proyecto(lista de notas)
        9. Ver el texto de la nota

1. <a name="splash"></a>**User story 1**
    - **User story**: Como usuario requiero de una vista principal que de la bienvenida a la web y permita navegar entre los diversos componentes.
     - **Assumptions**: El usuario podrá visualizar la página principal y tendrá acceso, mediante el login, al resto de las vistas de la web application. El usuario que no se encuentre dado de alta, podrá acceder a la vista de signup. 
     - **Funcionalidad**: 
         • El usuario puede obtener la vista principal y acceder a la vista de login
         • El usuario puede registrarse 
         • El usuario ingresará email y password para poder acceder a su sesión
         
2. <a name="splash"></a>**User story 2**
    - **User story**:Como usuario quiero visualizar una lista de proyectos, así como agregar y borrar proyectos. Además de recibir una notificación sobre un proyecto dado de alta.
     - **Assumptions**: El usuario podrá obtener una vista en donde se muestre los proyectos que ha dado de alta. El Back-end acepta las solicitudes GET, POST y DELETE, que permitirán: mostrar la lista de proyectos que pertenecen al usuario, agregar un nuevo proyecto y borrar uno ya existente, respectivamente.
     - **Funcionalidad**: 
         • El usuario puede obtener la vista de todos sus proyectos por título
         • El usuario puede  borrar  y editar un proyecto
         • El usuario puede agregar un proyecto en una nueva vista, poniendo como datos requeridos el tìtulo y temas y como opcionales tópicos y objetivos.
         • Se enviará un mensaje al dar de alta un proyecto

3. <a name="splash"></a>**User story 3**
    - **User story**:Como usuario podré visualizar un proyecto y las notas que integran el mismo identificadas por lugar y fecha. Así como crear una nueva nota que integre las dos perspectivas etnográficas de la observación participante.
     - **Assumptions**:  El usuario podrá obtener una vista en donde se muestre el nombre del proyecto que ha dado de alta, así como una lista de las notas que lo integran. También podrá agregar y borrar notas. El Back-end acepta las solicitudes GET, POST y DELETE, que permitirán: mostrar la lista de notas, agregar una nueva nota y borrar una ya existente.
     - **Funcionalidad**: 
          • El usuario puede obtener la vista de su proyecto y las notas que lo integran
          • El usuario puede  borrar una nota
          • El usuario puede agregar una nota en una nueva vista, poniendo como datos requeridos la ubicación y la fecha y como opcional el periodo.
          • El usuario podrá agregar con texto las dos perspectivas etnográficas de la observación participante.
          • -El usuario puede agregar fotografías 
   

    
