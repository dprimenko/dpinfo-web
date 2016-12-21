(function(){

  var images = [
  {
    full: 'img/wd.png',
    thumb: 'img/wd.png'
  },
  {
    full: 'img/app.png',
    thumb: 'img/app.png'
  },
  {
    full: 'img/graph.png',
    thumb: 'img/graph.png'
  }
  ];
  var services = [
  { 
  	name: 'Diseño Web',
  	description: 'Nuestros diseños son completamente responsive, lo que significa que se adaptan tanto a dispositivos con pantallas de gran resolución y dispositivos móviles',
    image: images[0]
  },
  { 
  	name: 'Apps', 
  	description: '¿Necesita una aplicación para su empresa? Con nuestros servicios conseguirá que esta funcione en cualquier plataforma (Android, IOS, Windows)',
    image: images[1]
  },
  { 
    name: 'Diseño Gráfico', 
    description: 'Le ofrecemos una amplia gama de servicios relacionados con el diseño, desde elaboración de Entidad Corporativa hasta Diseño de Folletos y Carteles',
    image: images[2]
  }];
  var app = angular.module('servApp', []);
  app.controller('ServController', function(){
    this.srvs = services;
  });
})();