import IberpixCompare from 'facade/iberpixcompare';

M.language.setLang('es');//Español

const PRECHARGED = {
  groups: [
    {
      name: 'IGN',
      services: [
        {
          name: 'Unidades administrativas',
          type: 'WMS',
          url: 'https://www.ign.es/wms-inspire/unidades-administrativas?',
          white_list: ['AU.AdministrativeBoundary', 'AU.AdministrativeUnit'],
        },
        {
          name: 'Nombres geográficos',
          type: 'WMS',
          url: 'https://www.ign.es/wms-inspire/ngbe?',
        },
        {
          name: 'Redes geodésicas',
          type: 'WMS',
          url: 'https://www.ign.es/wms-inspire/redes-geodesicas?',
        },
		{
          name: 'Cuadrículas cartográficas',
          type: 'WMS',
          url: 'https://www.ign.es/wms-inspire/cuadriculas?',
          white_list: ['Grid-REGCAN95-lonlat-50k', 'Grid-ETRS89-lonlat-50k', 'Grid-ETRS89-lonlat-25k', 'Grid-REGCAN95-lonlat-25k', 'Grid-25k-extendida'],
        },
        {
          name: 'Información sísmica y volcánica',
          type: 'WMS',
          url: 'https://www.ign.es/wms-inspire/geofisica?',
        },
        {
          name: 'Fototeca',
          type: 'WMS',
          url: 'https://fototeca.cnig.es/wms/fototeca.dll?',
        },
		{
          name: 'Camino de Santiago',
          type: 'WMS',
          url: 'https://www.ign.es/wms-inspire/camino-santiago?',
        },
        {
          name: 'Proyecto ELF España',
          type: 'WMS',
          url: 'http://elf.ign.es/wms/basemap?',
        },
      ],
    },
    {
      name: 'IGN. Cartografía histórica',
      services: [
        {
          name: 'Planos de Madrid (1622 - 1960)',
          type: 'WMS',
          url: 'https://www.ign.es/wms/planos?',
        },
        {
          name: 'Hojas kilométricas (Madrid - 1860)',
          type: 'WMS',
          url: 'https://www.ign.es/wms/hojas-kilometricas?',
        },
        {
          name: 'Planimetrías',
          type: 'WMS',
          url: 'https://www.ign.es/wms/minutas-cartograficas?',
        },
        {
          name: 'Primera edición de los Mapas Topográficos Nacionales',
          type: 'WMS',
          url: 'https://www.ign.es/wms/primera-edicion-mtn?',
        },
      ],
    },
	  {
      name: 'Sistema Cartográfico Nacional',
      services: [
        {
          name: 'PNOA. Ortofotos máxima actualidad',
          type: 'WMS',
          url: 'https://www.ign.es/wms-inspire/pnoa-ma?',
        },
        {
          name: 'PNOA. Ortofotos históricas',
          type: 'WMS',
          url: 'https://www.ign.es/wms/pnoa-historico?',
        },
        {
          name: 'Ocupación del suelo',
          type: 'WMS',
          url: 'https://servicios.idee.es/wms-inspire/ocupacion-suelo?',
        },
        {
          name: 'Ocupación del suelo. Histórico',
          type: 'WMS',
          url: 'https://servicios.idee.es/wms-inspire/ocupacion-suelo-historico?',
        },
		{
          name: 'Información Geográfica de Referencia. Transportes',
          type: 'WMS',
          url: 'https://servicios.idee.es/wms-inspire/transportes?',
        },
		{
          name: 'Información Geográfica de Referencia. Hidrografía',
          type: 'WMS',
          url: 'https://servicios.idee.es/wms-inspire/hidrografia?',
        },
		{
          name: 'Direcciones y códigos postales',
          type: 'WMS',
          url: 'https://www.cartociudad.es/wms-inspire/direcciones-ccpp?',
        },
		{
          name: 'Modelos digitales del terreno',
          type: 'WMS',
          url: 'https://servicios.idee.es/wms-inspire/mdt?',
        },
		{
          name: 'Copernicus Land Monitoring Service',
          type: 'WMS',
          url: 'https://servicios.idee.es/wms/copernicus-landservice-spain?',
        },
      ],
    },
    {
      name: 'Capas de fondo',
      services: [
        {
          name: 'Mapa',
          type: 'WMTS',
          url: 'https://www.ign.es/wmts/mapa-raster?',
        },
        {
          name: 'Imagen',
          type: 'WMTS',
          url: 'https://www.ign.es/wmts/pnoa-ma?',
        },
        {
          name: 'Callejero',
          type: 'WMTS',
          url: 'https://www.ign.es/wmts/ign-base?',
        },
        {
          name: 'Relieve',
          type: 'WMTS',
          url: 'https://wmts-mapa-lidar.idee.es/lidar?',
        },
        {
          name: 'Ocupación del suelo',
          type: 'WMTS',
          url: 'https://servicios.idee.es/wmts/ocupacion-suelo?',
        },
        {
          name: 'Mapas Históricos',
          type: 'WMTS',
          url: 'https://www.ign.es/wmts/primera-edicion-mtn',
        }
      ],
    }
  ],
  services: [
    {
      name: 'Catastro',
      type: 'WMS',
      url: 'http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?',
    },
	{
      name: 'SIU Sistema de Información Urbana',
      type: 'WMS',
      url: 'https://mapas.fomento.gob.es/arcgis/services/SIU/Servicios_OGC_SIU/MapServer/WMSServer?',
    },
	{
      name: 'Cartografía Militar',
      type: 'WMS',
      url: 'http://wms-defensa.idee.es/mapas',
    },
    {
      name: 'Línea de Costa',
      type: 'WMS',
      url: 'http://ideihm.covam.es/ihm-inspire/wms-unidadesmaritimas?',
      white_list: ['HY.PhysicalWaters.Waterbodies', 'HY.PhysicalWaters.Wetland', 'HY.PhysicalWaters.Catchments'],
    },
    {
      name: 'Mapa Geológico Continuo de España a escala 1/50.000',
      type: 'WMS',
      url: 'http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer',
    },
  ],
};

