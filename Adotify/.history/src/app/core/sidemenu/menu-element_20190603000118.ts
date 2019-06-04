export const menus = [
    {
        'name': '1) Volunteer',
        'icon': 'dashboard',
        'link': false,
        'open': false,
        'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'addanimal',
                'icon': 'filter_center_focus',
                'link': '/auth/adoptify/addanimal',
                'open': false,
            },
            {
                'name': 'lookuptables',
                'link': '/auth/adoptify/lookuptables',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'searchanimal',
                'link': '/auth/adoptify/searchanimal',
                'icon': 'search',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Add Volunteer',
                'link': '/auth/adoptify/volunteer',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'lookuptb',
                'link': '/auth/adoptify/lookuptb',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            },
            {
                'name': 'viewanimal',
                'link': '/auth/adoptify/viewanimal',
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
                'link': '/auth/adoptify/searchvolunteer'
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
                'link': 'material-widgets/cards',
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
        'icon': 'assignment',
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
        'name': '10) Stock',
        'icon': 'list',
        'link': false,
        'open': false,
        'chip': { 'value': 2, 'color': 'accent' },
        'sub': [
            {
                'name': 'Add Stock',
                'icon': 'filter_list',
                'link': 'tables/fixed',
                'open': false,
            },
            {
                'name': 'Search Stock',
                'icon': 'done_all',
                'link': 'tables/featured',
                'open': false,
            },
            {
                'name': 'Maintain Stock',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            },
            {
                'name': 'Capture Stock Take',
                'icon': 'filter_list',
                'link': 'tables/fixed',
                'open': false,
            },
            {
                'name': 'Add Stock Type',
                'icon': 'filter_list',
                'link': 'tables/fixed',
                'open': false,
            },
            {
                'name': 'Search Stock Type',
                'icon': 'done_all',
                'link': 'tables/featured',
                'open': false,
            },
            {
                'name': 'Maintain Stock Type',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            }
        ]

    },
    {
        'name': '11) Sales',
        'icon': 'shop',
        'link': '/auth/guarded-routes',
        'open': false,
        'sub': [
            {
                'name': 'Make Sale',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            },
            {
                'name': 'Return Sale',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            }
            ,
            {
                'name': 'Search Sale',
                'icon': 'search',
                'link': 'tables/responsive',
                'open': false,
            }
        ]
    },
    {
        'name': '12) Donation',
        'open': false,
        'link': '/auth/scrumboard',
        'icon': 'grade',
        'sub': [
            {
                'name': 'Add Donor',
                'icon': 'description',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Maintian Donor',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Add Donations',
                'icon': 'description',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Maintain Donations',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Search Donor',
                'icon': 'description',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Search Donation',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Add Donation Type',
                'icon': 'description',
                'open': false,
                'link': 'forms/template_forms'
            },
            {
                'name': 'Search Donation Type',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            },
            {
                'name': 'Maintain Donation Type',
                'icon': 'description',
                'open': false,
                'link': 'forms/reactive_forms'
            }
        ]
    }, {
        'name': '13) Veterinarian',
        'icon': 'view_module',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Vet Appointment',
                'icon': 'chat',
                'link': 'chats/chat',
                'open': false,
            },
            {
                'name': 'Maintain Vet Appointment',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            },
            {
                'name': 'Search Vet Appointment',
                'icon': 'search',
                'link': 'editor/editor',
                'open': false,
            },
            {
                'name': 'Capture Medical Card',
                'icon': 'chat',
                'link': 'chats/chat',
                'open': false,
            },
            {
                'name': 'Add Treatment',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            },
            {
                'name': 'Maintain Treatment',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            },
            {
                'name': 'Search Treatment',
                'icon': 'search',
                'link': 'chats/chat',
                'open': false,
            },
            {
                'name': 'Add Veterinarian',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            },
            {
                'name': 'Maintain Veterinarian',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            },
            {
                'name': 'Search Veterinarian',
                'icon': 'search',
                'link': 'editor/editor',
                'open': false,
            }
        ]
    }
    , {
        'name': 'Foster Care',
        'icon': 'content_copy',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Foster Care Parent',
                'icon': 'work',
                'open': false,
                'link': '../login',
            },
            {
                'name': 'Maintain Foster Care Parent',
                'icon': 'local_laundry_service',
                'open': false,
                'link': 'pages/services',
            },
            {
                'name': 'Search Foster Care Parent',
                'icon': 'directions',
                'open': false,
                'link': 'pages/contact'
            },
            {
                'name': 'Add Animal to Foster Care',
                'icon': 'work',
                'open': false,
                'link': '../login',
            },
            {
                'name': 'Remove Animal from Foster Care',
                'icon': 'local_laundry_service',
                'open': false,
                'link': 'pages/services',
            }
        ]
    }
    , {

        'name': 'Supplier Order',
        'icon': 'store',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Supplier',
                'icon': 'view_list',
                'link': 'charts/chartjs',
                'open': false,

            },
            {
                'name': 'Maintain Supplier',
                'icon': 'show_chart',
                'open': false,
                'link': 'charts/ngx-charts',
            },
            {
                'name': 'Search Supplier',
                'icon': 'pie_chart',
                'open': false,
                'link': 'charts/nvd3-charts',
            },
            {
                'name': 'Order Stock',
                'icon': 'view_list',
                'link': 'charts/chartjs',
                'open': false,

            },
            {
                'name': 'Search Stock Order',
                'icon': 'show_chart',
                'open': false,
                'link': 'charts/ngx-charts',
            },
            {
                'name': 'Cancel Order',
                'icon': 'pie_chart',
                'open': false,
                'link': 'charts/nvd3-charts',
            },
            {
                'name': 'Receive Stock Order',
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
