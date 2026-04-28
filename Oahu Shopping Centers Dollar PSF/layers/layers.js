ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102202").setExtent([599957.600799, 2360516.407184, 617550.856796, 2373154.185710]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ShoppingCenters_1 = new ol.format.GeoJSON();
var features_ShoppingCenters_1 = format_ShoppingCenters_1.readFeatures(json_ShoppingCenters_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102202'});
var jsonSource_ShoppingCenters_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShoppingCenters_1.addFeatures(features_ShoppingCenters_1);
var lyr_ShoppingCenters_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShoppingCenters_1, 
                style: style_ShoppingCenters_1,
                popuplayertitle: 'Shopping Centers',
                interactive: true,
    title: 'Shopping Centers<br />\
    <img src="styles/legend/ShoppingCenters_1_0.png" /> >= $70 PSF<br />\
    <img src="styles/legend/ShoppingCenters_1_1.png" /> < $70 PSF<br />' });
var format_LandTaxExemption_2 = new ol.format.GeoJSON();
var features_LandTaxExemption_2 = format_LandTaxExemption_2.readFeatures(json_LandTaxExemption_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102202'});
var jsonSource_LandTaxExemption_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandTaxExemption_2.addFeatures(features_LandTaxExemption_2);
var lyr_LandTaxExemption_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandTaxExemption_2, 
                style: style_LandTaxExemption_2,
                popuplayertitle: 'Land Tax Exemption',
                interactive: false,
                title: '<img src="styles/legend/LandTaxExemption_2.png" /> Land Tax Exemption'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ShoppingCenters_1.setVisible(true);lyr_LandTaxExemption_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ShoppingCenters_1,lyr_LandTaxExemption_2];
