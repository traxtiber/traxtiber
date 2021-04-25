var wms_layers = [];

var format_RomaCentroStorico_0 = new ol.format.GeoJSON();
var features_RomaCentroStorico_0 = format_RomaCentroStorico_0.readFeatures(json_RomaCentroStorico_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RomaCentroStorico_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RomaCentroStorico_0.addFeatures(features_RomaCentroStorico_0);
var lyr_RomaCentroStorico_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RomaCentroStorico_0,
maxResolution:28004.466152261964,
 
                style: style_RomaCentroStorico_0,
                interactive: true,
                title: '<img src="styles/legend/RomaCentroStorico_0.png" /> Roma Centro Storico'
            });
var format_ProjectBoundaries_1 = new ol.format.GeoJSON();
var features_ProjectBoundaries_1 = format_ProjectBoundaries_1.readFeatures(json_ProjectBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectBoundaries_1.addFeatures(features_ProjectBoundaries_1);
var lyr_ProjectBoundaries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjectBoundaries_1, 
                style: style_ProjectBoundaries_1,
                interactive: true,
                title: '<img src="styles/legend/ProjectBoundaries_1.png" /> Project Boundaries'
            });
var format_MainmodernpiazzasofTrastevere_2 = new ol.format.GeoJSON();
var features_MainmodernpiazzasofTrastevere_2 = format_MainmodernpiazzasofTrastevere_2.readFeatures(json_MainmodernpiazzasofTrastevere_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainmodernpiazzasofTrastevere_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainmodernpiazzasofTrastevere_2.addFeatures(features_MainmodernpiazzasofTrastevere_2);
var lyr_MainmodernpiazzasofTrastevere_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MainmodernpiazzasofTrastevere_2, 
                style: style_MainmodernpiazzasofTrastevere_2,
                interactive: true,
                title: '<img src="styles/legend/MainmodernpiazzasofTrastevere_2.png" /> Main modern piazzas of Trastevere'
            });
var format_HistoricalexcavationsandFormaUrbis_3 = new ol.format.GeoJSON();
var features_HistoricalexcavationsandFormaUrbis_3 = format_HistoricalexcavationsandFormaUrbis_3.readFeatures(json_HistoricalexcavationsandFormaUrbis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricalexcavationsandFormaUrbis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricalexcavationsandFormaUrbis_3.addFeatures(features_HistoricalexcavationsandFormaUrbis_3);
var lyr_HistoricalexcavationsandFormaUrbis_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HistoricalexcavationsandFormaUrbis_3, 
                style: style_HistoricalexcavationsandFormaUrbis_3,
                interactive: true,
                title: '<img src="styles/legend/HistoricalexcavationsandFormaUrbis_3.png" /> Historical excavations and Forma Urbis'
            });
var format_Aqueducts_4 = new ol.format.GeoJSON();
var features_Aqueducts_4 = format_Aqueducts_4.readFeatures(json_Aqueducts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aqueducts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aqueducts_4.addFeatures(features_Aqueducts_4);
var lyr_Aqueducts_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aqueducts_4, 
                style: style_Aqueducts_4,
                interactive: true,
                title: '<img src="styles/legend/Aqueducts_4.png" /> Aqueducts'
            });
var format_LateAntiqueDomus_5 = new ol.format.GeoJSON();
var features_LateAntiqueDomus_5 = format_LateAntiqueDomus_5.readFeatures(json_LateAntiqueDomus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LateAntiqueDomus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LateAntiqueDomus_5.addFeatures(features_LateAntiqueDomus_5);
var lyr_LateAntiqueDomus_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LateAntiqueDomus_5, 
                style: style_LateAntiqueDomus_5,
                interactive: true,
                title: '<img src="styles/legend/LateAntiqueDomus_5.png" /> Late Antique Domus'
            });
