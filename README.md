# instatech

# Historias de usuarios

## usuarios
Como usuario quiero poder registrarme, iniciar session, tener acceso a productos en stock para comprarlos y un historial de productos comprados, quiero tener consistencia de mis datos personales, soporte de usuario si presento algun problema con la aplicacion, calificar productos y tecnicos que den servicio a las instalaciones de los productos y/o soporte a esto, comentar productos y tecnicos, al realizar compras tener la posibilidad de pedir una instalacion y un soporte tecnico si en un futuro el producto falla.

### criterios de aceptacion de usuarios

1. **Registro de usuario**:
    - El usuario puede crear una cuenta proporcionando su nombre, correo electrónico, numero y una contraseña.
    - La cuenta debe ser confirmada mediante un enlace enviado al correo electrónico del usuario.
    - Se deben manejar adecuadamente los errores de registro (por ejemplo, si el correo ya está en uso).

2. **Inicio de sesión**:
    - El usuario puede iniciar sesión con su nombre y/o correo electrónico y contraseña.
    - Se debe proporcionar una opción para recuperar la contraseña en caso de que el usuario la olvide.

3. **Acceso a productos en stock**:
    - Visualización de productos.El usuario puede ver una lista de productos disponibles en stock.
    - Al realizar compra de un producto debo tener un formulario que incluya(dirreccion, metodo de pago, incluir instalacion)
    - **Detalles del producto**:
        1. El usuario puede ver detalles individuales de cada producto, incluyendo descripciones, precios, comentarios, calificacion y stock disponible.

4. **Perfil del usuario**:
    - El usuario puede ver y editar su información personal (nombre, correo electrónico, dirección, etc.).
    - Los cambios en los datos personales se deben guardar y reflejar correctamente en la cuenta del usuario.
    - El usuario debe poder ver un historial de productos comprados donde puede acceder denuevo a la punblicacion con la informacion de este siempre y cuando este aun disponible y pedir un soporte tecnico.
    - El usuario debe poder ver un historial de tecnicos que han le han realizado soporte o instalacion

5. **Soporte de usuario**:
    - El usuario puede acceder a una sección de soporte donde pueda enviar consultas o problemas.
    - El usuario recibe una confirmación de que su consulta ha sido enviada y recibida.

6. **Calificación de productos y técnicos**:
    - El usuario puede calificar los productos que ha comprado.
    - Las calificaciones deben reflejarse en la puntuación general del producto.
    - El usuario puede calificar a los técnicos que han realizado instalaciones o proporcionado soporte.
    - Las calificaciones deben reflejarse en la puntuación general del técnico.

7. **Comentarios de productos y técnicos**:
    - El usuario puede dejar comentarios sobre los productos comprados.
    - El usuario puede dejar comentarios sobre los técnicos.
    - Los comentarios deben ser visibles para otros usuarios.

8. **Instalación y soporte técnico al realizar compras**:
    - Al realizar una compra, el usuario puede solicitar la instalación del producto.
    - La opción de instalación debe ser clara y fácil de seleccionar durante el proceso de compra.
    - Al realizar una compra, el usuario puede solicitar soporte técnico futuro.
    - La opción de soporte técnico debe ser clara y fácil de seleccionar durante el proceso de compra.

9. **Historial de soporte**:
    - El usuario puede ver un historial de solicitudes de soporte técnico y sus estados.
    - El usuario debe recibir actualizaciones sobre el estado de sus solicitudes de soporte técnico.


## Encarpetado

1. src
    - auth
    - users
    - products
    - orders
    - support
    - common
    - database

## tecnicos
Como tecnico quiero poder registrarme e iniciar session por medio de una seccion trabaja con nosotros donde demuestre consistencia con mis conocimientos y un contrato con terminos y condiciones, quiero que la aplicacion me muestre notificaciones de instalaciones de productos o servicios tecnicos que vayan acorde con mis conocimientos, personalizar mi perfil y poder decidir si quiero o no tomar los trabajos, ademas cada en la aplicacion quiero una opcion de fuera de servicio o en servicio para evitar notificaciones cuando no estoy trabajando.

### criterios de aceptacion de tecnicos

1. **Trabaja con Nosotros**:
    - El técnico puede acceder a una sección dedicada en la aplicación llamada "Trabaja con Nosotros".
    - Esta sección debe incluir información sobre los requisitos y beneficios de trabajar como técnico.

2. **Registro**:
    - El técnico puede registrarse completando un formulario con sus datos personales, conocimientos y experiencia.
    - El formulario debe incluir una sección para adjuntar documentos de respaldo (por ejemplo, certificaciones).
    - El técnico debe aceptar los términos y condiciones antes de poder registrarse.
    - La aplicación debe validar los datos ingresados y proporcionar retroalimentación si algún campo es incorrecto o está incompleto.
    - El técnico debe recibir una confirmación de registro exitoso.

