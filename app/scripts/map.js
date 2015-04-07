
    /*global google */
    'use strict';

    var map;
    var lekker = new google.maps.LatLng(48.854243, 2.3703059,14);

    var MY_MAPTYPE_ID = 'custom_style';

    function initialize() {

      var featureOpts = 
      [
      {
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [
        {
            'color': '#444444'
        }
        ]
    },
    {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [
        {
            'color': '#dadee1'
        }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
        {
            'visibility': 'off'
        }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [
        {
            'saturation': -100
        },
        {
            'lightness': 45
        }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [
        {
            'visibility': 'simplified'
        }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
        {
            'visibility': 'off'
        }
        ]
    },
    {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [
        {
            'visibility': 'off'
        }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [
        {
            'color': '#485e69'
        },
        {
            'visibility': 'on'
        }
        ]
    }
    ];

    var mapOptions = {
        zoom: 15,
        center: lekker,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    //codeAddress('8+Rue+de+la+Bastille,+75004+Paris');

    var styledMapOptions = {
        name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    }

    google.maps.event.addDomListener(window, 'load', initialize);