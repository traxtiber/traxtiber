var wms_layers = [];

var lyr_Dem_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://85.18.173.22:8080/wms/wms?project%3DDEM_COLOR",
    attributions: ' ',
                              params: {
                                "LAYERS": "Dem",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Dem",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Dem_0, 0]);
var lyr_Egeos2011_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://85.18.173.22:8080/wms/wms?project%3DORTOFOTO_2011",
    attributions: ' ',
                              params: {
                                "LAYERS": "Egeos%202011",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Egeos 2011",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Egeos2011_1, 0]);
var lyr_Dem_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://85.18.173.22:8080/wms/wms?project%3DDEM_COLOR",
    attributions: ' ',
                              params: {
                                "LAYERS": "Dem",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Dem",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Dem_2, 0]);
var lyr_Egeos2011_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://85.18.173.22:8080/wms/wms?project%3DORTOFOTO_2011",
    attributions: ' ',
                              params: {
                                "LAYERS": "Egeos%202011",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Egeos 2011",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Egeos2011_3, 0]);

        var lyr_WikipediaLabelledLayer_4 = new ol.layer.Tile({
            'title': 'Wikipedia Labelled Layer',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
            })
        });
var format_ProjectBoundaries_5 = new ol.format.GeoJSON();
var features_ProjectBoundaries_5 = format_ProjectBoundaries_5.readFeatures(json_ProjectBoundaries_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectBoundaries_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectBoundaries_5.addFeatures(features_ProjectBoundaries_5);
var lyr_ProjectBoundaries_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjectBoundaries_5, 
                style: style_ProjectBoundaries_5,
                interactive: true,
                title: '<img src="styles/legend/ProjectBoundaries_5.png" /> Project Boundaries'
            });
var format_MainmodernpiazzasofTrastevere_6 = new ol.format.GeoJSON();
var features_MainmodernpiazzasofTrastevere_6 = format_MainmodernpiazzasofTrastevere_6.readFeatures(json_MainmodernpiazzasofTrastevere_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainmodernpiazzasofTrastevere_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainmodernpiazzasofTrastevere_6.addFeatures(features_MainmodernpiazzasofTrastevere_6);
var lyr_MainmodernpiazzasofTrastevere_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MainmodernpiazzasofTrastevere_6, 
                style: style_MainmodernpiazzasofTrastevere_6,
                interactive: true,
                title: '<img src="styles/legend/MainmodernpiazzasofTrastevere_6.png" /> Main modern piazzas of Trastevere'
            });
var format_HistoricalexcavationsandFormaUrbis_7 = new ol.format.GeoJSON();
var features_HistoricalexcavationsandFormaUrbis_7 = format_HistoricalexcavationsandFormaUrbis_7.readFeatures(json_HistoricalexcavationsandFormaUrbis_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricalexcavationsandFormaUrbis_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricalexcavationsandFormaUrbis_7.addFeatures(features_HistoricalexcavationsandFormaUrbis_7);
var lyr_HistoricalexcavationsandFormaUrbis_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HistoricalexcavationsandFormaUrbis_7, 
                style: style_HistoricalexcavationsandFormaUrbis_7,
                interactive: true,
                title: '<img src="styles/legend/HistoricalexcavationsandFormaUrbis_7.png" /> Historical excavations and Forma Urbis'
            });
var format_Religiousbuildings4th9th_8 = new ol.format.GeoJSON();
var features_Religiousbuildings4th9th_8 = format_Religiousbuildings4th9th_8.readFeatures(json_Religiousbuildings4th9th_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Religiousbuildings4th9th_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Religiousbuildings4th9th_8.addFeatures(features_Religiousbuildings4th9th_8);
var lyr_Religiousbuildings4th9th_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Religiousbuildings4th9th_8, 
                style: style_Religiousbuildings4th9th_8,
                interactive: true,
                title: '<img src="styles/legend/Religiousbuildings4th9th_8.png" /> Religious buildings 4th-9th'
            });