var format_Archaeologicalareaswithremainsofancientroads_6 = new ol.format.GeoJSON();
var features_Archaeologicalareaswithremainsofancientroads_6 = format_Archaeologicalareaswithremainsofancientroads_6.readFeatures(json_Archaeologicalareaswithremainsofancientroads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Archaeologicalareaswithremainsofancientroads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Archaeologicalareaswithremainsofancientroads_6.addFeatures(features_Archaeologicalareaswithremainsofancientroads_6);
var lyr_Archaeologicalareaswithremainsofancientroads_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Archaeologicalareaswithremainsofancientroads_6, 
                style: style_Archaeologicalareaswithremainsofancientroads_6,
                interactive: true,
                title: '<img src="styles/legend/Archaeologicalareaswithremainsofancientroads_6.png" /> Archaeological areas with remains of ancient roads'
            });
var format_PossibleRoads_7 = new ol.format.GeoJSON();
var features_PossibleRoads_7 = format_PossibleRoads_7.readFeatures(json_PossibleRoads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PossibleRoads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PossibleRoads_7.addFeatures(features_PossibleRoads_7);
var lyr_PossibleRoads_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PossibleRoads_7, 
                style: style_PossibleRoads_7,
                interactive: true,
                title: '<img src="styles/legend/PossibleRoads_7.png" /> Possible Roads'
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
var format_GatesofAurelianWall_9 = new ol.format.GeoJSON();
var features_GatesofAurelianWall_9 = format_GatesofAurelianWall_9.readFeatures(json_GatesofAurelianWall_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GatesofAurelianWall_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GatesofAurelianWall_9.addFeatures(features_GatesofAurelianWall_9);
var lyr_GatesofAurelianWall_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GatesofAurelianWall_9, 
                style: style_GatesofAurelianWall_9,
                interactive: true,
                title: '<img src="styles/legend/GatesofAurelianWall_9.png" /> Gates of Aurelian Wall'
            });
var format_Ancientandmedievalbridges_10 = new ol.format.GeoJSON();
var features_Ancientandmedievalbridges_10 = format_Ancientandmedievalbridges_10.readFeatures(json_Ancientandmedievalbridges_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ancientandmedievalbridges_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ancientandmedievalbridges_10.addFeatures(features_Ancientandmedievalbridges_10);
var lyr_Ancientandmedievalbridges_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ancientandmedievalbridges_10, 
                style: style_Ancientandmedievalbridges_10,
                interactive: true,
                title: '<img src="styles/legend/Ancientandmedievalbridges_10.png" /> Ancient and medieval bridges'
            });
var format_ElectricResistivityTomographysurvey_11 = new ol.format.GeoJSON();
var features_ElectricResistivityTomographysurvey_11 = format_ElectricResistivityTomographysurvey_11.readFeatures(json_ElectricResistivityTomographysurvey_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricResistivityTomographysurvey_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricResistivityTomographysurvey_11.addFeatures(features_ElectricResistivityTomographysurvey_11);
var lyr_ElectricResistivityTomographysurvey_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectricResistivityTomographysurvey_11, 
                style: style_ElectricResistivityTomographysurvey_11,
                interactive: true,
                title: '<img src="styles/legend/ElectricResistivityTomographysurvey_11.png" /> Electric Resistivity Tomography survey'
            });
var format_GroundPenetratingRadarsurvey_12 = new ol.format.GeoJSON();
var features_GroundPenetratingRadarsurvey_12 = format_GroundPenetratingRadarsurvey_12.readFeatures(json_GroundPenetratingRadarsurvey_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroundPenetratingRadarsurvey_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundPenetratingRadarsurvey_12.addFeatures(features_GroundPenetratingRadarsurvey_12);
var lyr_GroundPenetratingRadarsurvey_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroundPenetratingRadarsurvey_12, 
                style: style_GroundPenetratingRadarsurvey_12,
                interactive: true,
                title: '<img src="styles/legend/GroundPenetratingRadarsurvey_12.png" /> Ground Penetrating Radar survey'
            });