lyr_ShoppingCenters_1.set('fieldAliases', {'fid': 'fid', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'objectid': 'objectid', 'tmk': 'tmk', 'tmk_txt': 'tmk_txt', 'county': 'county', 'division': 'division', 'island': 'island', 'zone': 'zone', 'section': 'section', 'plat': 'plat', 'plat1': 'plat1', 'parcel': 'parcel', 'parcel1': 'parcel1', 'cty_tmk': 'cty_tmk', 'gisacres': 'gisacres', 'qpub_link': 'qpub_link', 'No.': 'No.', 'fid_2': 'fid_2', 'st_area(shape)_2': 'st_area(shape)_2', 'st_perimeter(shape)_2': 'st_perimeter(shape)_2', 'objectid_2': 'objectid_2', 'zone_class': 'zone_class', 'zoning_des': 'zoning_des', 'zoning_lab': 'zoning_lab', 'loaddate': 'loaddate', 'C_fid': 'C_fid', 'C_parid': 'C_parid', 'C_tmk': 'C_tmk', 'C_suffix': 'C_suffix', 'C_seq': 'C_seq', 'C_taxyr': 'C_taxyr', 'C_buildingvalue': 'C_buildingvalue', 'C_buildingexemption': 'C_buildingexemption', 'C_landvalue': 'C_landvalue', 'C_landexemption': 'C_landexemption', 'C_taxratecode': 'C_taxratecode', 'C_tnettaxval': 'C_tnettaxval', 'C_ovrclass': 'C_ovrclass', 'C_pittsqft': 'C_pittsqft', 'C_pittacre': 'C_pittacre', 'C_objectid': 'C_objectid', 'C_mixedclass': 'C_mixedclass', 'sqft_la': 'sqft_la', 'acres_la': 'acres_la', 'netlandvalue': 'netlandvalue', 'netbuildingvalue': 'netbuildingvalue', 'totalassesedtax': 'totalassesedtax', '$PSFlandvalued': '$PSFlandvalued', 'landexemption': 'landexemption', });
lyr_LandTaxExemption_2.set('fieldAliases', {'fid': 'fid', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'objectid': 'objectid', 'tmk': 'tmk', 'tmk_txt': 'tmk_txt', 'county': 'county', 'division': 'division', 'island': 'island', 'zone': 'zone', 'section': 'section', 'plat': 'plat', 'plat1': 'plat1', 'parcel': 'parcel', 'parcel1': 'parcel1', 'cty_tmk': 'cty_tmk', 'gisacres': 'gisacres', 'qpub_link': 'qpub_link', 'No.': 'No.', 'fid_2': 'fid_2', 'st_area(shape)_2': 'st_area(shape)_2', 'st_perimeter(shape)_2': 'st_perimeter(shape)_2', 'objectid_2': 'objectid_2', 'zone_class': 'zone_class', 'zoning_des': 'zoning_des', 'zoning_lab': 'zoning_lab', 'loaddate': 'loaddate', 'C_fid': 'C_fid', 'C_parid': 'C_parid', 'C_tmk': 'C_tmk', 'C_suffix': 'C_suffix', 'C_seq': 'C_seq', 'C_taxyr': 'C_taxyr', 'C_buildingvalue': 'C_buildingvalue', 'C_buildingexemption': 'C_buildingexemption', 'C_landvalue': 'C_landvalue', 'C_landexemption': 'C_landexemption', 'C_taxratecode': 'C_taxratecode', 'C_tnettaxval': 'C_tnettaxval', 'C_ovrclass': 'C_ovrclass', 'C_pittsqft': 'C_pittsqft', 'C_pittacre': 'C_pittacre', 'C_objectid': 'C_objectid', 'C_mixedclass': 'C_mixedclass', 'sqft_la': 'sqft_la', 'acres_la': 'acres_la', 'netlandvalue': 'netlandvalue', 'netbuildingvalue': 'netbuildingvalue', 'totalassesedtax': 'totalassesedtax', '$PSFlandvalued': '$PSFlandvalued', 'landexemption': 'landexemption', });
lyr_ShoppingCenters_1.set('fieldImages', {'fid': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'objectid': 'TextEdit', 'tmk': 'TextEdit', 'tmk_txt': 'TextEdit', 'county': 'TextEdit', 'division': 'TextEdit', 'island': 'TextEdit', 'zone': 'TextEdit', 'section': 'TextEdit', 'plat': 'TextEdit', 'plat1': 'TextEdit', 'parcel': 'TextEdit', 'parcel1': 'TextEdit', 'cty_tmk': 'TextEdit', 'gisacres': 'TextEdit', 'qpub_link': 'TextEdit', 'No.': 'TextEdit', 'fid_2': 'TextEdit', 'st_area(shape)_2': 'TextEdit', 'st_perimeter(shape)_2': 'TextEdit', 'objectid_2': 'TextEdit', 'zone_class': 'TextEdit', 'zoning_des': 'TextEdit', 'zoning_lab': 'TextEdit', 'loaddate': 'DateTime', 'C_fid': 'TextEdit', 'C_parid': 'TextEdit', 'C_tmk': 'Range', 'C_suffix': 'Range', 'C_seq': 'Range', 'C_taxyr': 'Range', 'C_buildingvalue': 'Range', 'C_buildingexemption': 'Range', 'C_landvalue': 'TextEdit', 'C_landexemption': 'TextEdit', 'C_taxratecode': 'Range', 'C_tnettaxval': 'Range', 'C_ovrclass': 'Range', 'C_pittsqft': 'CheckBox', 'C_pittacre': 'CheckBox', 'C_objectid': 'Range', 'C_mixedclass': 'CheckBox', 'sqft_la': 'TextEdit', 'acres_la': 'TextEdit', 'netlandvalue': 'TextEdit', 'netbuildingvalue': 'TextEdit', 'totalassesedtax': 'TextEdit', '$PSFlandvalued': 'TextEdit', 'landexemption': 'CheckBox', });
lyr_LandTaxExemption_2.set('fieldImages', {'fid': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'objectid': 'TextEdit', 'tmk': 'TextEdit', 'tmk_txt': 'TextEdit', 'county': 'TextEdit', 'division': 'TextEdit', 'island': 'TextEdit', 'zone': 'TextEdit', 'section': 'TextEdit', 'plat': 'TextEdit', 'plat1': 'TextEdit', 'parcel': 'TextEdit', 'parcel1': 'TextEdit', 'cty_tmk': 'TextEdit', 'gisacres': 'TextEdit', 'qpub_link': 'TextEdit', 'No.': 'TextEdit', 'fid_2': 'TextEdit', 'st_area(shape)_2': 'TextEdit', 'st_perimeter(shape)_2': 'TextEdit', 'objectid_2': 'TextEdit', 'zone_class': 'TextEdit', 'zoning_des': 'TextEdit', 'zoning_lab': 'TextEdit', 'loaddate': 'DateTime', 'C_fid': 'TextEdit', 'C_parid': 'TextEdit', 'C_tmk': 'Range', 'C_suffix': 'Range', 'C_seq': 'Range', 'C_taxyr': 'Range', 'C_buildingvalue': 'Range', 'C_buildingexemption': 'Range', 'C_landvalue': 'TextEdit', 'C_landexemption': 'TextEdit', 'C_taxratecode': 'Range', 'C_tnettaxval': 'Range', 'C_ovrclass': 'Range', 'C_pittsqft': 'CheckBox', 'C_pittacre': 'CheckBox', 'C_objectid': 'Range', 'C_mixedclass': 'CheckBox', 'sqft_la': 'TextEdit', 'acres_la': 'TextEdit', 'netlandvalue': 'TextEdit', 'netbuildingvalue': 'TextEdit', 'totalassesedtax': 'TextEdit', '$PSFlandvalued': 'TextEdit', 'landexemption': 'CheckBox', });
lyr_ShoppingCenters_1.set('fieldLabels', {'fid': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'objectid': 'hidden field', 'tmk': 'inline label - visible with data', 'tmk_txt': 'hidden field', 'county': 'hidden field', 'division': 'hidden field', 'island': 'hidden field', 'zone': 'hidden field', 'section': 'hidden field', 'plat': 'hidden field', 'plat1': 'hidden field', 'parcel': 'hidden field', 'parcel1': 'hidden field', 'cty_tmk': 'hidden field', 'gisacres': 'hidden field', 'qpub_link': 'inline label - visible with data', 'No.': 'hidden field', 'fid_2': 'hidden field', 'st_area(shape)_2': 'hidden field', 'st_perimeter(shape)_2': 'hidden field', 'objectid_2': 'hidden field', 'zone_class': 'hidden field', 'zoning_des': 'inline label - visible with data', 'zoning_lab': 'hidden field', 'loaddate': 'hidden field', 'C_fid': 'hidden field', 'C_parid': 'hidden field', 'C_tmk': 'hidden field', 'C_suffix': 'hidden field', 'C_seq': 'hidden field', 'C_taxyr': 'inline label - visible with data', 'C_buildingvalue': 'inline label - visible with data', 'C_buildingexemption': 'inline label - visible with data', 'C_landvalue': 'inline label - visible with data', 'C_landexemption': 'inline label - visible with data', 'C_taxratecode': 'inline label - visible with data', 'C_tnettaxval': 'inline label - visible with data', 'C_ovrclass': 'hidden field', 'C_pittsqft': 'hidden field', 'C_pittacre': 'hidden field', 'C_objectid': 'hidden field', 'C_mixedclass': 'inline label - visible with data', 'sqft_la': 'inline label - visible with data', 'acres_la': 'inline label - visible with data', 'netlandvalue': 'inline label - visible with data', 'netbuildingvalue': 'inline label - visible with data', 'totalassesedtax': 'inline label - visible with data', '$PSFlandvalued': 'inline label - visible with data', 'landexemption': 'inline label - visible with data', });
lyr_LandTaxExemption_2.set('fieldLabels', {'fid': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'objectid': 'hidden field', 'tmk': 'hidden field', 'tmk_txt': 'hidden field', 'county': 'hidden field', 'division': 'no label', 'island': 'no label', 'zone': 'no label', 'section': 'no label', 'plat': 'no label', 'plat1': 'no label', 'parcel': 'no label', 'parcel1': 'no label', 'cty_tmk': 'no label', 'gisacres': 'no label', 'qpub_link': 'no label', 'No.': 'no label', 'fid_2': 'no label', 'st_area(shape)_2': 'no label', 'st_perimeter(shape)_2': 'no label', 'objectid_2': 'no label', 'zone_class': 'no label', 'zoning_des': 'no label', 'zoning_lab': 'no label', 'loaddate': 'no label', 'C_fid': 'no label', 'C_parid': 'no label', 'C_tmk': 'no label', 'C_suffix': 'no label', 'C_seq': 'no label', 'C_taxyr': 'no label', 'C_buildingvalue': 'no label', 'C_buildingexemption': 'no label', 'C_landvalue': 'no label', 'C_landexemption': 'no label', 'C_taxratecode': 'no label', 'C_tnettaxval': 'no label', 'C_ovrclass': 'no label', 'C_pittsqft': 'no label', 'C_pittacre': 'no label', 'C_objectid': 'no label', 'C_mixedclass': 'no label', 'sqft_la': 'no label', 'acres_la': 'no label', 'netlandvalue': 'no label', 'netbuildingvalue': 'no label', 'totalassesedtax': 'no label', '$PSFlandvalued': 'inline label - visible with data', 'landexemption': 'inline label - visible with data', });
lyr_LandTaxExemption_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});