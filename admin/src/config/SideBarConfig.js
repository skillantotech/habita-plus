exports.SideBarMenu = {
  society_moderator: [
    {
      name: "User Management",
      isAvailable: true,
      children: [
        {
          name: "Unapproved user",
          url: "user/unapproved",
          path: ["user", "unapproved"],
        },
        {
          name: "Add user",
          url: "user/adduser",
          path: ["user", "add"],
        },
        {
          name: "Approved Users",
          url: "user/approved",
          path: ["user", "unapproved"],
        },
        {
          name: "Deactivate User",
          url: "user/deactivated",
          path: ["user", "setting"],
        },
        {
          name: "User Access",
          url: "user/access",
          path: ["user", "setting"],
        },
        {
          name: "User Report",
          url: "user/access",
          path: ["user", "setting"],
        },
      ],
    },
    {
      name: "Building Management",
      isAvailable: true,
      children: [
        {
          name: "Define Structer",
          url: "unit/structer",
        },
        {
          name: "Define Unit",
          url: "unit/create",
        },
        {
          name: "Unit List",
          url: "unit/view",
        },
        {
          name: "Report",
          url: "unit/report",
        },
      ],
    },
    {
      name: "Notice Announcement",
      isAvailable: true,
      children: [
        {
          name: "Add New Notice",
          url: "notice/create",
        },
        {
          name: "Notice List",
          url: "notice/list",
        },
      ],
    },
    {
      name: "Discussion Forum",
      isAvailable: true,
      children: [
        {
          name: "Add New Discussion",
          url: "discussion/create",
        },
        {
          name: "Discussion Details",
          url: "discussion/list",
        },
      ],
    },
    {
      name: "Visitors Management",
      isAvailable: true,
      children: [
        {
          name: "Setup",
          url: "visitor/setup",
          children: [
            {
              name: "Approval Matrix",
              url: "visitor/setup/visitorapprovalmatrix",
            },
            {
              name: "Define Visitor Catagories",
              url: "visitor/setup/visitordefinevisitor",
            },
          ],
        },

        {
          name: "New Visitor Entry",
          url: "visitor/newvisitorentry",
        },
        {
          name: "Visitor List",
          url: "visitor/visitorlist",
        },
        {
          name: "Visitor Report",
          url: "visitor/report",
        },
      ],
    },
    {
      name: "Gate Management",
      isAvailable: true,
      children: [
        {
          name: "Define Gate",
          url: "gate/definegate",
        },
        {
          name: "Gate Allocation",
          url: "gate/allocation",
        },
        {
          name: "Gate List",
          url: "gate/view",
        },
      ],
    },
    // {
    //   name: "Facility Management",
    //   isAvailable: true,
    //   children: [
    //     {
    //       name: "Define Facility",
    //       url: "visitor/catagories",
    //     },
    //     {
    //       name: "Gate Allocation",
    //       url: "visitor/create",
    //     },
    //     {
    //       name: "Gate List",
    //       url: "visitor/view",
    //     },
    //   ],
    // },
    {
      name: "Vendor Management",
      isAvailable: true,
      children: [
        {
          name: "Setup",
          url: "visitor/catagories",
        },
        {
          name: "Add New Vendor",
          url: "vendor/newvendor",
        },
        {
          name: "Vendor List",
          url: "vendor/view",
        },
      ],
    },
    {
      name: "Document Management",
      isAvailable: true,
      children: [
        {
          name: "Document Upload Facility",
          url: "document/upload",
        },

        {
          name: "Document List",
          url: "document/view",
        },
      ],
    },
    {
      name: "Invoice Management",
      isAvailable: true,
      children: [
        {
          name: "Define New Charge",
          url: "invoice/newcharge",
        },
        {
          name: " Charge List",
          url: "invoice/chargelist",
        },
        {
          name: "Invoice Setup",
          url: "invoice/setup",
        },
        {
          name: "Invoice Details",
          url: "invoice/details",
        },
        {
          name: "Invoice scheduler",
          url: "invoice/scheduler",
        },
        {
          name: "Defaulter List",
          url: "invoice/defaulterlist",
        },
        {
          name: "Invoice Adjustment",
          url: "invoice/adjustment",
        },
        {
          name: "Income Summary Report",
          url: "invoice/summury",
        },
      ],
    },
    {
      name: "Facility Management",
      isAvailable: true,
      children: [
        {
          name: "Add New Facility",
          url: "facility/new",
        },

        {
          name: "Facility List",
          url: "facility/list",
        },
        {
          name: "Add New Booking Request",
          url: "facility/request",
        },
        {
          name: "Facility Booking Details",
          url: "facility/booking",
        },
      ],
    },
    {
      name: "Parking Management",
      isAvailable: true,
      children: [
        {
          name: "Add New Parking Slot",
          url: "parking/newslot",
        },
        {
          name: "Parking List",
          url: "parking/list",
        },
        {
          name: "Add New Booking Request",
          url: "parking/bookingrequest",
        },
        {
          name: "Parking Booking Details",
          url: "parking/bookingdetails",
        },

        {
          name: "Add Vechicle Details",
          url: "parking/vechicledetails",
        },
      ],
    },
    {
      name: "Socity Admin Confugaration",
      isAvailable: true,
      children: [
        {
          name: "Socity Financial Confugaration",
          url: "socityconfugartion/financial",
        },
        {
          name: "Notification",
          url: "socityconfugartion/notification",
        },
        {
          name: "Calender Settings",
          url: "socityconfugartion/calender",
        },
        {
          name: "SMS Alert Confugaration",
          url: "socityconfugartion/smsalert",
        },
        // {
        //   name: "Email Confugaration",
        //   url: "socityconfugartion/emailconfugaration",
        // },
        {
          name: "Template Management",
          url: "socityconfugartion/templatemanagement",
        },
      ],
    },
    {
      name: "Socity HelpDesk Management",
      isAvailable: true,
      children: [
        {
          name: "SetUp",
          url: "socityhelpdesk/socityhelpdesksetup",
          children: [
            {
              name: "Approval Matrix",
              url: "socityhelpdesk/socityhelpdesksetup/socityapprovalmatrix",
            },
            {
              name: "Define Purpose",
              url: "socityhelpdesk/socityhelpdesksetup/socitydefinepurpose",
            },
          ],
        },
        {
          name: "Create Ticket",
          url: "socityhelpdesk/socityhelpdeskcreateticket",
        },
        {
          name: "Ticket List",
          url: "socityhelpdesk/socityhelpdeskticketlist",
        },
      ],
    },
    {
      name: "Software HelpDesk Management",
      isAvailable: true,
      children: [
        {
          name: "SetUp",
          url: "softwarehelpdesk/softwarehelpdesksetup",
          children: [
            {
              name: "Approval Matrix",
              url: "softwarehelpdesk/softwarehelpdesksetup/softwareapprovalmatrix",
            },
            {
              name: "Define Purpose",
              url: "softwarehelpdesk/softwarehelpdesksetup/softwaredefinepurpose",
            },
          ],
        },
        {
          name: "Create Ticket",
          url: "softwarehelpdesk/softwarehelpdeskcreateticket",
        },
        {
          name: "Ticket List",
          url: "softwarehelpdesk/softwarehelpdeskticketlist",
        },
      ],
    },
  ],
  super_admin: [
    {
      name: "Society Management",
      isAvailable: true,
      children: [
        {
          name: "Create Society",
          url: "society/create",
        },
        {
          name: "Societies List",
          url: "society/view",
        },
        {
          name: "Create Society User",
          url: "society/createuser",
        },
      ],
    },
    {
      name: "Product Subscription Management",
      isAvailable: true,
      children: [
        {
          name: "Create Product",
          url: "product/create",
        },
        {
          name: "Subscription List",
          url: "society/view",
        },
        {
          name: "Module",
          url: "module/create",
        },
      ],
    },
    {
      name: "Vendor Management",
      isAvailable: true,
      children: [
        {
          name: "Create Vendor",
          url: "vendor/create",
        },
        {
          name: "Vendor List",
          url: "vendor/view",
        },
      ],
    },
  ],
};