var format_Aqueducts_9 = new ol.format.GeoJSON();
var features_Aqueducts_9 = format_Aqueducts_9.readFeatures(json_Aqueducts_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aqueducts_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aqueducts_9.addFeatures(features_Aqueducts_9);
var lyr_Aqueducts_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aqueducts_9, 
                style: style_Aqueducts_9,
                interactive: true,
                title: '<img src="styles/legend/Aqueducts_9.png" /> Aqueducts'
            });
var format_LateAntiqueDomus_10 = new ol.format.GeoJSON();
var features_LateAntiqueDomus_10 = format_LateAntiqueDomus_10.readFeatures(json_LateAntiqueDomus_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LateAntiqueDomus_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LateAntiqueDomus_10.addFeatures(features_LateAntiqueDomus_10);
var lyr_LateAntiqueDomus_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LateAntiqueDomus_10, 
                style: style_LateAntiqueDomus_10,
                interactive: true,
                title: '<img src="styles/legend/LateAntiqueDomus_10.png" /> Late Antique Domus'
            });
var format_Areaswithremainsofroads_11 = new ol.format.GeoJSON();
var features_Areaswithremainsofroads_11 = format_Areaswithremainsofroads_11.readFeatures(json_Areaswithremainsofroads_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areaswithremainsofroads_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areaswithremainsofroads_11.addFeatures(features_Areaswithremainsofroads_11);
var lyr_Areaswithremainsofroads_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areaswithremainsofroads_11, 
                style: style_Areaswithremainsofroads_11,
                interactive: true,
                title: '<img src="styles/legend/Areaswithremainsofroads_11.png" /> Areas with remains of roads'
            });
var format_PossibleRoads_12 = new ol.format.GeoJSON();
var features_PossibleRoads_12 = format_PossibleRoads_12.readFeatures(json_PossibleRoads_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PossibleRoads_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PossibleRoads_12.addFeatures(features_PossibleRoads_12);
var lyr_PossibleRoads_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PossibleRoads_12, 
                style: style_PossibleRoads_12,
                interactive: true,
                title: '<img src="styles/legend/PossibleRoads_12.png" /> Possible Roads'
            });
var format_GatesofAurelianWall_13 = new ol.format.GeoJSON();
var features_GatesofAurelianWall_13 = format_GatesofAurelianWall_13.readFeatures(json_GatesofAurelianWall_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GatesofAurelianWall_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GatesofAurelianWall_13.addFeatures(features_GatesofAurelianWall_13);
var lyr_GatesofAurelianWall_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GatesofAurelianWall_13, 
                style: style_GatesofAurelianWall_13,
                interactive: true,
                title: '<img src="styles/legend/GatesofAurelianWall_13.png" /> Gates of Aurelian Wall'
            });
var format_Ancientandmedievalbridges_14 = new ol.format.GeoJSON();
var features_Ancientandmedievalbridges_14 = format_Ancientandmedievalbridges_14.readFeatures(json_Ancientandmedievalbridges_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ancientandmedievalbridges_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ancientandmedievalbridges_14.addFeatures(features_Ancientandmedievalbridges_14);
var lyr_Ancientandmedievalbridges_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ancientandmedievalbridges_14, 
                style: style_Ancientandmedievalbridges_14,
                interactive: true,
                title: '<img src="styles/legend/Ancientandmedievalbridges_14.png" /> Ancient and medieval bridges'
            });
var format_GroundPenetratingRadarsurvey_15 = new ol.format.GeoJSON();
var features_GroundPenetratingRadarsurvey_15 = format_GroundPenetratingRadarsurvey_15.readFeatures(json_GroundPenetratingRadarsurvey_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroundPenetratingRadarsurvey_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundPenetratingRadarsurvey_15.addFeatures(features_GroundPenetratingRadarsurvey_15);
var lyr_GroundPenetratingRadarsurvey_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroundPenetratingRadarsurvey_15, 
                style: style_GroundPenetratingRadarsurvey_15,
                interactive: true,
                title: '<img src="styles/legend/GroundPenetratingRadarsurvey_15.png" /> Ground Penetrating Radar survey'
            });