3. **Inicio de session**
    - El técnico registrado puede iniciar sesión utilizando su nombre y/o correo electrónico y contraseña.
    - La aplicación debe validar las credenciales y permitir el acceso a la cuenta del técnico.

4. **Notificaciones de Instalaciones y Servicios Técnicos**
    - La aplicación debe enviar notificaciones al técnico sobre instalaciones de productos y servicios técnicos disponibles que coincidan con sus conocimientos.
    - Las notificaciones deben incluir detalles sobre el trabajo, como ubicación, fecha y requisitos específicos.

5. **Personalización de Notificaciones**:
    - El técnico puede configurar sus preferencias de notificaciones para recibir solo las que sean relevantes para sus habilidades y disponibilidad.

6. **Personalización del Perfil**:
    - El técnico puede acceder a una sección de perfil donde puede ver y editar su información personal, experiencia y conocimientos.
    - El técnico puede actualizar su foto de perfil y otros detalles relevantes.

7. **Decisión sobre Trabajos**:
    - La aplicación debe permitir al técnico aceptar o rechazar trabajos propuestos.
    - Al aceptar un trabajo, el técnico debe confirmar su disponibilidad y compromiso.
    - Al rechazar un trabajo, el técnico puede proporcionar un motivo opcional para el rechazo.

8. **Estado de Servicio**:
    - Opción "Fuera de Servicio" o "En Servicio":
    - El técnico puede cambiar su estado a "Fuera de Servicio" o "En Servicio" desde su perfil o configuración de la cuenta.
    - Cuando el técnico está en estado "Fuera de Servicio", no debe recibir notificaciones de nuevos trabajos.
    - Al cambiar a estado "En Servicio", el técnico debe comenzar a recibir notificaciones nuevamente.
9. **Consistencia y Validación de Conocimientos**:
    - La aplicación debe verificar los conocimientos y experiencia del técnico mediante un proceso de validación (por ejemplo, revisión de documentos adjuntos o entrevistas).
    - Solo los técnicos validados deben recibir notificaciones de trabajos relevantes.

10. **Contrato y Términos y Condiciones**:
    - El técnico debe aceptar un contrato con términos y condiciones antes de poder recibir notificaciones de trabajos.
    - El contrato debe ser accesible desde el perfil del técnico para consulta en cualquier momento.

## provedores
Como provedor quiero poder registrarme a iniciar sesion por medio de una seccion de trabaja con nosotros donde ponga datos de mi empresa para demostrar consistencia de los productos con un terminos y condiciones, quiero que la aplicacion luego de que me verifique y me den permiso para mostrar mis productos me den un porcentaje de ganancia del producto y quiero poder actualizar los mismos.

### criterios de aceptacion de provedores

1. **Trabaja con Nosotros**:
    - El proveedor puede acceder a una sección dedicada en la aplicación llamada "Trabaja con Nosotros".
    - Esta sección debe incluir información sobre los requisitos y beneficios de trabajar como proveedor.

2. **Registro**:
    - El proveedor puede registrarse completando un formulario con los datos de su empresa, incluyendo nombre, dirección, productos ofrecidos, y otra información relevante.
    - El formulario debe incluir una sección para adjuntar documentos de respaldo (por ejemplo, certificaciones de productos).
    - El proveedor debe aceptar los términos y condiciones antes de poder registrarse.
    - La aplicación debe validar los datos ingresados y proporcionar retroalimentación si algún campo es incorrecto o está incompleto.
    - El proveedor debe recibir una confirmación de registro exitoso y notificación de que su cuenta está en proceso de verificación.

3. **Verificación y Permiso para Mostrar Productos**:
    - La aplicación debe tener un proceso para verificar los datos y documentos proporcionados por el proveedor.
    - El proveedor debe recibir una notificación una vez que su cuenta haya sido verificada y aprobada.

4. **Permiso para Mostrar Productos**:
    - Solo los proveedores verificados deben tener permiso para listar y mostrar sus productos en la aplicación.
    - El proveedor debe recibir una notificación de aprobación y acceso a una sección donde puede gestionar sus productos.

5. **Gestión de Productos**:
    - El proveedor debe tener acceso a una sección de la aplicación donde puede agregar, editar y eliminar productos.
    - El formulario de adición de productos debe permitir ingresar detalles como nombre, categoría, precio, y descripción del producto.
    - El proveedor debe poder actualizar la información de sus productos en cualquier momento.
    - La aplicación debe reflejar los cambios en tiempo real para los usuarios finales.