var format_HistoricalexcavationsandFormaUrbis_13 = new ol.format.GeoJSON();
var features_HistoricalexcavationsandFormaUrbis_13 = format_HistoricalexcavationsandFormaUrbis_13.readFeatures(json_HistoricalexcavationsandFormaUrbis_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricalexcavationsandFormaUrbis_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricalexcavationsandFormaUrbis_13.addFeatures(features_HistoricalexcavationsandFormaUrbis_13);
var lyr_HistoricalexcavationsandFormaUrbis_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HistoricalexcavationsandFormaUrbis_13, 
                style: style_HistoricalexcavationsandFormaUrbis_13,
                interactive: true,
                title: '<img src="styles/legend/HistoricalexcavationsandFormaUrbis_13.png" /> Historical excavations and Forma Urbis'
            });
var format_Aqueducts_14 = new ol.format.GeoJSON();
var features_Aqueducts_14 = format_Aqueducts_14.readFeatures(json_Aqueducts_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aqueducts_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aqueducts_14.addFeatures(features_Aqueducts_14);
var lyr_Aqueducts_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aqueducts_14, 
                style: style_Aqueducts_14,
                interactive: true,
                title: '<img src="styles/legend/Aqueducts_14.png" /> Aqueducts'
            });
var format_LateAntiqueDomus_15 = new ol.format.GeoJSON();
var features_LateAntiqueDomus_15 = format_LateAntiqueDomus_15.readFeatures(json_LateAntiqueDomus_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LateAntiqueDomus_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LateAntiqueDomus_15.addFeatures(features_LateAntiqueDomus_15);
var lyr_LateAntiqueDomus_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LateAntiqueDomus_15, 
                style: style_LateAntiqueDomus_15,
                interactive: true,
                title: '<img src="styles/legend/LateAntiqueDomus_15.png" /> Late Antique Domus'
            });
var format_Archaeologicalareaswithremainsofancientroads_16 = new ol.format.GeoJSON();
var features_Archaeologicalareaswithremainsofancientroads_16 = format_Archaeologicalareaswithremainsofancientroads_16.readFeatures(json_Archaeologicalareaswithremainsofancientroads_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Archaeologicalareaswithremainsofancientroads_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Archaeologicalareaswithremainsofancientroads_16.addFeatures(features_Archaeologicalareaswithremainsofancientroads_16);
var lyr_Archaeologicalareaswithremainsofancientroads_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Archaeologicalareaswithremainsofancientroads_16, 
                style: style_Archaeologicalareaswithremainsofancientroads_16,
                interactive: true,
                title: '<img src="styles/legend/Archaeologicalareaswithremainsofancientroads_16.png" /> Archaeological areas with remains of ancient roads'
            });
var format_PossibleRoads_17 = new ol.format.GeoJSON();
var features_PossibleRoads_17 = format_PossibleRoads_17.readFeatures(json_PossibleRoads_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PossibleRoads_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PossibleRoads_17.addFeatures(features_PossibleRoads_17);
var lyr_PossibleRoads_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PossibleRoads_17, 
                style: style_PossibleRoads_17,
                interactive: true,
                title: '<img src="styles/legend/PossibleRoads_17.png" /> Possible Roads'
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
var format_GatesofAurelianWall_19 = new ol.format.GeoJSON();
var features_GatesofAurelianWall_19 = format_GatesofAurelianWall_19.readFeatures(json_GatesofAurelianWall_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GatesofAurelianWall_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GatesofAurelianWall_19.addFeatures(features_GatesofAurelianWall_19);
var lyr_GatesofAurelianWall_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GatesofAurelianWall_19, 
                style: style_GatesofAurelianWall_19,
                interactive: true,
                title: '<img src="styles/legend/GatesofAurelianWall_19.png" /> Gates of Aurelian Wall'
            });
