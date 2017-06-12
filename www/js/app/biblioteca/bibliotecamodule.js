angular.module('librosmodule', ['entidadmodulo', 'jsonbookmodulo'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.libros', {
                url: '/libros',
                views: {
                    'content': {
                        templateUrl: 'js/app/biblioteca/libros/libros.html',
                        controller: 'libroscontroller',
                        resolve: {
                            libros: function (libroservicio) {
                                return libroservicio.obtenerlibros();
                            }
                        }
                    }
                }
            })

            .state('app.buscar', {
                url: '/buscarlibro',
                views: {
                    'content': {
                        templateUrl: 'js/app/biblioteca/buscarlibro/buscarlibro.html',
                        controller: 'LlibrobuscarCtrl'
                    }
                }
            })

            .state('app.registrarlibro', {
                url: '/registrarlibro',
                views: {
                    'content': {
                        templateUrl: 'js/app/biblioteca/registrarlibro/registrarlibro.html'
                    }
                }
            })
    })

