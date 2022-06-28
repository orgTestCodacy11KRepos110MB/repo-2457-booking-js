'use strict';

/*
 * Default configuration
 */

var primary = {
    el: '#bookingjs',
    name: '',
    autoload: true,
    debug: false,
    disable_remote_load: false,
    disable_confirm_page: false,
    create_booking_response_include: ['attributes', 'event', 'user'],
    ui: {
        show_timezone_helper: true,
        localization: {
            reschedule_submit_button: 'Cancel & Reschedule',
        },
    },
    availability: {},
    booking: {},
    customer_fields: {},
    callbacks: {},
    sdk: {
        headers: {
            'Timekit-Context': 'widget',
        },
    },
    fullcalendar: {
        views: {
            agenda: {
                displayEventEnd: false,
            },
            listing: {
                type: 'list',
                duration: { days: 365 / 2 },
                listDayAltFormat: 'dddd',
                noEventsMessage: 'No timeslots available',
            },
        },
        allDaySlot: false,
        scrollTime: '08:00:00',
        nowIndicator: true,
    },
};

var primaryWithoutProject = {
    ui: {
        display_name: '',
        show_credits: true,
        show_timezone_helper: true,
        availability_view: 'agendaWeek',
        avatar: '',
        time_date_format: '12h-mdy-sun',
        localization: {
            allocated_resource_prefix: 'with',
            submit_button: 'Book it',
            reschedule_submit_button: 'Reschedule',
            success_message: 'We have received your booking and sent a confirmation to %s',
        },
    },
    availability: {
        mode: 'roundrobin_random',
    },
    booking: {
        graph: 'instant',
        uuid: false,
    },
    customer_fields: {
        name: {
            title: 'Name',
            required: true,
            split_name: false,
        },
        email: {
            title: 'E-mail',
            format: 'email',
            required: true,
        },
    },
};

var customerFieldsNativeFormats = {
  email: {
    format: 'email'
  },
  comment: {
    format: 'textarea'
  },
  phone: {
    format: 'tel'
  }
}

// Preset: timeDateFormat = '24h-dmy-mon'
var timeDateFormat24hdmymon = {
  ui: {
    booking_date_format: 'D. MMMM YYYY',
    booking_time_format: 'HH:mm'
  },
  fullcalendar: {
    timeFormat: 'HH:mm',
    firstDay: 1,
    views: {
      basic: {
        columnFormat: 'dddd D/M'
      },
      agenda: {
        columnFormat: 'ddd D/M',
        slotLabelFormat: 'HH:mm'
      }
    }
  }
};

// Preset: timeDateFormat = '12h-mdy-sun'
var timeDateFormat12hmdysun = {
  ui: {
    booking_date_format: 'MMMM D, YYYY',
    booking_time_format: 'h:mma'
  },
  fullcalendar: {
    timeFormat: 'h:mma',
    firstDay: 0,
    views: {
      basic: {
        columnFormat: 'dddd M/D',
      },
      agenda: {
        columnFormat: 'ddd M/D',
        slotLabelFormat: 'h:mma'
      }
    }
  }
};

// Preset: availabilityView = 'agendaWeek'
var availabilityViewAgendaWeek = {
  fullcalendar: {
    header: {
      left: '',
      center: '',
      right: 'today, prev, next'
    },
    defaultView: 'agendaWeek'
  }
}

// Preset: availabilityView = 'listing'
var availabilityViewListing = {
  fullcalendar: {
    header: {
      left: '',
      center: '',
      right: ''
    },
    defaultView: 'listing'
  }
}

// Export objects
module.exports = {
  primary: primary,
  primaryWithoutProject: primaryWithoutProject,
  customerFieldsNativeFormats: customerFieldsNativeFormats,
  presets: {
    timeDateFormat: {
      '24h-dmy-mon': timeDateFormat24hdmymon,
      '12h-mdy-sun': timeDateFormat12hmdysun
    },
    availabilityView: {
      'agendaWeek': availabilityViewAgendaWeek,
      'listing': availabilityViewListing
    }
  }
};