var format_Ancientandmedievalbridges_20 = new ol.format.GeoJSON();
var features_Ancientandmedievalbridges_20 = format_Ancientandmedievalbridges_20.readFeatures(json_Ancientandmedievalbridges_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ancientandmedievalbridges_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ancientandmedievalbridges_20.addFeatures(features_Ancientandmedievalbridges_20);
var lyr_Ancientandmedievalbridges_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ancientandmedievalbridges_20, 
                style: style_Ancientandmedievalbridges_20,
                interactive: true,
                title: '<img src="styles/legend/Ancientandmedievalbridges_20.png" /> Ancient and medieval bridges'
            });
var format_ElectricResistivityTomographysurvey_21 = new ol.format.GeoJSON();
var features_ElectricResistivityTomographysurvey_21 = format_ElectricResistivityTomographysurvey_21.readFeatures(json_ElectricResistivityTomographysurvey_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricResistivityTomographysurvey_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricResistivityTomographysurvey_21.addFeatures(features_ElectricResistivityTomographysurvey_21);
var lyr_ElectricResistivityTomographysurvey_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectricResistivityTomographysurvey_21, 
                style: style_ElectricResistivityTomographysurvey_21,
                interactive: true,
                title: '<img src="styles/legend/ElectricResistivityTomographysurvey_21.png" /> Electric Resistivity Tomography survey'
            });
var format_GroundPenetratingRadarsurvey_22 = new ol.format.GeoJSON();
var features_GroundPenetratingRadarsurvey_22 = format_GroundPenetratingRadarsurvey_22.readFeatures(json_GroundPenetratingRadarsurvey_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroundPenetratingRadarsurvey_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundPenetratingRadarsurvey_22.addFeatures(features_GroundPenetratingRadarsurvey_22);
var lyr_GroundPenetratingRadarsurvey_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroundPenetratingRadarsurvey_22, 
                style: style_GroundPenetratingRadarsurvey_22,
                interactive: true,
                title: '<img src="styles/legend/GroundPenetratingRadarsurvey_22.png" /> Ground Penetrating Radar survey'
            });
var group_GeophysicalSurveys = new ol.layer.Group({
                                layers: [lyr_ElectricResistivityTomographysurvey_21,lyr_GroundPenetratingRadarsurvey_22,],
                                title: "Geophysical Surveys"});
var group_Archaeologicaldata = new ol.layer.Group({
                                layers: [lyr_HistoricalexcavationsandFormaUrbis_13,lyr_Aqueducts_14,lyr_LateAntiqueDomus_15,lyr_Archaeologicalareaswithremainsofancientroads_16,lyr_PossibleRoads_17,lyr_Religiousbuildings4th9th_18,lyr_GatesofAurelianWall_19,lyr_Ancientandmedievalbridges_20,],
                                title: "Archaeological data"});
var group_TRAXTIBER = new ol.layer.Group({
                                layers: [lyr_ProjectBoundaries_1,lyr_MainmodernpiazzasofTrastevere_2,lyr_HistoricalexcavationsandFormaUrbis_13,lyr_Aqueducts_14,lyr_LateAntiqueDomus_15,lyr_Archaeologicalareaswithremainsofancientroads_16,lyr_PossibleRoads_17,lyr_Religiousbuildings4th9th_18,lyr_GatesofAurelianWall_19,lyr_Ancientandmedievalbridges_20,lyr_ElectricResistivityTomographysurvey_21,lyr_GroundPenetratingRadarsurvey_22,],
                                title: "TRAXTIBER"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_RomaCentroStorico_0,],
                                title: "Basemap"});

