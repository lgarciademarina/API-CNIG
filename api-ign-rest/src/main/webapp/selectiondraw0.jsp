<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="es.juntadeandalucia.mapea.plugins.PluginsManager"%>
<%@ page import="es.juntadeandalucia.mapea.parameter.adapter.ParametersAdapterV3ToV4"%>
<%@ page import="java.util.Map"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="mapea" content="yes">
    <title>Selection Draw</title>
    <link type="text/css" rel="stylesheet" href="assets/css/apiign-1.2.0.ol.min.css">
    <link href="plugins/selectiondraw/selectiondraw.ol.min.css" rel="stylesheet" />
    <link href="plugins/sharemap/sharemap.ol.min.css" rel="stylesheet" />
    </link>
    <style type="text/css">
        html,
        body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }
    </style>
    <%
      Map<String, String[]> parameterMap = request.getParameterMap();
      PluginsManager.init (getServletContext());
      Map<String, String[]> adaptedParams = ParametersAdapterV3ToV4.adapt(parameterMap);
      String[] cssfiles = PluginsManager.getCSSFiles(adaptedParams);
      for (int i = 0; i < cssfiles.length; i++) {
         String cssfile = cssfiles[i];
   %>
    <link type="text/css" rel="stylesheet" href="plugins/<%=cssfile%>">
    </link>

    <% 
      } %>
</head>

<body>
    <div>
        <label for="selectPosicion">Selector de posición del plugin</label>
        <select name="position" id="selectPosicion">
            <option value="TL">Arriba Izquierda (TL)</option>
            <option value="TR">Arriba Derecha (TR)</option>
            <option value="BR">Abajo Derecha (BR)</option>
            <option value="BL">Abajo Izquierda (BL)</option>
        </select>   
        <label for="selectCollapsed">Selector collapsed</label>
        <select name="collapsedValue" id="selectCollapsed">
            <option value=true>true</option>
            <option value=false>false</option>
        </select>
        <label for="selectCollapsible">Selector collapsible</label>
        <select name="collapsibleValue" id="selectCollapsible">
            <option value=true>true</option>
            <option value=false>false</option>
        </select>
    </div>
    <div id="mapjs" class="m-container"></div>
    <script type="text/javascript" src="vendor/browser-polyfill.js"></script>
    <script type="text/javascript" src="js/apiign-1.2.0.ol.min.js"></script>
    <script type="text/javascript" src="js/configuration-1.2.0.js"></script>
    <script type="text/javascript" src="plugins/selectiondraw/selectiondraw.ol.min.js"></script>
    <script type="text/javascript" src="plugins/sharemap/sharemap.ol.min.js"></script>
    <%
      String[] jsfiles = PluginsManager.getJSFiles(adaptedParams);
      for (int i = 0; i < jsfiles.length; i++) {
         String jsfile = jsfiles[i];
   %>
    <script type="text/javascript" src="plugins/<%=jsfile%>"></script>
    <%
      }
   %>
    <script type="text/javascript">
        const map = M.map({
            container: 'mapjs',
            controls: ['scale*true'],
            zoom: 6,
            maxZoom: 20,
            center: [-467062.8225, 4683459.6216],
            layers: ["WMTS*https://www.ign.es/wmts/ign-base?*IGNBaseTodo*GoogleMapsCompatible*Callejero*false"],
            minZoom: 6,
        });
        let mp,mp2;
        let posicion = 'TL', collapsed = false, collapsible = true;
        crearPlugin(posicion,collapsed,collapsible);

        const selectPosicion = document.getElementById("selectPosicion");
        const selectCollapsed = document.getElementById("selectCollapsed");
        const selectCollapsible = document.getElementById("selectCollapsible");

        selectPosicion.addEventListener('change', cambiarTest);
        selectCollapsed.addEventListener('change', cambiarTest);
        selectCollapsible.addEventListener('change', cambiarTest);

        function cambiarTest() {
            posicion = selectPosicion.options[selectPosicion.selectedIndex].value;
            collapsed = (selectCollapsed.options[selectCollapsed.selectedIndex].value == 'true');
            collapsible = (selectCollapsible.options[selectCollapsible.selectedIndex].value == 'true');
			map.removePlugins(mp);
			crearPlugin(posicion,collapsed,collapsible);
        }
        function crearPlugin(position,collapsed,collapsible){
            mp = new M.plugin.SelectionDraw({
                projection: 'EPSG:4326',
                position: position,
                collapsed: collapsed,
                collapsible: collapsible,
            });

            mp.on('finished:draw', (feature) => {
                M.dialog.info(JSON.stringify(feature), 'Información del feature');
            });
            map.addPlugin(mp);

            mp2 = new M.plugin.ShareMap({
				baseUrl: window.location.href.substring(0,window.location.href.indexOf('api-core'))+"api-core/",
				position: "TR",
			});
			map.addPlugin(mp2);
        }
    </script>
</body>

</html>