var format_ElectricResistivityTomographysurvey_16 = new ol.format.GeoJSON();
var features_ElectricResistivityTomographysurvey_16 = format_ElectricResistivityTomographysurvey_16.readFeatures(json_ElectricResistivityTomographysurvey_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricResistivityTomographysurvey_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricResistivityTomographysurvey_16.addFeatures(features_ElectricResistivityTomographysurvey_16);
var lyr_ElectricResistivityTomographysurvey_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectricResistivityTomographysurvey_16, 
                style: style_ElectricResistivityTomographysurvey_16,
                interactive: true,
                title: '<img src="styles/legend/ElectricResistivityTomographysurvey_16.png" /> Electric Resistivity Tomography survey'
            });
var format_HistoricalexcavationsandFormaUrbis_17 = new ol.format.GeoJSON();
var features_HistoricalexcavationsandFormaUrbis_17 = format_HistoricalexcavationsandFormaUrbis_17.readFeatures(json_HistoricalexcavationsandFormaUrbis_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricalexcavationsandFormaUrbis_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricalexcavationsandFormaUrbis_17.addFeatures(features_HistoricalexcavationsandFormaUrbis_17);
var lyr_HistoricalexcavationsandFormaUrbis_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HistoricalexcavationsandFormaUrbis_17, 
                style: style_HistoricalexcavationsandFormaUrbis_17,
                interactive: true,
                title: '<img src="styles/legend/HistoricalexcavationsandFormaUrbis_17.png" /> Historical excavations and Forma Urbis'
            });
var format_Religiousbuildings4th9th_18 = new ol.format.GeoJSON();
var features_Religiousbuildings4th9th_18 = format_Religiousbuildings4th9th_18.readFeatures(json_Religiousbuildings4th9th_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Religiousbuildings4th9th_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Religiousbuildings4th9th_18.addFeatures(features_Religiousbuildings4th9th_18);
var lyr_Religiousbuildings4th9th_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Religiousbuildings4th9th_18, 
                style: style_Religiousbuildings4th9th_18,
                interactive: true,
                title: '<img src="styles/legend/Religiousbuildings4th9th_18.png" /> Religious buildings 4th-9th'
            });
var format_Aqueducts_19 = new ol.format.GeoJSON();
var features_Aqueducts_19 = format_Aqueducts_19.readFeatures(json_Aqueducts_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aqueducts_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aqueducts_19.addFeatures(features_Aqueducts_19);
var lyr_Aqueducts_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aqueducts_19, 
                style: style_Aqueducts_19,
                interactive: true,
                title: '<img src="styles/legend/Aqueducts_19.png" /> Aqueducts'
            });
var format_LateAntiqueDomus_20 = new ol.format.GeoJSON();
var features_LateAntiqueDomus_20 = format_LateAntiqueDomus_20.readFeatures(json_LateAntiqueDomus_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LateAntiqueDomus_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LateAntiqueDomus_20.addFeatures(features_LateAntiqueDomus_20);
var lyr_LateAntiqueDomus_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LateAntiqueDomus_20, 
                style: style_LateAntiqueDomus_20,
                interactive: true,
                title: '<img src="styles/legend/LateAntiqueDomus_20.png" /> Late Antique Domus'
            });
var format_Areaswithremainsofroads_21 = new ol.format.GeoJSON();
var features_Areaswithremainsofroads_21 = format_Areaswithremainsofroads_21.readFeatures(json_Areaswithremainsofroads_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areaswithremainsofroads_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areaswithremainsofroads_21.addFeatures(features_Areaswithremainsofroads_21);
var lyr_Areaswithremainsofroads_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areaswithremainsofroads_21, 
                style: style_Areaswithremainsofroads_21,
                interactive: true,
                title: '<img src="styles/legend/Areaswithremainsofroads_21.png" /> Areas with remains of roads'
            });
var format_PossibleRoads_22 = new ol.format.GeoJSON();
var features_PossibleRoads_22 = format_PossibleRoads_22.readFeatures(json_PossibleRoads_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PossibleRoads_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PossibleRoads_22.addFeatures(features_PossibleRoads_22);
var lyr_PossibleRoads_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PossibleRoads_22, 
                style: style_PossibleRoads_22,
                interactive: true,
                title: '<img src="styles/legend/PossibleRoads_22.png" /> Possible Roads'
            });
