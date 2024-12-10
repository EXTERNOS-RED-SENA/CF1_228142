<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg(data-aos="fade-right")
        p La evolución del soporte técnico y la atención al cliente en el ámbito de la reparación de equipos ha cobrado una relevancia significativa en los últimos años. A medida que los clientes exigen respuestas rápidas y eficaces, las empresas han tenido que adaptar sus protocolos y herramientas para asegurar que se cumplan altos estándares de calidad en el servicio. En este contexto, se han desarrollado diversos componentes que permiten estructurar y optimizar el proceso de atención, desde los fundamentos del servicio técnico hasta la implementación de sistemas de evaluación y métricas de rendimiento.
        .cajon.color-primario.p-4.mt-4(style="background-color:#D7EED6;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/intro1.svg")
            .col-md
              p.mb-0 Uno de los pilares fundamentales en este proceso es la correcta aplicación de los protocolos de atención al cliente, así como la gestión efectiva de peticiones y el adecuado escalamiento de incidentes. Estos elementos aseguran que cada solicitud recibida sea gestionada de manera eficiente, brindando al cliente una experiencia satisfactoria. La documentación y trazabilidad del servicio también juegan un rol preponderante, ya que permiten llevar un registro detallado de cada incidencia y resolución, facilitando el análisis y la mejora continua del servicio.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro2.png")
    
    p.mt-4(data-aos="fade-up") La gestión de incidentes constituye otro componente en el soporte técnico. Este proceso incluye la clasificación y el ciclo de vida de cada incidente, así como la aplicación de métodos de resolución y #[em troubleshooting]. Para asegurar la eficiencia en la resolución de problemas, se establecen tiempos de atención y acuerdos de nivel de servicio (SLAs), que garantizan que los problemas sean resueltos en plazos establecidos, aumentando así la satisfacción del cliente.

    .row.mt-4(data-aos="fade-up" data-aos-duration="800")
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/intro3.svg")
      .col-lg
        .h-100.p-4.p-lg-3.d-flex.align-content-center.flex-wrap(style="background-color:#EFE8F7;")
          p.mb-0 Finalmente, el uso de herramientas de gestión, como los sistemas #[em Help-Desk], formatos de registro y métricas de evaluación, permiten monitorizar y analizar el rendimiento del servicio de manera objetiva. Estas herramientas ofrecen una perspectiva cuantitativa del proceso de soporte, identificando áreas de mejora y facilitando la toma de decisiones informada. Con una estructura bien definida y herramientas de calidad, el soporte técnico y la atención al cliente se consolidan como elementos estratégicos para el éxito y la fidelización de los clientes en el sector de reparación de equipos.
    
    figure.mt-4(data-aos="zoom-in-up" data-aos-duration="800")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SZDy11cNbTQ?si=y4xCGDmKroAFKSFa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
