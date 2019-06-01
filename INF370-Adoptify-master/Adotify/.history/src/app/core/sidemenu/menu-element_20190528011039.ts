export const menus = [
    {
        'name': '1) Volunteer',
        'icon': 'dashboard',
        'link': false,
        'open': false,
        'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'Add Volunteer',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Maintain Volunteer',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Search Volunteer',
                'link': '/auth/dashboard',
                'icon': 'search',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Add Volunteer Hours',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Add Volunteer Work Type',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Maintian Volunteer Work Type',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Search Volunteer Work Type',
                'link': '/auth/dashboard',
                'icon': 'search',
                'chip': false,
                'open': true,
            }
        ]
    },
    {
        'name': '2) Adopter',
        'icon': 'mode_edit',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Adopter',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Maintian Adopter',
                'icon': 'text_fields',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Upload Documentation',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Search Adopter',
                'icon': 'search',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Update Adopter Status',
                'icon': 'text_fields',
                'open': false,
                'link': 'forms/reactive_forms'
            }
        ]
    },
    {
        'name': '3) Animal',
        'icon': 'pets',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Animal Details',
                'icon': 'pets',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Search Animal Details',
                'icon': 'search',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Maintian Animal Details',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Finalise Animal Details',
                'icon': 'pets',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Add Animal Type',
                'link': '/auth/dashboard',
                'icon': 'pets',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Maintain Animal Type',
                'link': '/auth/dashboard',
                'icon': 'mode_edit',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Search Animal Type',
                'link': '/auth/dashboard',
                'icon': 'search',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Add Breed Type',
                'link': '/auth/dashboard',
                'icon': 'pets',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Maintain Breed Type',
                'link': '/auth/dashboard',
                'icon': 'mode_edit',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Search Breed Type',
                'link': '/auth/dashboard',
                'icon': 'search',
                'chip': false,
                'open': true,
            }

            
        ]
    },
    {
        'name': '4) Employee',
        'icon': 'work',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Employee',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Search Employee',
                'icon': 'search',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Maintain Employee',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Add Employee Type',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Search Employee Type',
                'icon': 'search',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Maintain Employee Type',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Add User Role',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Search User Role',
                'icon': 'search',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Maintain User Role',
                'icon': 'text_fields',
                'open': false,
                'link': 'forms/reactive_forms'
            }
        ]
    },
    {
        'name': '5) Event',
        'icon': 'date_range',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Event',
                'link': 'material-widgets/datepicker',
                'icon': 'date_range',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Search Event',
                'link': 'material-widgets/datepicker',
                'icon': 'search',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Maintain Event',
                'link': 'material-widgets/datepicker',
                'icon': 'date_range',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Make Event Sale',
                'link': 'material-widgets/datepicker',
                'icon': 'date_range',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Maintain Event Type',
                'link': 'material-widgets/datepicker',
                'icon': 'date_range',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Search Event Sale',
                'link': 'material-widgets/datepicker',
                'icon': 'search',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Add Event Type',
                'link': 'material-widgets/datepicker',
                'icon': 'date_range',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Search Event Type',
                'link': 'material-widgets/datepicker',
                'icon': 'search',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Maintain Event Type',
                'link': 'material-widgets/datepicker',
                'icon': 'search',
                'chip': false,
                'open': false,
            }
           
        ]
    },
    {
        'name': '6) Admin',
        'icon': 'Admin',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Login',
                'icon': 'input',
                'open': false,
                'link': '../login',
            }, {
                'name': 'Logout',
                'icon': 'exit_to_app',
                'open': false,
                'link': 'pages/services',
            }, {
                'name': 'Reset Password',
                'icon': 'directions',
                'open': false,
                'link': 'pages/contact'
            },
            {
                'name': 'Emplployee Check-in',
                'icon': 'work',
                'open': false,
                'link': '../login',
            },
            {
                'name': 'Employee-Check-out',
                'icon': 'work',
                'open': false,
                'link': '../login',
            },
            {
                'name': 'Change Password',
                'icon': 'work',
                'open': false,
                'link': '../login',
            },
        ]
    },
    {
        'name': '7) Kennel',
        'icon': 'home',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Kennel',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Search Kennel',
                'icon': 'search',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Maintain Kennel',
                'icon': 'mode_edit',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Move Animal to Kennel',
                'icon': 'home',
                'open': false,
                'link': 'forms/reactive_forms'
            }
        ]
    },
    {
        'name': '8) Adoption',
        'icon': 'widgets',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Create Adoptionn',
                'link': 'material-widgets/buttons',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Maintain Adoption',
                'link': 'material-widgets/list',
                'icon': 'list',
                'chip': false,
                'open': false,
            },
            {

                'name': 'Schedule Home Check',
                'link': 'material-widgets/stepper',
                'icon': 'view_week',
                'chip': false,
                'open': false,

            },
            {
                'name': 'Capture Home Check Report',
                'link': 'material-widgets/expansion',
                'icon': 'web_aaset',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Capture Adoption Payment',
                'link': 'material-widgets/spinner',
                'icon': 'cached',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Capture Adoption Documents',
                'link': 'material-widgets/cards',
                'icon': 'crop_16_9',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Collect Animal',
                'link': 'material-widgets/icons',
                'icon': 'gif',
                'chip': false,
                'open': false,
            },
            {

                'name': 'Return Animal',
                'link': 'material-widgets/autocomplete',
                'icon': 'get_app',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Search Adoption',
                'link': 'material-widgets/checkbox',
                'icon': 'search',
                'chip': false,
                'open': false,
            },
            // {
            //     'name': 'DatePicker',
            //     'link': 'material-widgets/datepicker',
            //     'icon': 'date_range',
            //     'chip': false,
            //     'open': false,
            // },

            // {
            //     'name': 'Slider',
            //     'link': 'material-widgets/slider',
            //     'icon': 'keyboard_tab',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Slide Toggle',
            //     'link': 'material-widgets/slide-toggle',
            //     'icon': 'album',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Menu',
            //     'icon': 'menu',
            //     'link': 'material-widgets/menu',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Progress Bar',
            //     'link': 'material-widgets/progress-bar',
            //     'icon': 'trending_flat',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Input',
            //     'icon': 'input',
            //     'link': 'material-widgets/input',
            //     'open': false,
            // },
            // {
            //     'name': 'Radio',
            //     'icon': 'radio_button_checked',
            //     'link': 'material-widgets/radio',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Select',
            //     'icon': 'select_all',
            //     'link': 'material-widgets/select',
            //     'open': false,
            // },
        ]
    },
    {
        'name': '9) Report',
        'icon': 'assingment',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Generate Employee Timesheet',
                'icon': 'description',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Generate Animal Intake Report',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Generate Animal Details Report',
                'icon': 'description',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Generate Sales Report',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Generate Event Sale',
                'icon': 'description',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Generate Vet List Report',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Generate Audit Trail Report',
                'icon': 'description',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Generate Application Form',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Generate Community Service Report',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            }
        ]
    },
    {
        'name': '_',
        'icon': 'list',
        'link': false,
        'open': false,
        'chip': { 'value': 2, 'color': 'accent' },
        'sub': [
            {
                'name': '_',
                'icon': 'filter_list',
                'link': 'tables/fixed',
                'open': false,
            },
            {
                'name': '_',
                'icon': 'done_all',
                'link': 'tables/featured',
                'open': false,
            },
            {
                'name': '_',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            }
        ]

    },
    {
        'name': '_',
        'icon': 'mode_edit',
        'link': '/auth/guarded-routes',
        'open': false,
    }, {
        'name': '_',
        'open': false,
        'link': '/auth/scrumboard',
        'icon': 'grade',
    }, {
        'name': 'Applications',
        'icon': 'view_module',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'chat',
                'icon': 'chat',
                'link': 'chats/chat',
                'open': false,
            },
            {
                'name': 'mail',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            },
            {
                'name': 'Editor',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            }
        ]
    }
    , {
        'name': 'Pages',
        'icon': 'content_copy',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Login',
                'icon': 'work',
                'open': false,
                'link': '../login',
            }, {
                'name': 'Services',
                'icon': 'local_laundry_service',
                'open': false,
                'link': 'pages/services',
            }, {
                'name': 'Contact',
                'icon': 'directions',
                'open': false,
                'link': 'pages/contact'
            }
        ]
    }
    , {

        'name': 'Charts',
        'icon': 'pie_chart_outlined',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'chartjs',
                'icon': 'view_list',
                'link': 'charts/chartjs',
                'open': false,

            },
            {
                'name': 'ngx-chart',
                'icon': 'show_chart',
                'open': false,
                'link': 'charts/ngx-charts',
            },
            {
                'name': 'nvd3',
                'icon': 'pie_chart',
                'open': false,
                'link': 'charts/nvd3-charts',
            }
        ]
    }, {
        'name': 'maps',
        'icon': 'map',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'google-map',
                'icon': 'directions',
                'link': 'maps/googlemap',
                'open': false,
            },
            {
                'name': 'leaflet-map',
                'icon': 'directions',
                'link': 'maps/leafletmap',
                'open': false,
            }
        ]
    }
];
