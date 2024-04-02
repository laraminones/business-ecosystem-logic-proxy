/* Copyright (c) 2023 Future Internet Consulting and Developement Solutions S.L.
 *
 * This file belongs to the business-ecosystem-logic-proxy of the
 * Business API Ecosystem
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function() {
    'use strict';

    angular.module('app').config(['$stateProvider', RouteConfig]);

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('inventory.service', {
                url: '/service?status&body',
                params: {
                    customer: true,
                },
                data: {
                    filters: ['status']
                },
                templateUrl: 'inventory/service/search',
                controller: 'ServiceInventorySearchCtrl as searchVM'
            })
            .state('inventory.service.detail', {
                url: '/:serviceId',
                templateUrl: 'inventory/service/detail',
                controller: 'ServiceInventoryDetailsCtrl as detailVM'
            })
            .state('inventory.service.detail.characteristic', {
                url: '/characteristic',
                templateUrl: 'inventory/service/detail/characteristic'
            })
    }
})();
