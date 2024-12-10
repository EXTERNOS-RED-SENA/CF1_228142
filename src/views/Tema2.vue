<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de Incidentes
    
    .row
      .col-md-auto.d-none.d-md-block
        figure
          img(src="@/assets/curso/tema2/1.svg")
      .col-md
        p.mb-0 Es el proceso estructurado mediante el cual se identifican, registran, y resuelven los problemas reportados por los clientes de forma ágil y eficiente. Este proceso busca restaurar la funcionalidad del equipo en el menor tiempo posible, minimizando el impacto para el cliente y asegurando que las interrupciones sean resueltas de forma organizada. La buena gestión de incidentes contribuye a la satisfacción y fidelización del cliente, permite al equipo técnico acumular un historial que ayuda a anticipar y resolver problemas similares en el futuro, optimizando así el proceso de soporte.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Clasificación y ciclo de vida de incidentes
    
    .row
      .col-lg(data-aos="fade-right")
        p Es un proceso fundamental en el soporte técnico y atención al cliente en la reparación de equipos, ya que permite organizar y gestionar las solicitudes de manera eficiente desde su inicio hasta su resolución. Este proceso comienza con la clasificación del incidente, que implica evaluar la gravedad, urgencia, tipo de equipo afectado y el impacto en el cliente. Con esta clasificación, los incidentes se pueden agrupar en niveles de prioridad, lo cual ayuda al equipo técnico a dar una respuesta adecuada y a optimizar los recursos.
        .cajon.color-primario.p-4.mt-4(style="background-color:#D7EED6;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema2/2.svg")
            .col-md
              p.mb-0 El ciclo de vida del incidente incluye varias etapas que se desarrollan secuencialmente para garantizar una solución efectiva. Inicia con la creación del incidente, donde se registra la solicitud del cliente. Luego, pasa a la clasificación y asignación, donde se determina el nivel de prioridad y se asigna al técnico adecuado. Posteriormente, en la fase de diagnóstico y resolución, el técnico identifica la causa del problema y ejecuta las acciones necesarias para solucionarlo. Si el problema es complejo, puede requerir escalamiento a un nivel de soporte superior.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/3.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Tabla 1.
      span Clasificación del incidente
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        caption.fw-normal #[strong Fuente.] OIT, 2024.
        thead
          tr.text-center(style="background-color:#EFE8F7;")
            th Clasificación del Incidente
            th Gravedad
            th Urgencia
            th Tipo de Equipo Afectado
            th Impacto en el Cliente
        tbody
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") 1. Falla crítica en equipo principal
            td.text-center Alta
            td.text-center Muy alta
            td.text-center Servidor o equipo de red central
            td.text-center #[strong Alto:] afecta toda la operación del cliente
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") 2. Problema de #[em software] recurrente
            td.text-center Media
            td.text-center Alta
            td.text-center Ordenador personal
            td.text-center #[strong Medio:] afecta la productividad individual
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") 3. Daño físico en dispositivo secundario
            td.text-center Baja
            td.text-center Media
            td.text-center Monitor, teclado u otros periféricos
            td.text-center #[strong Bajo:] no interfiere en las funciones esenciales
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") 4. Interrupción en red local
            td.text-center Alta
            td.text-center Muy alta
            td.text-center Equipo de red (#[em router, switch])
            td.text-center #[strong Alto:] afecta conexión y productividad general
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") 5. Error en aplicación específica
            td.text-center Media
            td.text-center Media
            td.text-center #[em Software] de gestión o especializado
            td.text-center #[strong Medio:] limita tareas específicas del usuario
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") 6. Fallo de conexión a internet
            td.text-center Alta
            td.text-center Alta
            td.text-center #[em Modem] o #[em router]
            td.text-center #[strong Alto:] interrumpe acceso a servicios en línea
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") 7. Actualización pendiente
            td.text-center Baja
            td.text-center Baja
            td.text-center Sistema operativo o #[em software]
            td.text-center #[em Bajo:] no afecta operaciones actuales del cliente
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") 8. Problema con respaldo de datos
            td.text-center Alta
            td.text-center Media
            td.text-center Sistema de almacenamiento
            td.text-center #[strong Alto:] riesgo potencial para la seguridad de datos
    
    .row.mt-4
      .col-md-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/4.svg")
      .col-md(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Durante todo el ciclo de vida, #[strong es fundamental la comunicación con el cliente, manteniéndolo informado del estado del incidente y los tiempos estimados de resolución]. Una vez solucionado, se realiza la validación y cierre, donde se confirma que el problema se ha resuelto satisfactoriamente y se registra la intervención en el sistema para futuras referencias.
    
    p.mt-4(data-aos="fade-right") Una gestión adecuada del ciclo de vida de los incidentes asegura la satisfacción del cliente, permite al equipo técnico aprender de cada caso, mejorar la calidad del servicio y optimizar los tiempos de respuesta, contribuyendo a un servicio más eficiente y proactivo.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Métodos de resolución y #[em troubleshooting]
    
    p(data-aos="fade-right") Estos métodos son herramientas en el soporte técnico y atención al cliente en la reparación de equipos, ya que permiten identificar y solucionar problemas de manera precisa y eficiente. Estos métodos incluyen pasos estructurados que ayudan al técnico a determinar rápidamente la causa raíz de una falla y a aplicar las soluciones necesarias. A continuación, se encuentran las definiciones de cada una:

    TabsC.color-acento-contenido.mt-4
      .py-3.py-md-4(titulo="Métodos de resolución")
        .row.col-xl-11.m-auto.p-4
          .col-lg-5.col-md-8.col-9.m-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/5.png')
          .col-lg-7
            p.fw-bold Métodos de resolución: 
            p Son los procedimientos y técnicas estructuradas que permiten resolver problemas específicos de manera eficiente y satisfactoria. Estos métodos se basan en el conocimiento acumulado y en buenas prácticas para abordar distintas fallas, priorizando soluciones rápidas y efectivas. Cada método de resolución sigue pasos predeterminados que facilitan al técnico el proceso de identificar y aplicar la corrección adecuada. La finalidad es restablecer el funcionamiento óptimo del equipo de la forma más rápida y segura posible, minimizando el impacto en el cliente.
      .py-3.py-md-4(titulo="<em>Troubleshooting</em>")
        .row.col-xl-11.m-auto.p-4
          .col-lg-5.col-md-8.col-9.m-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/6.png')
          .col-lg-7
            p.fw-bold #[em Troubleshooting]:
            p Es un proceso analítico utilizado para diagnosticar la causa raíz de un problema técnico y determinar la mejor solución. En el contexto del soporte técnico, este proceso implica una serie de pasos que el técnico sigue para aislar el origen del fallo en el equipo. Inicia con la recopilación de información detallada y, generalmente, incluye pruebas secuenciales, observación del comportamiento del equipo y eliminación de posibles causas hasta encontrar el verdadero origen del problema. El #[em troubleshooting] permite una identificación precisa de fallas, logrando una resolución más efectiva y reduciendo la posibilidad de recurrencia del problema.
    
    p.mt-5(data-aos="fade-right") Como se mencionó anteriormente, estos métodos incluyen pasos estructurados, así:

    .cont_2_1.mt-4.pb-5
      .col-xl-10.m-auto(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Recopilación de información")
            p El primer paso en el #[em troubleshooting] es obtener todos los detalles del problema mediante preguntas específicas al cliente y una revisión inicial del equipo. Esta información proporciona el contexto necesario y evita diagnósticos erróneos.
          .row.col-xl-11.m-auto(titulo="Reproducción del problema")
            p En la medida de lo posible, el técnico intenta replicar el problema para observar directamente su naturaleza. Esto permite ver el comportamiento del equipo y descartar posibles causas externas, como fallos de configuración o uso incorrecto.
          .row.col-xl-11.m-auto(titulo="Análisis de componentes y diagnóstico paso a paso")
            p El técnico realiza pruebas en cada componente o sistema relacionado con el fallo. Al verificar uno por uno los posibles puntos de falla, se identifican con precisión los elementos defectuosos y se reduce el tiempo de reparación.
          .row.col-xl-11.m-auto(titulo="Consultas a bases de conocimiento y documentación técnica ")
            p Si el problema es complejo, el técnico consulta bases de datos o guías técnicas que incluyen soluciones previas y patrones comunes de fallas. Esto agiliza la identificación de soluciones probadas y disminuye la posibilidad de aplicar métodos inefectivos.
          .row.col-xl-11.m-auto(titulo="Pruebas de soluciones graduales")
            p En esta fase, el técnico aplica soluciones comenzando por las menos invasivas o aquellas que no requieren modificaciones complejas del equipo. Si la primera solución no es efectiva, se pasa a la siguiente hasta resolver el problema.
          .row.col-xl-11.m-auto(titulo="Escalamiento en casos complejos")
            p Si el técnico no puede solucionar el problema con las técnicas iniciales, se activa el proceso de escalamiento, en el cual el caso se transfiere a un nivel superior de soporte o a un especialista. Este paso es crítico para resolver incidentes avanzados sin afectar el tiempo de respuesta.
          .row.col-xl-11.m-auto(titulo="Prueba de funcionamiento y validación de solución")
            p Una vez que el problema ha sido resuelto, el técnico realiza pruebas adicionales para confirmar la efectividad de la solución aplicada y que no existan problemas residuales.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3 Tiempos de atención y #[em SLAs]
    
    p(data-aos="fade-right") En el soporte técnico y atención al cliente para la reparación de equipos, los Tiempos de atención y los Acuerdos de Nivel de Servicio (#[em SLAs], por sus siglas en inglés: #[em Service Level Agreements]) son parámetros que establecen los estándares de calidad, eficiencia y responsabilidad en el servicio. Es importante tener en cuenta los conceptos de cada una de estos, así:

    .row.mt-4
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="850")
        .h-100.p-4(style="background-color:#B0DCAD;border-radius:10px;")
          figure.mb-3
            img.d-inline(src="@/assets/curso/tema2/8.svg" style="max-width:90px;")
          p.mb-0 #[strong Tiempos de atención:] Los tiempos de atención refieren al tiempo máximo que el equipo de soporte tarda en responder a la solicitud inicial del cliente desde el momento en que se recibe el reporte del incidente. Estos tiempos se dividen en diferentes niveles de prioridad (alta, media, baja), permitiendo que los problemas más críticos se atiendan con rapidez y que los incidentes de menor impacto tengan tiempos de respuesta más flexibles. Este enfoque permite una asignación eficiente de recursos y mantiene una experiencia de servicio positiva para el cliente.
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="850")
        .h-100.p-4(style="background-color:#D7EED6;border-radius:10px;")
          figure.mb-3
            img.d-inline(src="@/assets/curso/tema2/9.svg" style="max-width:90px;")
          p.mb-0 Acuerdos de Nivel de Servicio (#[em SLAs]): Los #[em SLAs] son contratos formales que definen los compromisos y expectativas de servicio entre el proveedor y el cliente. Estos acuerdos especifican los tiempos de respuesta y resolución máximos según el tipo de incidente, y garantizan que el soporte técnico cumpla con los estándares internacionales de calidad. 
    
    p.mt-4.mt-lg-5(data-aos="fade-up") Los #[em SLAs] pueden incluir métricas de desempeño como:

    .row.mt-4.justify-content-center
      .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="850")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop')
          .tarjeta.d-flex.align-content-center.flex-wrap(style="background-color:#73C8E2;")
            .p-4
              p.mb-0 #[strong Tiempo de respuesta:] el tiempo inicial para contactar al cliente tras recibir el incidente.
      .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="850")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop')
          .tarjeta.d-flex.align-content-center.flex-wrap(style="background-color:#73C8E2;")
            .p-4
              p.mb-0 #[strong Tiempo de resolución:] el periodo estimado para resolver el problema y restablecer el funcionamiento normal del equipo.
      .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="850")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop')
          .tarjeta.d-flex.align-content-center.flex-wrap(style="background-color:#73C8E2;")
            .p-4
              p.mb-0 #[strong Tiempo de escalamiento:] el tiempo máximo para derivar el incidente a niveles superiores de soporte si no se resuelve en el nivel inicial.


    .col-xl-8.m-auto.col-lg-10.mt-4.mt-lg-5
      .cajon.color-primario.p-4(style="background-color:#D7EED6;" data-aos="fade-up" data-aos-duration="850")
        .row
          .col-md-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema2/13.svg")
          .col-md
            p.mb-0.fw-bold Los SLAs también suelen incluir cláusulas de penalización en caso de incumplimiento, motivando así al proveedor de soporte a cumplir con los tiempos establecidos y a ofrecer un servicio confiable y de alta calidad. Alinear estos tiempos y acuerdos con estándares internacionales permite que el servicio de soporte técnico sea consistente, transparente y ajustado a las expectativas del cliente, favoreciendo una experiencia de usuario satisfactoria.



</template>

<script>
import TabsC from '../bootstrap/TabsC.vue'
export default {
  name: 'Tema2',
  components: {
    TabsC,
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