lyr_RomaCentroStorico_0.setVisible(true);lyr_ProjectBoundaries_1.setVisible(true);lyr_MainmodernpiazzasofTrastevere_2.setVisible(true);lyr_HistoricalexcavationsandFormaUrbis_3.setVisible(true);lyr_Aqueducts_4.setVisible(true);lyr_LateAntiqueDomus_5.setVisible(true);lyr_Archaeologicalareaswithremainsofancientroads_6.setVisible(true);lyr_PossibleRoads_7.setVisible(true);lyr_Religiousbuildings4th9th_8.setVisible(true);lyr_GatesofAurelianWall_9.setVisible(true);lyr_Ancientandmedievalbridges_10.setVisible(true);lyr_ElectricResistivityTomographysurvey_11.setVisible(true);lyr_GroundPenetratingRadarsurvey_12.setVisible(true);lyr_HistoricalexcavationsandFormaUrbis_13.setVisible(true);lyr_Aqueducts_14.setVisible(true);lyr_LateAntiqueDomus_15.setVisible(true);lyr_Archaeologicalareaswithremainsofancientroads_16.setVisible(true);lyr_PossibleRoads_17.setVisible(true);lyr_Religiousbuildings4th9th_18.setVisible(true);lyr_GatesofAurelianWall_19.setVisible(true);lyr_Ancientandmedievalbridges_20.setVisible(true);lyr_ElectricResistivityTomographysurvey_21.setVisible(true);lyr_GroundPenetratingRadarsurvey_22.setVisible(true);
var layersList = [group_Basemap,group_TRAXTIBER];
lyr_RomaCentroStorico_0.set('fieldAliases', {'cadgeom_type': 'cadgeom_type', 'thickness': 'thickness', 'color': 'color', 'extentity_data': 'extentity_data', 'text': 'text', });
lyr_ProjectBoundaries_1.set('fieldAliases', {'id': 'id', 'L�mites': 'L�mites', 'Area': 'Area', });
lyr_MainmodernpiazzasofTrastevere_2.set('fieldAliases', {'Tipo': 'Tipo', 'Area': 'Area', });
lyr_HistoricalexcavationsandFormaUrbis_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Aqueducts_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_LateAntiqueDomus_5.set('fieldAliases', {'Name': 'Name', });
lyr_Archaeologicalareaswithremainsofancientroads_6.set('fieldAliases', {'id': 'id', 'Roads': 'Roads', });
lyr_PossibleRoads_7.set('fieldAliases', {'id': 'id', });
lyr_Religiousbuildings4th9th_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'chronology': 'chronology', });
lyr_GatesofAurelianWall_9.set('fieldAliases', {'id': 'id', });
lyr_Ancientandmedievalbridges_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ElectricResistivityTomographysurvey_11.set('fieldAliases', {'ERT': 'ERT', });
lyr_GroundPenetratingRadarsurvey_12.set('fieldAliases', {'name': 'name', 'distance': 'distance', 'Priority': 'Priority', });
lyr_HistoricalexcavationsandFormaUrbis_13.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Aqueducts_14.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_LateAntiqueDomus_15.set('fieldAliases', {'Name': 'Name', });
lyr_Archaeologicalareaswithremainsofancientroads_16.set('fieldAliases', {'id': 'id', 'Roads': 'Roads', });
lyr_PossibleRoads_17.set('fieldAliases', {'id': 'id', });
lyr_Religiousbuildings4th9th_18.set('fieldAliases', {'id': 'id', 'name': 'name', 'chronology': 'chronology', });
lyr_GatesofAurelianWall_19.set('fieldAliases', {'id': 'id', });
lyr_Ancientandmedievalbridges_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ElectricResistivityTomographysurvey_21.set('fieldAliases', {'ERT': 'ERT', });
lyr_GroundPenetratingRadarsurvey_22.set('fieldAliases', {'name': 'name', 'distance': 'distance', 'Priority': 'Priority', });
lyr_RomaCentroStorico_0.set('fieldImages', {'cadgeom_type': 'TextEdit', 'thickness': 'TextEdit', 'color': 'TextEdit', 'extentity_data': 'TextEdit', 'text': 'TextEdit', });
lyr_ProjectBoundaries_1.set('fieldImages', {'id': 'TextEdit', 'L�mites': 'TextEdit', 'Area': 'TextEdit', });
lyr_MainmodernpiazzasofTrastevere_2.set('fieldImages', {'Tipo': 'TextEdit', 'Area': '', });
lyr_HistoricalexcavationsandFormaUrbis_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Aqueducts_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_LateAntiqueDomus_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_Archaeologicalareaswithremainsofancientroads_6.set('fieldImages', {'id': 'TextEdit', 'Roads': 'TextEdit', });
lyr_PossibleRoads_7.set('fieldImages', {'id': 'TextEdit', });
lyr_Religiousbuildings4th9th_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'chronology': 'TextEdit', });
lyr_GatesofAurelianWall_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Ancientandmedievalbridges_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ElectricResistivityTomographysurvey_11.set('fieldImages', {'ERT': 'TextEdit', });
lyr_GroundPenetratingRadarsurvey_12.set('fieldImages', {'name': 'TextEdit', 'distance': 'TextEdit', 'Priority': 'TextEdit', });
lyr_HistoricalexcavationsandFormaUrbis_13.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Aqueducts_14.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_LateAntiqueDomus_15.set('fieldImages', {'Name': 'TextEdit', });
lyr_Archaeologicalareaswithremainsofancientroads_16.set('fieldImages', {'id': 'TextEdit', 'Roads': 'TextEdit', });
lyr_PossibleRoads_17.set('fieldImages', {'id': 'TextEdit', });
lyr_Religiousbuildings4th9th_18.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'chronology': 'TextEdit', });
lyr_GatesofAurelianWall_19.set('fieldImages', {'id': 'TextEdit', });
lyr_Ancientandmedievalbridges_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ElectricResistivityTomographysurvey_21.set('fieldImages', {'ERT': 'TextEdit', });
lyr_GroundPenetratingRadarsurvey_22.set('fieldImages', {'name': 'TextEdit', 'distance': 'TextEdit', 'Priority': 'TextEdit', });
lyr_RomaCentroStorico_0.set('fieldLabels', {});
lyr_ProjectBoundaries_1.set('fieldLabels', {});
lyr_MainmodernpiazzasofTrastevere_2.set('fieldLabels', {});
lyr_HistoricalexcavationsandFormaUrbis_3.set('fieldLabels', {});
lyr_Aqueducts_4.set('fieldLabels', {});
lyr_LateAntiqueDomus_5.set('fieldLabels', {});
lyr_Archaeologicalareaswithremainsofancientroads_6.set('fieldLabels', {});
lyr_PossibleRoads_7.set('fieldLabels', {});
lyr_Religiousbuildings4th9th_8.set('fieldLabels', {});
lyr_GatesofAurelianWall_9.set('fieldLabels', {});
lyr_Ancientandmedievalbridges_10.set('fieldLabels', {});
lyr_ElectricResistivityTomographysurvey_11.set('fieldLabels', {});
lyr_GroundPenetratingRadarsurvey_12.set('fieldLabels', {});
lyr_HistoricalexcavationsandFormaUrbis_13.set('fieldLabels', {});
lyr_Aqueducts_14.set('fieldLabels', {});
lyr_LateAntiqueDomus_15.set('fieldLabels', {});
lyr_Archaeologicalareaswithremainsofancientroads_16.set('fieldLabels', {});
lyr_PossibleRoads_17.set('fieldLabels', {});
lyr_Religiousbuildings4th9th_18.set('fieldLabels', {});
lyr_GatesofAurelianWall_19.set('fieldLabels', {});
lyr_Ancientandmedievalbridges_20.set('fieldLabels', {});
lyr_ElectricResistivityTomographysurvey_21.set('fieldLabels', {});
lyr_GroundPenetratingRadarsurvey_22.set('fieldLabels', {});
lyr_GroundPenetratingRadarsurvey_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});