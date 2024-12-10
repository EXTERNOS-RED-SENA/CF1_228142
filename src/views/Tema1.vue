<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos del servicio técnico
    
    .row.mt-4(data-aos="fade-up" data-aos-duration="800")
      .col-lg
        p.mb-0 En el contexto del soporte técnico y atención al cliente en la reparación de equipos, los fundamentos del servicio técnico abarcan los principios que aseguran una interacción efectiva con los clientes. El servicio técnico va más allá de la reparación; implica el compromiso de proporcionar soluciones eficientes, establecer confianza y garantizar una experiencia positiva para el cliente. Los protocolos de atención al cliente establecen la base de una comunicación clara y respetuosa, ayudando a los técnicos a gestionar las necesidades de los clientes de manera estructurada y empática. #[strong La gestión de peticiones y el escalamiento son fundamentales para resolver problemas complejos o urgentes, permitiendo que los casos críticos sean atendidos por personal con el nivel de especialización adecuado]. La documentación y trazabilidad del servicio aseguran un registro preciso de las solicitudes, el diagnóstico, las acciones tomadas y los resultados. Esto facilita el seguimiento y control de calidad, proporciona un historial valioso para futuras intervenciones, ayudando al equipo técnico a optimizar tiempos y recursos.
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/1.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Protocolos de atención al cliente
    

    .row
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema1/2.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Recepción y diagnóstico inicial")
            p Al recibir un equipo para reparación, el técnico debe realizar un diagnóstico preliminar en presencia del cliente. Este procedimiento incluye documentar los síntomas descritos, inspeccionar el equipo y brindar una estimación inicial de tiempo y costo. Es fundamental que el cliente comprenda el alcance del trabajo desde el inicio y que se aclaren sus expectativas.
          .row.col-xl-11.m-auto(titulo="Comunicación clara y transparente")
            p Durante cada interacción, el técnico debe usar un lenguaje accesible, evitando tecnicismos excesivos, y ser transparente respecto a los procedimientos, tiempos y costos. Es importante que el cliente entienda el proceso, sus posibles resultados y cualquier limitación técnica que pueda existir.
          .row.col-xl-11.m-auto(titulo="Actualización regular y proactiva")
            p El técnico debe proporcionar actualizaciones periódicas sobre el estado de la reparación, especialmente si se encuentra con problemas imprevistos o si hay retrasos. El objetivo es que el cliente siempre esté informado y no necesite buscar información por cuenta propia, fomentando así una comunicación proactiva y la satisfacción del cliente.
          .row.col-xl-11.m-auto(titulo="Manejo de incidencias y escalamiento")
            p Si el técnico se encuentra con una falla compleja o fuera de su ámbito, debe informar al cliente y escalar el caso a un especialista o equipo avanzado. Este proceso debe seguirse de inmediato para no interrumpir el flujo de trabajo y garantizar que el cliente reciba la mejor atención posible sin demoras innecesarias.
          .row.col-xl-11.m-auto(titulo="Entrega y verificación de satisfacción")
            p En la entrega del equipo reparado, el técnico debe realizar una prueba funcional frente al cliente para verificar el estado del equipo y explicar el trabajo realizado. También debe responder cualquier pregunta y solicitar una confirmación de satisfacción, dejando claro que el soporte está disponible para cualquier necesidad futura.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Gestión de peticiones y escalamiento
    
    .cont_1_1
      .row.p-relative
        .col-lg(data-aos="fade-right")
          p.mb-0 Este proceso organiza y prioriza las solicitudes de los clientes, permitiendo un flujo de trabajo ordenado y eficiente que asegura que cada caso reciba el nivel de atención adecuado. A través de una clasificación inicial y una correcta documentación, el equipo técnico puede determinar si una petición puede ser resuelta rápidamente o si requiere escalamiento a un nivel superior de soporte. Este sistema optimiza los tiempos de respuesta y la calidad de las soluciones, contribuye a una experiencia positiva para el cliente al mantenerlo informado y atendido en cada etapa. La gestión asertiva de peticiones y escalamiento permite que el equipo técnico responda de manera proactiva y eficiente alineando las expectativas del cliente con los estándares de la empresa.
          p.mb-0 A continuación, se encuentra el paso a paso para realizar la gestión de peticiones y escalamiento:
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/4.svg")
    
      .row.mt-5
        .col-lg-3.d-none.d-lg-block.p-relative(data-aos="fade-right")
          figure 
            img(src="@/assets/curso/tema1/5.png")
        .col-lg-9(data-aos="zoom-in")
          .cont_1_2.p-4.p-xl-5
            .tarjeta.bg-white
              SlyderA
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Recepción de la solicitud.
                    p.mt-4 Registrar la petición del cliente en el sistema de soporte, asegurándose de anotar los detalles del problema descrito y la urgencia percibida. Confirmar con el cliente los datos para evitar malentendidos.
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Clasificación de la petición. 
                    p.mt-4 Evaluar el caso para clasificarlo según su prioridad y complejidad. Para ello, se deben considerar factores como la urgencia, el tipo de equipo, la posible afectación para el cliente y el tiempo disponible para resolverlo.
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Asignación Inicial del Caso. 
                    p.mt-4 Asignar la petición a un técnico disponible con el nivel de experiencia adecuado para el tipo de problema presentado. La asignación debe ser rápida y precisa para optimizar los recursos humanos.
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Diagnóstico y documentación inicial. 
                    p.mt-4 El técnico asignado realiza una evaluación preliminar y registra sus observaciones y primeras acciones en el sistema. Si el problema se resuelve en esta etapa, se documenta y se cierra el caso; de lo contrario, se prepara para un posible escalamiento.
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Evaluación de complejidad y escalamiento automático.
                    p.mt-4 Si el problema excede las capacidades del técnico inicial o el caso se considera de alta prioridad, el sistema debe activar un proceso automático de escalamiento, enviándolo a un nivel superior de soporte sin demoras.
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Notificación y actualización del cliente. 
                    p.mt-4 Informar al cliente sobre el estado de su petición, especialmente si se ha escalado el caso. Es importante que el cliente conozca que su solicitud está siendo manejada por personal más especializado.
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Revisión por el técnico especializado. 
                    p.mt-4 El técnico de nivel superior revisa la documentación del caso, realiza un diagnóstico más avanzado y ejecuta las acciones necesarias para resolver el problema. Si es necesario, este técnico puede recurrir a soporte adicional o herramientas avanzadas.
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Comunicación interdepartamental (si aplica). 
                    p.mt-4 En casos complejos que requieren apoyo de otros departamentos (como piezas de repuesto o soporte externo), coordinar de inmediato con dichas áreas para minimizar tiempos de espera y asegurar los recursos necesarios.
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Resolución del problema y validación de satisfacción. 
                    p.mt-4 Una vez resuelto el problema, el técnico realiza una prueba para asegurar la efectividad de la reparación y confirma con el cliente que el servicio ha cumplido sus expectativas, respondiendo cualquier duda o inquietud.
                .row.p-4.ps-5.pe-5
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/7.svg')
                  .col-lg-7(style="place-self:center;")
                    p.fw-bold Cierre de Caso y Registro Final. 
                    p.mt-4 Documentar todos los detalles de la resolución, actualizando el historial del equipo y de la cuenta del cliente. Finalizar con una notificación de cierre al cliente y registrar cualquier retroalimentación para mejorar el proceso de soporte en el futuro.
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 1.
      span Proceso para la gestión de peticiones y escalamiento
    figure(data-aos="zoom-in")
      img(src="@/assets/curso/tema1/8.svg" alt="La Figura 1 se denomina «Proceso para la gestión de peticiones y escalamiento» y presenta esta orientación a partir de diez acciones desde la recepción de la solicitud hasta el cierre del caso.")
    figcaption.fw-normal.mt-1 #[strong Fuente:] OIT, 2024.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_3 1.3 Documentación y trazabilidad del servicio
    
    .row
      .col-lg(data-aos="fade-right")
        .row
          .col-md-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema1/9.svg")
          .col-md
            p.mb-0 Es una práctica que garantiza un registro detallado y preciso de cada interacción, diagnóstico y acción realizada a lo largo del proceso de reparación. Desde el momento en que un cliente presenta su equipo para revisión, cada aspecto del servicio se documenta cuidadosamente: los síntomas reportados, el diagnóstico inicial, las decisiones de reparación y las intervenciones técnicas realizadas. Esta documentación es fundamental no solo para el seguimiento interno, sino también para facilitar una comunicación transparente con el cliente, quien puede consultar en cualquier momento el estado y progreso de su equipo.
        .p-4.mt-4(style="background-color:#E2F4F9;border-radius:10px;")
          p.mb-0 La trazabilidad permite que el historial de cada equipo quede registrado, lo cual es invaluable en caso de futuras solicitudes. Con un historial accesible, los técnicos pueden identificar patrones recurrentes, mejorar los tiempos de diagnóstico y anticipar posibles fallas. Además, la trazabilidad contribuye a la mejora continua del servicio, ya que permite analizar la eficiencia de los procedimientos y detectar áreas de oportunidad. En conjunto, la documentación y la trazabilidad fortalecen la confiabilidad del servicio, optimizan la gestión de casos y aseguran que cada intervención esté respaldada por un historial claro y organizado, en beneficio tanto del cliente como del equipo técnico.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/10.png")

    


      
</template>

<script>
import SlyderA from '../bootstrap/SlyderA.vue'
export default {
  name: 'Tema1',
  components: {
    SlyderA,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
