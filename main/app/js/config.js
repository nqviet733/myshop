/*
*   requirejs config file
*/

require.config({
	/*baseUrl: 'app/',*/
	waitSeconds: 200, // large for slow network...
	paths: {
		jquery: 'lib/jquery/jquery-1.9.1', //included in require-jquery

		//angular
		angular: 'lib/angular/angular',
		angularResource: 'lib/angular/angular-resource',
        angularUI: 'lib/angular-ui/angular-ui',
        angularUIBootstrap: 'lib/angular-ui-bootstrap/ui-bootstrap-tpls-0.11.0',
        angularUIRouter: 'lib/angular-ui-router/angular-ui-router',

        //bootstrap
        bootstrap: 'lib/bootstrap/js/bootstrap',
        angularToggleSwitch: 'lib/angular-toggle-switch/js/angular-toggle-switch'

		/*appConfig: 'js/conf/app-config',
		app: 'js/app',
		router: 'js/modules/router',
		directives: 'js/modules/directives',
		controllers: 'js/modules/controllers',
		filters: 'js/modules/filters',

        jasperModule: 'js/modules/jasper/jasper-module',
        jasperProviders: 'js/modules/jasper/components/jasper-providers',
        jasperServices: 'js/modules/jasper/components/jasper-services',
        jasperBootstrap: 'js/modules/jasper/jasper-bootstrap',

        configModule: 'js/modules/config/config-module',
        configControllers: 'js/modules/config/components/config-controllers',
        configBootstrap: 'js/modules/config/config-bootstrap',

        reportsModule: 'js/modules/reports/reports-module',
        reportsControllers: 'js/modules/reports/components/reports-controllers',
        reportsBootstrap: 'js/modules/reports/reports-bootstrap',

        modalsModule: 'js/modules/modals/modals-module',
        modalsControllers: 'js/modules/modals/components/modals-controllers',
        modalsDirectives: 'js/modules/modals/components/modals-directives',
        modalsBootstrap: 'js/modules/modals/modals-bootstrap',

//        visualize: '../client/visualize',
        visualize: 'http://birtomcat:8180/bireporting/client/visualize',
        lodash: 'lib/lodash/lodash-modern.min',
        birTemplates: 'js/templates-dummy'*/
    },

	shim: {
		'angular' : {
			exports : 'angular'
        },
        'angularResource': {
            deps:['angular']
        },
        angularUI: {
            deps:['angular', 'angularResource']
        },
        angularUIBootstrap: {
            deps: ['angularUI']
        },
        angularUIRouter: {
            deps: ['angular']
        },
        bootstrap: {
            deps: ['jquery']
        },
        angularToggleSwitch: {
            deps: ['angular', 'bootstrap']
        }
	}
});

require(['main']);