6. **Porcentaje de Ganancia**:
    - La aplicación debe calcular automáticamente el porcentaje de ganancia del proveedor por cada venta realizada.
    - El proveedor debe poder ver un desglose de sus ganancias por producto vendido en una sección dedicada.
    - El proveedor debe tener acceso a un panel donde puede ver sus ganancias acumuladas, ventas recientes, y estadísticas de productos.
    - La información debe ser clara y fácilmente accesible.

7. **Términos y Condiciones**:
    - El proveedor debe aceptar un contrato con términos y condiciones antes de poder listar sus productos.
    - El contrato debe estar accesible desde el perfil del proveedor para consulta en cualquier momento.

8. **Consistencia y Validación de Datos**:
    - La aplicación debe verificar la consistencia y autenticidad de los datos proporcionados por el proveedor.
    - Los proveedores deben recibir notificaciones si se requiere información adicional para completar la verificación.

9. **Notificaciones y Actualizaciones**:
    - El proveedor debe recibir notificaciones sobre el estado de su registro, la aprobación de sus productos y cualquier cambio en las políticas de la aplicación.
    - La aplicación debe enviar notificaciones oportunas sobre ventas realizadas y actualizaciones de estado de productos.

## administradores
Como administrador quiero poder tener una cuenta en donde reciba cada peticion de trabaja con nosotros y tenga un perfil privado que solo puedan ver otros administradores, quiero permitir o denegar acceso a usuarios,tecnicos u provedores segun vea necesario y decidir si permitir o no que alguien use la aplicacion ademas me gustaria poder generar reportes de lo que hago que se envien por email o que esten en una seccion de administradosres donde todos podamos ponernos deacuerdo y dialogar con estos

### criterios de aceptacion administrador

1. **Registro e inicio de session**
    -Un administrador debe tener la posibilidad de crear cuentas exclusivas para administradores.
    - Las cuentas de administradores deben ser verificadas y aprobadas por este administrador antes de su activación.

2. **Gestión de Solicitudes de "Trabaja con Nosotros"**:
    - Los administradores deben recibir notificaciones de todas las solicitudes de registro de técnicos y proveedores en la sección "Trabaja con Nosotros".
    - Las solicitudes deben ser accesibles desde un panel de administración para su revisión.

3. **Revisión y Acción sobre Solicitudes:**:
    - Los administradores deben poder revisar los detalles de cada solicitud y tomar decisiones de aprobación o denegación.
    - La acción tomada (aprobación o denegación) debe ser registrada y notificada al solicitante.

4. **Gestión de Usuarios**:
    - Los administradores deben tener la capacidad de permitir o denegar el acceso a técnicos y proveedores.
    - Deben poder revocar el acceso a cualquier cuenta existente en cualquier momento, si se considera necesario.

5. **Gestión de Cuentas**:
    - Los administradores deben poder ver, editar y eliminar cuentas de usuarios, técnicos y proveedores desde el panel de administración.

6. **Perfil Privado de Administradores**:
    - Cada administrador debe tener un perfil privado visible solo para otros administradores.
    - El perfil debe incluir información básica y una sección de contacto interna.

7. **Generación de Reportes**:
    - Los administradores deben poder generar reportes detallados de sus actividades, incluyendo aprobaciones, denegaciones y cambios realizados en las cuentas de usuarios.
    - Los reportes deben poder enviarse por email o guardarse en una sección dedicada para administradores.

8. **Comunicación y Coordinación entre Administradores**:
    - Debe haber una sección dedicada para la comunicación entre administradores.
    - Los administradores deben poder subir y compartir reportes en esta sección.

9. **Sistema de Mensajería Interna**:
    - Los administradores deben tener un sistema de mensajería interna para discutir temas y decisiones relacionadas con la gestión de la aplicación.
    - La mensajería debe permitir conversaciones individuales y en grupo.

10. **Notificaciones y Actualizaciones**:
    - Los administradores deben recibir notificaciones en tiempo real sobre nuevas solicitudes, decisiones pendientes y cualquier otra actividad relevante.
    - Las notificaciones deben ser claras y específicas para cada tipo de actividad.

11. **Seguridad y Privacidad**:
    - El acceso a la sección de administración debe estar protegido con autenticación de dos factores para garantizar la seguridad.
    - Las acciones realizadas por los administradores deben ser registradas y auditadas para mantener la transparencia y responsabilidad.

12. **Privacidad de Datos**:
    - La información en los perfiles de los administradores y las decisiones tomadas deben ser accesibles solo para otros administradores.