var format_GatesofAurelianWall_23 = new ol.format.GeoJSON();
var features_GatesofAurelianWall_23 = format_GatesofAurelianWall_23.readFeatures(json_GatesofAurelianWall_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GatesofAurelianWall_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GatesofAurelianWall_23.addFeatures(features_GatesofAurelianWall_23);
var lyr_GatesofAurelianWall_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GatesofAurelianWall_23, 
                style: style_GatesofAurelianWall_23,
                interactive: true,
                title: '<img src="styles/legend/GatesofAurelianWall_23.png" /> Gates of Aurelian Wall'
            });
var format_Ancientandmedievalbridges_24 = new ol.format.GeoJSON();
var features_Ancientandmedievalbridges_24 = format_Ancientandmedievalbridges_24.readFeatures(json_Ancientandmedievalbridges_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ancientandmedievalbridges_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ancientandmedievalbridges_24.addFeatures(features_Ancientandmedievalbridges_24);
var lyr_Ancientandmedievalbridges_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ancientandmedievalbridges_24, 
                style: style_Ancientandmedievalbridges_24,
                interactive: true,
                title: '<img src="styles/legend/Ancientandmedievalbridges_24.png" /> Ancient and medieval bridges'
            });
var format_GroundPenetratingRadarsurvey_25 = new ol.format.GeoJSON();
var features_GroundPenetratingRadarsurvey_25 = format_GroundPenetratingRadarsurvey_25.readFeatures(json_GroundPenetratingRadarsurvey_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroundPenetratingRadarsurvey_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundPenetratingRadarsurvey_25.addFeatures(features_GroundPenetratingRadarsurvey_25);
var lyr_GroundPenetratingRadarsurvey_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroundPenetratingRadarsurvey_25, 
                style: style_GroundPenetratingRadarsurvey_25,
                interactive: true,
                title: '<img src="styles/legend/GroundPenetratingRadarsurvey_25.png" /> Ground Penetrating Radar survey'
            });
var format_ElectricResistivityTomographysurvey_26 = new ol.format.GeoJSON();
var features_ElectricResistivityTomographysurvey_26 = format_ElectricResistivityTomographysurvey_26.readFeatures(json_ElectricResistivityTomographysurvey_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricResistivityTomographysurvey_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricResistivityTomographysurvey_26.addFeatures(features_ElectricResistivityTomographysurvey_26);
var lyr_ElectricResistivityTomographysurvey_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectricResistivityTomographysurvey_26, 
                style: style_ElectricResistivityTomographysurvey_26,
                interactive: true,
                title: '<img src="styles/legend/ElectricResistivityTomographysurvey_26.png" /> Electric Resistivity Tomography survey'
            });
var group_GeophysicalSurveys = new ol.layer.Group({
                                layers: [lyr_GroundPenetratingRadarsurvey_25,lyr_ElectricResistivityTomographysurvey_26,],
                                title: "Geophysical Surveys"});
var group_Archaeologicaldata = new ol.layer.Group({
                                layers: [lyr_HistoricalexcavationsandFormaUrbis_17,lyr_Religiousbuildings4th9th_18,lyr_Aqueducts_19,lyr_LateAntiqueDomus_20,lyr_Areaswithremainsofroads_21,lyr_PossibleRoads_22,lyr_GatesofAurelianWall_23,lyr_Ancientandmedievalbridges_24,],
                                title: "Archaeological data"});
var group_TRAXTIBER = new ol.layer.Group({
                                layers: [lyr_ProjectBoundaries_5,lyr_MainmodernpiazzasofTrastevere_6,lyr_HistoricalexcavationsandFormaUrbis_17,lyr_Religiousbuildings4th9th_18,lyr_Aqueducts_19,lyr_LateAntiqueDomus_20,lyr_Areaswithremainsofroads_21,lyr_PossibleRoads_22,lyr_GatesofAurelianWall_23,lyr_Ancientandmedievalbridges_24,lyr_GroundPenetratingRadarsurvey_25,lyr_ElectricResistivityTomographysurvey_26,],
                                title: "TRAXTIBER"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_Dem_2,lyr_Egeos2011_3,lyr_WikipediaLabelledLayer_4,],
                                title: "Basemaps"});