/**
* Definimos las capas con notación MAPEA
*/

/**
 * Objeto mapa
 */

const map = M.map({
  container: 'mapjs',
  controls: ['location'],
  center: [-412300, 4926700],
  resolutions: [51444.18059766173, 25722.090298830866, 12861.045149415433,
    6430.522574707717, 3215.2612873538583, 1607.6306436769291, 803.8153218384646,
    401.9076609192323, 200.95383045961614, 100.47691522980807, 50.238457614904036,
    25.119228807452018, 12.559614403726009, 6.2798072018630045, 3.1399036009315022,
    1.5699518004657511, 0.7849759002328756, 0.3699518004657511, 0.18497590023287555,
  ],
  zoom: 14,
  //minZoom: 14,
});

const pluginIberpixCompare = new IberpixCompare({
  position: 'TL',
  vertical: true,
  collapsible: false,
  baseLayers: [
    ['Plano de Mancelli, 1622', '1622', 'WMS*Mancelli 1622*https://www.ign.es/wms/planos*MancelliMadrid', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/mancelli.geojson'],
    ['Plano de Texeira, 1656', '1656', 'WMS*Texeira 1656*https://www.ign.es/wms/planos*Texeira', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/texeira.geojson'],
    ['Plano de Nicolás Chalmandrier, 1761', '1761', 'WMS*Chalmandrier 1761*https://www.ign.es/wms/planos*ChalmadrierMadrid', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/chalmandrier.geojson'],
    ['Plano de Espinosa de los Monteros, 1769', '1769', 'WMS*Espinosa de los Monteros 1769*https://www.ign.es/wms/planos*EspinosaMadrid', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/espinosa_monteros.geojson'],
    ['Plano Geométrico de Madrid de Tomás López, 1785', '1785', 'WMS*Tomás López 1785*https://www.ign.es/wms/planos*GeometricoMadrid', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/tomas_lopez.geojson'],
    ['Plano de Madoz y Coello, 1848', '1848', 'WMS*Madoz y Coello 1848*https://www.ign.es/wms/planos*madozMadrid', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/madoz_coello.geojson'],
    ['Plano de Facundo Cañada, 1900', '1900', 'WMS*Facundo Cañada 1900*https://www.ign.es/wms/planos*facundoMadrid', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/facundo_canada.geojson'],
    ['Plano de Nuñez Granés, 1910', '1910', 'WMS*Nuñez Granés 1910*https://www.ign.es/wms/planos*nunezMadrid', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/nunez_granes.geojson'],
    ['Plano parcelario, 1929', '1929', 'WMS*Parcelario 1929*https://www.ign.es/wms/planos*ayuntamientoMadrid', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/parcelario_29.geojson'],
    ['Plano parcelario, 1940', '1940', 'WMS*Parcelario 1940*https://www.ign.es/wms/planos*parcelarioMadrid', 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/planos_antiguos/coverages/parcelario_40.geojson'],
  ],
  mirrorpanelParams: { showCursors: true },
  backImgLayersConfig: {
    position: 'TR',
    layerId: 0,
    layerVisibility: true,
    collapsed: true,
    collapsible: true,
    columnsNumber: 4,
    layerOpts: [
      {
        id: 'raster',
        preview: 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/iberpix/static/media/raster.c7a904f3.png',
        title: 'Mapa',
        layers: [
          new M.layer.WMTS({
            url: 'https://www.ign.es/wmts/mapa-raster?',
            name: 'MTN',
            legend: 'Mapa',
            matrixSet: 'GoogleMapsCompatible',
            transparent: false,
            displayInLayerSwitcher: false,
            queryable: false,
            visible: true,
            format: 'image/jpeg',
          }),
        ],
      },
      {
        id: 'imagen',
        preview: 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/iberpix/static/media/image.44c5b451.png',
        title: 'Imagen',
        layers: [
          new M.layer.WMTS({
            url: 'https://www.ign.es/wmts/pnoa-ma?',
            name: 'OI.OrthoimageCoverage',
            legend: 'Imagen',
            matrixSet: 'GoogleMapsCompatible',
            transparent: false,
            displayInLayerSwitcher: false,
            queryable: false,
            visible: true,
            format: 'image/jpeg',
          }),
        ],
      },
      {
        id: 'mapa',
        preview: 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/iberpix/static/media/mapa.98d45f00.png',
        title: 'Callejero',
        layers: [
          new M.layer.WMTS({
            url: 'https://www.ign.es/wmts/ign-base?',
            name: 'IGNBaseTodo',
            legend: 'Callejero',
            matrixSet: 'GoogleMapsCompatible',
            transparent: false,
            displayInLayerSwitcher: false,
            queryable: false,
            visible: true,
            format: 'image/jpeg',
          }),
        ],
      },
      {
        id: 'hibrido',
        title: 'Híbrido',
        preview: 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/iberpix/static/media/hibrido.485e957e.png',
        layers: [
          new M.layer.WMTS({
            url: 'https://www.ign.es/wmts/pnoa-ma?',
            name: 'OI.OrthoimageCoverage',
            matrixSet: 'GoogleMapsCompatible',
            legend: 'Híbrido',
            transparent: true,
            displayInLayerSwitcher: false,
            queryable: false,
            visible: true,
            format: 'image/jpeg',
          }),
          new M.layer.WMTS({
            url: 'https://www.ign.es/wmts/ign-base?',
            name: 'IGNBaseOrto',
            matrixSet: 'GoogleMapsCompatible',
            legend: 'Topónimos',
            transparent: true,
            displayInLayerSwitcher: false,
            queryable: false,
            visible: true,
            format: 'image/png',
          })
        ],
      },
      {
        id: 'lidar',
        preview: 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/iberpix/static/media/lidar.5aa94e82.png',
        title: 'LiDAR (Relieve)',
        layers: [
          new M.layer.WMTS({
            url: 'https://wmts-mapa-lidar.idee.es/lidar?',
            name: 'EL.GridCoverageDSM',
            legend: 'LiDAR (Relieve)',
            matrixSet: 'GoogleMapsCompatible',
            transparent: false,
            displayInLayerSwitcher: false,
            queryable: false,
            visible: true,
            format: 'image/png',
          }),
        ],
      },
      {
        id: 'ocupacion-suelo',
        preview: 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/iberpix/static/media/ocupacion_suelo.ae7c9787.png',
        title: 'Ocupación del suelo',
        layers: [
          new M.layer.WMTS({
            url: 'https://servicios.idee.es/wmts/ocupacion-suelo?',
            name: 'LC.LandCoverSurfaces',
            legend: 'Ocupación del suelo',
            matrixSet: 'GoogleMapsCompatible',
            transparent: false,
            displayInLayerSwitcher: false,
            queryable: false,
            visible: true,
            format: 'image/png',
          }),
        ],
      },
      {
        id: 'historicos',
        preview: 'http://visores-cnig-gestion-publico.desarrollo.guadaltel.es/iberpix/static/media/historicos.78c9c369.png',
        title: 'Mapas Históricos',
        layers: [
          new M.layer.WMTS({
            url: 'https://www.ign.es/wmts/primera-edicion-mtn?',
            name: 'mtn50-edicion1',
            legend: 'Mapas Históricos',
            matrixSet: 'GoogleMapsCompatible',
            transparent: false,
            displayInLayerSwitcher: false,
            queryable: false,
            visible: true,
            format: 'image/jpeg',
          }),
        ],
      },
    ],
  },
  fullTOCConfig: {
    collapsed: true,
    position: 'TR',
    https: true,
    http: true,
    precharged: PRECHARGED,
  },
  vectorsConfig: {
    collapsed: true,
    collapsible: true,
    position: 'TR',
    wfszoom: 12,
    precharged: [
      {
        name: 'Hidrografía',
        url: 'https://servicios.idee.es/wfs-inspire/hidrografia?',
      },
      {
        name: 'Límites administrativos',
        url: 'https://www.ign.es/wfs-inspire/unidades-administrativas?',
      },
    ],
  },
});

map.addPlugin(pluginIberpixCompare);

map.addPlugin(new M.plugin.PrinterMap({
  position: 'TR',
  collapsed: true,
  georefActive: false,
}));

window.map = map;
