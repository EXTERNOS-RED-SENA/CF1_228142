export default {
  global: {
    componenteFormativo:
      'Soporte técnico y atención al cliente en la reparación de equipos',
    descripcionCurso:
      'Este componente ofrece una descripción de los procesos que conforman el soporte técnico y la atención al cliente en la reparación de equipos. Abarca protocolos de atención al cliente, manejo de escalamiento y documentación de incidencias. Asimismo, se destacan estrategias de gestión de incidentes, clasificación y ciclo de vida de los problemas, y aplicación de métodos de resolución efectivos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del servicio técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Protocolos de atención al cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión de peticiones y escalamiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Documentación y trazabilidad del servicio',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de incidentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación y ciclo de vida de incidentes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos de resolución y <em>troubleshooting</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tiempos de atención y <em>SLAs</em>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistemas <em>Help Desk</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Formato y registros de servicio',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Métricas y evaluación del servicio',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Conclusiones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.  Fundamentos del servicio técnico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, junio 5). <em>Protocolo de atención al cliente</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=M0WqQBa3sRI ',
    },
    {
      tema: '2. Gestión de incidentes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, mayo 20). <em>Protocolo de atención al cliente Interpretación de indicadores de gestión (KPI)</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nCUYv5oPwJY ',
    },
    {
      tema: '2. Gestión de incidentes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, mayo 20). <em>Gestión de requerimientos e indicadores de gestión</em>.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=8hHQ0i5spgs&list=PLkc5n6npRWkhgy8-__7eMfcC5nnMlV2TJ&index=8 ',
    },
    {
      tema: '3.Herramientas de gestión',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, agosto30). <em>Evaluación de métricas y controles</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZPDlu3ReTps ',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'Interacción entre la empresa y el cliente, enfocada en satisfacer necesidades y resolver dudas o problemas.',
    },
    {
      termino: 'Documentación',
      significado:
        'Registro detallado de las actividades, problemas y soluciones llevadas a cabo en el proceso de soporte técnico, utilizado para seguimiento y referencia.',
    },
    {
      termino: 'Escalamiento',
      significado:
        'Proceso de elevar un problema a un nivel superior de soporte cuando no puede ser resuelto en el nivel inicial.',
    },
    {
      termino: 'Evaluación de servicio',
      significado:
        'Análisis del desempeño del soporte técnico, basado en métricas y retroalimentación del cliente, para identificar áreas de mejora.',
    },
    {
      termino: '<em>Help-Desk</em>',
      significado:
        'Sistema o plataforma que centraliza y gestiona solicitudes de soporte técnico de los clientes, permitiendo el seguimiento y resolución de incidencias.',
    },
    {
      termino: 'Incidente',
      significado:
        'Evento o problema que interrumpe el funcionamiento normal de un equipo o sistema, que requiere soporte para su resolución.',
    },
    {
      termino: 'Métrica',
      significado:
        'Parámetro que permite medir el desempeño de un proceso o actividad dentro del soporte técnico, como el tiempo de respuesta o el nivel de satisfacción del cliente.',
    },
    {
      termino: 'Petición',
      significado:
        'Solicitud específica del cliente para obtener asistencia o resolver un problema técnico.',
    },
    {
      termino: 'Protocolo de atención',
      significado:
        'Conjunto de normas y procedimientos para guiar la interacción entre el personal de soporte y el cliente, asegurando una atención uniforme y de calidad.',
    },
    {
      termino: 'Resolución en primer contacto',
      significado:
        'Capacidad de resolver un problema o solicitud del cliente en el primer contacto, sin necesidad de escalamiento o intervención adicional.',
    },
    {
      termino: '<em>SLAs</em> (Acuerdos de Nivel de Servicio)',
      significado:
        'Compromisos establecidos entre el proveedor de soporte y el cliente que definen los tiempos y estándares de calidad para la resolución de incidentes.',
    },
    {
      termino: 'Soporte técnico',
      significado:
        'Asistencia proporcionada a los usuarios para resolver problemas técnicos con sus equipos o sistemas.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de rastrear el historial, la ubicación y los pasos de un incidente o solicitud de servicio a lo largo del proceso de soporte.',
    },
    {
      termino: '<em>Troubleshooting</em>',
      significado:
        'Conjunto de técnicas para diagnosticar y resolver problemas en los sistemas o equipos, de forma rápida y efectiva.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arellano-Díaz, H. O. (2017). La calidad en el servicio como ventaja competitiva. Revista científica dominio de las ciencias, 3, 72-83. ',
      link: '',
    },
    {
      referencia:
        'Arellano-González, A., Carballo-Mendivil, B., Acosta-Quintana, M. P., López-Torres, V. G. (2017). Planeación de la logística de la recepción y entrega de mercancía en una empresa que ofrece servicios de paquetería y carga. Revista de Negocios & PyMES, 3(8), 9-22. ',
      link:
        'https://www.ecorfan.org/spain/researchjournals/Negocios_y _PyMES/vol3num8/Revista_de_Negocios_&_PYMES_V3_N8_2.pdf',
    },
    {
      referencia:
        'Calatayud, A., Montes, L. (2021). Logística en América Latina y el Caribe: Oportunidades, desafíos y líneas de acción. Banco Interamericano de Desarrollo. ',
      link: 'https://doi.org/10.18235/0003278',
    },
    {
      referencia:
        'Duque Oliva, E. J., Diosa Gómez, Y. (2014). Evolución conceptual de los modelos de medición de la percepción de calidad del servicio: Una mirada desde la educación superior. Suma de Negocios, 5(12), 180-191. ',
      link: 'https://d oi.org/10.1016/S2215-910X(14)70040-0',
    },
    {
      referencia:
        'Monagas-Docasal, M. (2012). El capital intelectual y la gestión del conocimiento. Ingeniería Industrial, XXXIII(2), 142-150. ',
      link: 'https://www.redalyc.org/pdf/3604/360433580006.pdf',
    },
    {
      referencia:
        'Morán Ruiz, E. (2017). La calidad del servicio al cliente externo administrativo vinculado al incremento de las ventas en el grupo Santillana. <em>Espirales. Revista Multidisciplinaria de Investigación</em>, 9, 82-104',
      link: 'http://www.revistaespirales.com/index.php/es/article/view/221/168',
    },
    {
      referencia:
        'Morillo, M. del C., Morillo, M. C., & Rivas, D. (2011). Medición de la calidad del servicio en las instituciones financieras a través de la escala de Servqual. <em>Contaduría y Administración</em>, 234, 101-130. ',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S018610422011000200006',
    },
    {
      referencia:
        'Mohedano Torres, E. de J., Echeverría Ríos, O. M., Martínez Hernández, M., & Lezama León, M. H. (2023). Modelo SERVQUAL para medir la calidad en el servicio en operadores logísticos. Revista CEA, 9(19), e2234. Instituto Tecnológico Metropolitano, Colombia. ',
      link: 'https://doi.org/10.22430/24223182.2234',
    },
    {
      referencia:
        'Robayo, A. (2017). <em>La importancia del servicio al cliente y el reflejo de las ventas en una empresa</em> (Tesis de grado, Universidad Militar Nueva Granda). Repositorio Institucional UMNG. ',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/16203/Robayo RodriguezAl ejandro2017.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Verastegui Tene, F., & Vargas Merino, J. (2021). Estrategias de Merchandising: un análisis de su efectividad para la atracción de nuevos clientes. Revista Academia & Negocios, 41-54. ',
      link: 'https://doi.org/10.29393/RAN6-4EMFV20004',
    },
  ],
}