var group_Ortophoto = new ol.layer.Group({
                                layers: [lyr_Egeos2011_3,],
                                title: "Ortophoto"});
var group_DigitalElevationModel = new ol.layer.Group({
                                layers: [lyr_Dem_2,],
                                title: "Digital Elevation Model"});

lyr_Dem_0.setVisible(false);lyr_Egeos2011_1.setVisible(false);lyr_Dem_2.setVisible(true);lyr_Egeos2011_3.setVisible(true);lyr_WikipediaLabelledLayer_4.setVisible(true);lyr_ProjectBoundaries_5.setVisible(true);lyr_MainmodernpiazzasofTrastevere_6.setVisible(true);lyr_HistoricalexcavationsandFormaUrbis_7.setVisible(true);lyr_Religiousbuildings4th9th_8.setVisible(true);lyr_Aqueducts_9.setVisible(true);lyr_LateAntiqueDomus_10.setVisible(true);lyr_Areaswithremainsofroads_11.setVisible(true);lyr_PossibleRoads_12.setVisible(true);lyr_GatesofAurelianWall_13.setVisible(true);lyr_Ancientandmedievalbridges_14.setVisible(true);lyr_GroundPenetratingRadarsurvey_15.setVisible(true);lyr_ElectricResistivityTomographysurvey_16.setVisible(true);lyr_HistoricalexcavationsandFormaUrbis_17.setVisible(true);lyr_Religiousbuildings4th9th_18.setVisible(true);lyr_Aqueducts_19.setVisible(true);lyr_LateAntiqueDomus_20.setVisible(true);lyr_Areaswithremainsofroads_21.setVisible(true);lyr_PossibleRoads_22.setVisible(true);lyr_GatesofAurelianWall_23.setVisible(true);lyr_Ancientandmedievalbridges_24.setVisible(true);lyr_GroundPenetratingRadarsurvey_25.setVisible(true);lyr_ElectricResistivityTomographysurvey_26.setVisible(true);
var layersList = [group_DigitalElevationModel,group_Ortophoto,group_Basemaps,group_TRAXTIBER];
lyr_ProjectBoundaries_5.set('fieldAliases', {'id': 'id', 'L�mites': 'L�mites', 'Area': 'Area', });
lyr_MainmodernpiazzasofTrastevere_6.set('fieldAliases', {'Tipo': 'Tipo', 'Area': 'Area', });
lyr_HistoricalexcavationsandFormaUrbis_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Religiousbuildings4th9th_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'chronology': 'chronology', });
lyr_Aqueducts_9.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_LateAntiqueDomus_10.set('fieldAliases', {'Name': 'Name', });
lyr_Areaswithremainsofroads_11.set('fieldAliases', {'id': 'id', 'Roads': 'Roads', });
lyr_PossibleRoads_12.set('fieldAliases', {'id': 'id', });
lyr_GatesofAurelianWall_13.set('fieldAliases', {'id': 'id', });
lyr_Ancientandmedievalbridges_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_GroundPenetratingRadarsurvey_15.set('fieldAliases', {'name': 'name', 'distance': 'distance', 'Priority': 'Priority', });
lyr_ElectricResistivityTomographysurvey_16.set('fieldAliases', {'ERT': 'ERT', });
lyr_HistoricalexcavationsandFormaUrbis_17.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Religiousbuildings4th9th_18.set('fieldAliases', {'id': 'id', 'name': 'name', 'chronology': 'chronology', });
lyr_Aqueducts_19.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_LateAntiqueDomus_20.set('fieldAliases', {'Name': 'Name', });
lyr_Areaswithremainsofroads_21.set('fieldAliases', {'id': 'id', 'Roads': 'Roads', });
lyr_PossibleRoads_22.set('fieldAliases', {'id': 'id', });
lyr_GatesofAurelianWall_23.set('fieldAliases', {'id': 'id', });
lyr_Ancientandmedievalbridges_24.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_GroundPenetratingRadarsurvey_25.set('fieldAliases', {'name': 'name', 'distance': 'distance', 'Priority': 'Priority', });
lyr_ElectricResistivityTomographysurvey_26.set('fieldAliases', {'ERT': 'ERT', });
lyr_ProjectBoundaries_5.set('fieldImages', {'id': 'TextEdit', 'L�mites': 'TextEdit', 'Area': 'TextEdit', });
lyr_MainmodernpiazzasofTrastevere_6.set('fieldImages', {'Tipo': 'TextEdit', 'Area': '', });
lyr_HistoricalexcavationsandFormaUrbis_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Religiousbuildings4th9th_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'chronology': 'TextEdit', });
lyr_Aqueducts_9.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_LateAntiqueDomus_10.set('fieldImages', {'Name': 'TextEdit', });
lyr_Areaswithremainsofroads_11.set('fieldImages', {'id': 'TextEdit', 'Roads': 'TextEdit', });
lyr_PossibleRoads_12.set('fieldImages', {'id': 'TextEdit', });
lyr_GatesofAurelianWall_13.set('fieldImages', {'id': 'TextEdit', });
lyr_Ancientandmedievalbridges_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_GroundPenetratingRadarsurvey_15.set('fieldImages', {'name': 'TextEdit', 'distance': 'TextEdit', 'Priority': 'TextEdit', });
lyr_ElectricResistivityTomographysurvey_16.set('fieldImages', {'ERT': 'TextEdit', });
lyr_HistoricalexcavationsandFormaUrbis_17.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Religiousbuildings4th9th_18.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'chronology': 'TextEdit', });
lyr_Aqueducts_19.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_LateAntiqueDomus_20.set('fieldImages', {'Name': 'TextEdit', });
lyr_Areaswithremainsofroads_21.set('fieldImages', {'id': 'TextEdit', 'Roads': 'TextEdit', });
lyr_PossibleRoads_22.set('fieldImages', {'id': 'TextEdit', });
lyr_GatesofAurelianWall_23.set('fieldImages', {'id': 'TextEdit', });
lyr_Ancientandmedievalbridges_24.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_GroundPenetratingRadarsurvey_25.set('fieldImages', {'name': 'TextEdit', 'distance': 'TextEdit', 'Priority': 'TextEdit', });
lyr_ElectricResistivityTomographysurvey_26.set('fieldImages', {'ERT': 'TextEdit', });
lyr_ProjectBoundaries_5.set('fieldLabels', {});
lyr_MainmodernpiazzasofTrastevere_6.set('fieldLabels', {});
lyr_HistoricalexcavationsandFormaUrbis_7.set('fieldLabels', {});
lyr_Religiousbuildings4th9th_8.set('fieldLabels', {});
lyr_Aqueducts_9.set('fieldLabels', {});
lyr_LateAntiqueDomus_10.set('fieldLabels', {});
lyr_Areaswithremainsofroads_11.set('fieldLabels', {});
lyr_PossibleRoads_12.set('fieldLabels', {});
lyr_GatesofAurelianWall_13.set('fieldLabels', {});
lyr_Ancientandmedievalbridges_14.set('fieldLabels', {});
lyr_GroundPenetratingRadarsurvey_15.set('fieldLabels', {});
lyr_ElectricResistivityTomographysurvey_16.set('fieldLabels', {});
lyr_HistoricalexcavationsandFormaUrbis_17.set('fieldLabels', {});
lyr_Religiousbuildings4th9th_18.set('fieldLabels', {});
lyr_Aqueducts_19.set('fieldLabels', {});
lyr_LateAntiqueDomus_20.set('fieldLabels', {});
lyr_Areaswithremainsofroads_21.set('fieldLabels', {});
lyr_PossibleRoads_22.set('fieldLabels', {});
lyr_GatesofAurelianWall_23.set('fieldLabels', {});
lyr_Ancientandmedievalbridges_24.set('fieldLabels', {});
lyr_GroundPenetratingRadarsurvey_25.set('fieldLabels', {});
lyr_ElectricResistivityTomographysurvey_26.set('fieldLabels', {});
lyr_ElectricResistivityTomographysurvey_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});