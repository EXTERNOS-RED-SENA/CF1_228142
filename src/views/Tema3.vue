<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Herramientas de gestión
    
    p(data-aos="fade-up" data-aos-duration="850") Son aplicaciones y sistemas tecnológicos para organizar, monitorear y optimizar el flujo de trabajo en el soporte técnico y atención al cliente en la reparación de equipos. Estas herramientas mejoran la eficiencia operativa, contribuyen a una experiencia de servicio más transparente y satisfactoria para el cliente. Entre las funcionalidades más útiles se encuentran las siguientes:

    .cont_3_1.mt-5.p-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4
        SlyderA.slyder_2(tipo="b")
          .row.p-lg-5
            .col-lg-7.mb-4.mb-lg-0
              h4 Sistema de gestión de #[em tickets]:
              p.mt-4 Permite registrar, asignar y hacer seguimiento de cada incidencia o solicitud de soporte. Los sistemas de #[em tickets] también envían notificaciones automáticas al cliente, manteniéndolo informado sobre el progreso del caso.
            .col-lg-5.col-12.col-md-7.m-auto
              figure
                img(src='@/assets/curso/tema3/1.png')
          .row.p-lg-5
            .col-lg-7.mb-4.mb-lg-0
              h4 Bases de conocimiento y documentación técnica: 
              p.mt-4 Los técnicos pueden consultar estos recursos para diagnosticar y resolver problemas de manera más rápida y precisa, además de identificar patrones de incidentes recurrentes. 
            .col-lg-5.col-12.col-md-7.m-auto
              figure
                img(src='@/assets/curso/tema3/2.png')
          .row.p-lg-5.mb-4.mb-lg-0
            .col-lg-7
              h4 Herramientas de monitoreo remoto: 
              p.mt-4 Permiten al equipo de soporte acceder a los equipos de los clientes de forma remota para realizar diagnósticos y reparaciones. 
            .col-lg-5.col-12.col-md-7.m-auto
              figure
                img(src='@/assets/curso/tema3/3.png')
          .row.p-lg-5
            .col-lg-7
              h4 Análisis y reportes de métricas de desempeño: 
              p.mt-4 Permiten generar reportes sobre métricas, como los tiempos de respuesta y resolución, el volumen de #[em tickets] atendidos y los índices de satisfacción del cliente. Este análisis ayuda al equipo de soporte a identificar áreas de mejora, ajustar recursos según las demandas y garantizar que se cumplen los #[em SLAs]. Además, permite una toma de decisiones informada que impulsa la eficiencia y la calidad del servicio.
            .col-lg-5.col-11.col-m2-7.m-auto
              figure
                img(src='@/assets/curso/tema3/4.png')
          .row.p-lg-5
            .col-lg-7.mb-4.mb-lg-0
              h4 Automatización de procesos de soporte:
              p.mt-4 Mediante la automatización, tareas repetitivas y de menor complejidad, como el escalamiento de incidentes o el envío de notificaciones, se realizan automáticamente.
            .col-lg-5.col-12.col-md-7.m-auto
              figure
                img(src='@/assets/curso/tema3/5.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1 Sistemas #[em Help Desk]
    
    p(data-aos="fade-right") Son plataformas tecnológicas diseñadas para gestionar, organizar y optimizar la atención al cliente y el soporte técnico, especialmente en contextos donde se requiere la reparación de equipos. Estas herramientas centralizan todas las solicitudes de soporte en un solo sistema, permitiendo que el equipo técnico rastree, responda y resuelva problemas de manera ordenada y eficiente. 

    .row.mt-4
      .col-lg(data-aos="fade-right")
        p Cabe resaltar que para el contexto de la reparación de equipos, los sistemas #[em Help-Desk] permiten:
        ol.lista-ol--cuadro.lista-ol--separador.mt-4
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 1
            span #[strong Organizar la carga de trabajo] del equipo técnico al priorizar incidentes según su impacto y urgencia.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 2
            span #[strong Aumentar la precisión y rapidez] en la resolución de problemas gracias a la trazabilidad y la disponibilidad de información histórica sobre el equipo del cliente.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 3
            span #[strong Mejorar la comunicación] con el cliente mediante actualizaciones automáticas sobre el estado de su solicitud y tiempos estimados de resolución.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 4
            span #[strong Asegurar el cumplimiento de los Acuerdos de Nivel de Servicio (#[em SLAs])] mediante recordatorios y funciones de monitoreo, evitando retrasos y garantizando un servicio de alta calidad.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/6.svg")
    
    p.mt-4(data-aos="fade-up") A continuación, se encuentran algunas aplicaciones de estos sistemas, con las características, utilidades, ventajas y desventajas.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Tabla 2.
      span Sistemas #[em Help Desk]
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        caption.fw-normal #[strong Fuente.] OIT, 2024.
        thead
          tr.text-center(style="background-color:#EFE8F7;")
            th Nombre de la aplicación
            th Características
            th Utilidades
            th Ventajas
            th Desventajas
        tbody
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") Zendesk
            td  Plataforma flexible con soporte omnicanal (correo, chat, redes sociales)
            td  Gestión de tickets, base de conocimientos, informes personalizados
            td  Intuitiva, personalizable, se integra con múltiples apps
            td  Costosa para empresas pequeñas; curva de aprendizaje inicial
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") Freshdesk
            td  Interface fácil de usar con múltiples opciones de automatización
            td  Gestión de #[em tickets], #[em chatbot] de IA, análisis de productividad
            td  Escalable, asequible para pymes, excelente soporte
            td  Limitaciones en personalización en planes básicos
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") Zoho Desk
            td  Solución modular con integración a la suite Zoho
            td  Automatización de #[em tickets], gestión de SLA, base de conocimientos
            td  Económica, adecuada para empresas que ya usan Zoho
            td  Integración limitada con apps externas fuera de Zoho
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") Jira Service Management
            td  Ideal para soporte técnico y gestión de proyectos IT
            td  Flujos de trabajo personalizados, integraciones con DevOps
            td  Excelente para entornos técnicos, altamente personalizable
            td  Compleja para usuarios no técnicos, precio alto en planes avanzados
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") HubSpot Service Hub
            td  Se integra con el CRM de HubSpot para mejorar la experiencia del cliente
            td  Gestión de #[em tickets], encuestas de satisfacción, informes
            td  Gran integración con ventas y #[em marketing], fácil de usar
            td  Costoso y con funciones limitadas en planes básicos
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") Salesforce Service Cloud
            td  Basado en la nube con IA para atención avanzada
            td  Soporte de casos, #[em chatbots] de IA, automatización de flujos
            td  Personalización y automatización potentes, ideal para grandes empresas
            td  Precio elevado, complejidad en configuración
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") SysAid 
            td  Plataforma con gestión de TI y soporte técnico
            td  Gestión de activos, automatización de procesos, análisis de problemas
            td  Integrada con ITIL, opciones de personalización
            td  Interfaz compleja, soporte limitado para personalización
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") HappyFox
            td  Interfaz intuitiva, soporte multicanal
            td  Gestión de #[em tickets], seguimiento de SLA, base de conocimientos
            td  Fácil de usar, adecuado para pymes, buena personalización
            td  Falta de integración con algunos sistemas externos
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") Spiceworks Help Desk
            td  #[em Software] gratuito y basado en la comunidad
            td  Gestión de #[em tickets], inventario de red, notificaciones
            td  Gratuito, ideal para pequeñas empresas con presupuestos limitados
            td  Funcionalidades limitadas, no es tan escalable
          tr.bg-white
            td.fw-bold(style="background-color:#EBF6EA;") Kayako
            td  Solución omnicanal enfocada en la experiencia del cliente
            td  #[em Chat] en vivo, CRM integrado, historial completo del cliente
            td  Fácil de implementar, soporte en vivo
            td  Costosa en relación con sus funciones, opciones limitadas de personalización
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2 Formato y registros de servicio
    
    p(data-aos="fade-right") El uso de formatos y registros de servicio en el soporte técnico y atención al cliente para la reparación de equipos es empleada para asegurar una gestión organizada, transparente y eficiente. Estos documentos permiten capturar y documentar cada paso del proceso, desde el reporte inicial del cliente hasta la resolución final y el cierre del caso. Además de ser una herramienta de registro, estos formatos facilitan el análisis y la mejora continua del servicio, optimizando el uso de las herramientas de gestión en el soporte técnico.
    p(data-aos="fade-left") Importancia del uso de formatos y registros de servicio:

    .row.mt-5
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="850")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h5 Trazabilidad y documentación completa.
          p.mb-0 Un formato de servicio bien diseñado asegura que cada incidente esté documentado de manera exhaustiva, permitiendo al equipo de soporte consultar fácilmente el historial y los detalles de cualquier caso. Esto es clave para la trazabilidad de problemas recurrentes y para realizar un seguimiento preciso de las soluciones aplicadas.
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="850")
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h5 Optimización de los procesos de escalamiento. 
          p.mb-0 Cuando un problema no se resuelve en el primer nivel, los registros de servicio permiten a los técnicos de niveles superiores entender de inmediato lo que se ha intentado y las conclusiones alcanzadas. Esto evita repeticiones de esfuerzos y reduce los tiempos de resolución al facilitar un escalamiento organizado y eficiente.
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="850")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h5 Cumplimiento de #[em SLAs] y evaluación del rendimiento. 
          p.mb-0 Los registros ayudan a cumplir con los #[em SLAs] (Acuerdos de Nivel de Servicio) al documentar los tiempos de respuesta y de resolución de cada caso. A través de estos registros, el equipo de soporte puede evaluar su rendimiento y detectar áreas que necesitan mejoras, como los tiempos de atención en incidentes de alta prioridad.
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="850")
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h5 Comunicación clara con el cliente.
          p.mb-0 Estos formatos documentan también la comunicación con el cliente, incluyendo actualizaciones de estado y confirmación de satisfacción tras la resolución. Esto genera confianza y asegura que el cliente esté informado en cada fase del proceso, mejorando la percepción del servicio recibido.
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 2.
      span Características de un formato de Servicio
    .cont_3_2.pb-4.pb-xl-5
      .col-lg-10.m-auto
        figure(data-aos="fade-up")
          img(src="@/assets/curso/tema3/8.svg" alt="La Figura 2 se denomina «Características de un formato de servicio» e indica que debe tener claridad y organización, campos específicos y relevantes, flexibilidad e integración con los sistemas de gestión.")
        figcaption.mt-2.fw-normal #[strong Fuente:] OIT, 2024.
    
    p.mt-5(data-aos="fade-right") En conclusión, los formatos y registros de servicio son la base de una gestión de soporte técnico organizada y eficiente. Facilitan la comunicación, aseguran el cumplimiento de los SLAs y apoyan la mejora continua, generando una experiencia de servicio confiable y de alta calidad para los clientes.

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Tabla 3.
        span Formato de registro de incidencia
      figure(data-aos="fade-up")
        img(src="@/assets/curso/tema3/16.svg" alt="La Figura 3 se denomina «Formato de registro de incidencia» cuya funcionalidad es capturar y documentar cada paso del proceso.")
      figcaption.mt-2.fw-normal #[strong Fuente:] OIT, 2024.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3 Métricas y evaluación del servicio
    
    .row
      .col-lg(data-aos="fade-right")
        p Permiten a las organizaciones medir el rendimiento, detectar áreas de mejora y garantizar que el servicio prestado cumpla con las expectativas del cliente y con los estándares de calidad definidos. Las métricas ofrecen una visión clara y cuantificable del desempeño del equipo de soporte, ayudando a tomar decisiones informadas para mejorar la eficiencia, reducir los tiempos de respuesta y aumentar la satisfacción del cliente.
        .cajon.color-primario.p-4.mt-4(style="background-color:#D7EED6;")
          p.mb-0 Las métricas permiten identificar debilidades en el proceso de soporte, como tiempos de espera prolongados o demoras en la resolución de problemas complejos. Esto permite establecer mejoras específicas y desarrollar estrategias para optimizar el flujo de trabajo. Evaluar si se están cumpliendo los Acuerdos de Nivel de Servicio (#[em SLAs]) y si el equipo de soporte está cumpliendo con los tiempos y estándares de calidad comprometidos con el cliente. 
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/9.png")
    
    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Figura 3.
        span Características de un formato de servicio
      figure(data-aos="fade-up")
        img(src="@/assets/curso/tema3/10.svg" alt="La Figura 3 se denomina «Características de un formato de Servicio» en donde se encuentran los parámetros a tener en cuenta para medir el rendimiento, detectar áreas de mejora y garantizar que el servicio prestado cumpla con las expectativas del cliente.")
      figcaption.mt-3.fw-normal #[strong Fuente:] OIT, 2024.
    
    p.mt-5(data-aos="fade-right") Variables de métricas y sus definiciones:

    .row.justify-content-center.mt-4
      .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="zoom-in" data-aos-duration="900" @mouseover="indicadorTarjetaFlip = false")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/11.png")
          .crd_hover_txt--body
            h5.mb-3.text-white Recreativo-deportivas 
            p.mb-0 Se refiere al tiempo promedio que tarda el equipo de soporte en responder a la solicitud inicial del cliente desde el momento en que se registra. Esta métrica es relevante para medir la eficiencia y rapidez en la atención.
      .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="zoom-in" data-aos-duration="900" @mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/12.png")
          .crd_hover_txt--body
            h5.mb-3.text-white Tasa de resolución en el primer contacto
            p.mb-0 Mide el porcentaje de incidentes que son resueltos en el primer contacto con el cliente, sin necesidad de escalamiento. Una tasa alta indica una resolución eficaz y un conocimiento técnico adecuado, lo que mejora la experiencia del cliente.
      .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="zoom-in" data-aos-duration="900" @mouseover="indicadorTarjetaFlip = false")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/13.png")
          .crd_hover_txt--body
            h5.mb-3.text-white Índice de satisfacción del cliente (CSAT)
            p.mb-0 Es una métrica basada en encuestas que mide la satisfacción del cliente tras recibir el servicio. Se utiliza para evaluar la percepción del cliente sobre la calidad y efectividad del soporte recibido y es un indicador directo de la experiencia del cliente.

    .col-xl-8.m-auto.mt-5.col-lg-10(data-aos="fade-up" data-aos-duration="850")
      .cajon.color-primario.p-4(style="background-color:#D7EED6;")
        .row
          .col-md-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema3/14.svg")
          .col-md
            p.mb-0.fw-bold En conclusión, el uso de métricas y evaluación del servicio en soporte técnico es relevante para gestionar el rendimiento, cumplir con los estándares de calidad y fomentar la mejora continua en la atención al cliente. Al evaluar constantemente estos indicadores, las organizaciones pueden asegurar una operación de soporte eficiente y alineada con las expectativas del cliente
    




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaFlip: true,
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
