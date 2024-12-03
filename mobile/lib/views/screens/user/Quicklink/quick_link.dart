import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:habitatplus/views/screens/user/announcement/announcement_screen.dart';
import 'package:habitatplus/views/screens/user/app/app_screen.dart';
import 'package:habitatplus/views/screens/user/association/association_screen.dart';
import 'package:habitatplus/views/screens/user/directories/directories_screen.dart';
import 'package:habitatplus/views/screens/user/document/document_screen.dart';
import 'package:habitatplus/views/screens/user/e-mail/email_screen.dart';
import 'package:habitatplus/views/screens/user/emmergency/emmergency_screen.dart';
import 'package:habitatplus/views/screens/user/facility/facility_screen.dart';
import 'package:habitatplus/views/screens/user/helpdesk/helpdesk_screen.dart';
import 'package:habitatplus/views/screens/user/notice/notice_screen.dart';
import 'package:habitatplus/views/screens/user/parking/parking_screen.dart';
import 'package:habitatplus/views/screens/user/payment/payment_screen.dart';
import 'package:habitatplus/views/screens/user/post/post_screen.dart';
import 'package:habitatplus/views/screens/user/setting/setting_screen.dart';
import 'package:habitatplus/views/screens/user/tenant/tenant_screen.dart';
import 'package:habitatplus/views/screens/user/tenant/tenants.dart';
import 'package:habitatplus/views/screens/user/vendor/vendor_screen.dart';
import 'package:habitatplus/views/screens/user/visitor/visitor.dart';
// import 'package:habitatplus/views/screens/user/post/post_screen.dart';

class QuickLinks extends StatelessWidget {
  final String userType;
  final String category;

  QuickLinks({required this.userType, required this.category});

  final Map<String, Map<String, List<Map<String, dynamic>>>> quickLinksData = {
    'resident': {
      'myunit': [
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Post',
          'component': PostScreen(),
        },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Payments',
          'component': PaymentScreen(),
        },
        {
          'path': 'assets/images/quicklink/facility.png',
          'name': 'Facility',
          'component': FasilityScreen(),
        },
        {
          'path': 'assets/images/quicklink/tenant-1.png',
          'name': 'Tenant',
          'component': Tenants(),
        },
        // {
        //   'path': 'assets/images/quicklink/payment.png',
        //   'name': 'Vendors',
        //   'component': PostScreen(),
        // },
        // {
        //   'path': 'assets/images/quicklink/payment.png',
        //   'name': 'Visitors',
        //   'component': Visitor(),
        // },
        // {
        //   'path': 'assets/images/quicklink/vendors.png',
        //   'name': 'Vendor List',
        //   'component': PostScreen(),
        // },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Parking',
          'component': ParkingScreen(),
        },
        {
          'path': 'assets/images/quicklink/customer-service.png',
          'name': 'HelpDesk',
          'component': HelpDeskScreen(),
        },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Documents',
          'component': DocumentScreen(),
        },
      ],
      'community': [
        // {
        //   'path': 'assets/images/quicklink/vendors.png',
        //   'name': 'Vendor List',
        //   'component': PostScreen(),
        // },
        // {
        //   'path': 'assets/images/quicklink/payment.png',
        //   'name': 'Notice',
        //   'component': PostScreen(),
        // },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Announcements',
          'component': AnnouncementScreen(),
        },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Post',
          'component': PostScreen(),
        },
      ],
      'home': [
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Post',
          'component': PostScreen(),
        },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Payments',
          'component': PaymentScreen(),
        },
        {
          'path': 'assets/images/quicklink/facility.png',
          'name': 'Facility',
          'component': FasilityScreen(),
        },
        // {
        //   'path': 'assets/images/quicklink/visitor.png',
        //   'name': 'Visitors',
        //   'component': Visitor(),
        // },
        // {
        //   'path': 'assets/images/quicklink/vendors.png',
        //   'name': 'Vendor List',
        //   'component': PostScreen(),
        // },
        {
          'path': 'assets/images/quicklink/customer-service.png',
          'name': 'HelpDesk',
          'component': HelpDeskScreen(),
        },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Documents',
          'component': DocumentScreen(),
        },
      ],
      'find': [
        // {
        //   'path': 'assets/images/quicklink/vendors.png',
        //   'name': 'Vendor List',
        //   'component': PostScreen(),
        // },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Post',
          'component': PostScreen(),
        },
        {
          'path': 'assets/images/quicklink/facility.png',
          'name': 'Facility',
          'component': FasilityScreen(),
        },
        {
          'path': 'assets/images/quicklink/customer-service.png',
          'name': 'HelpDesk',
          'component': HelpDeskScreen(),
        },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Documents',
          'component': DocumentScreen(),
        },
        // {
        //   'path': 'assets/images/quicklink/payment.png',
        //   'name': 'Services',
        //   'component': PostScreen(),
        // },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Payment',
          'component': PaymentScreen(),
        },
      ],
      'more': [
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Documents',
          'component': DocumentScreen(),
        },
        // {
        //   'path': 'assets/images/quicklink/payment.png',
        //   'name': 'Vendor List',
        //   'component': PostScreen(),
        // },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'Setting',
          'component': SettingScreen(),
        },
        {
          'path': 'assets/images/quicklink/payment.png',
          'name': 'App',
          'component': AppScreen(),
        },
        // {
        //   'path': 'assets/images/quicklink/payment.png',
        //   'name': 'E-Mail',
        //   'component': PostScreen(),
        // },
        {
          'path': 'assets/images/quicklink/customer-service.png',
          'name': 'HelpDesk',
          'component': HelpDeskScreen(),
        },
      ],
    },
    'securityGuard': {
      'guard': [
        {
          'path': 'assets/images/quicklink/visitor.png',
          'name': 'Visitor',
          'component': Visitor(),
        },
        {
          'path': 'assets/images/quicklink/vendor.png',
          'name': 'Vendor',
          'component': VendorScreen(),
        },
        {
          'path': 'assets/images/quicklink/notice.png',
          'name': 'Notice',
          'component': NoticeScreen(),
        },
        {
          'path': 'assets/images/quicklink/announcements.png',
          'name': 'Announcements',
          'component': AnnouncementScreen(),
        },
        {
          'path': 'assets/images/quicklink/directories.png',
          'name': 'Directories',
          'component': DirectoriesScreen(),
        },
        {
          'path': 'assets/images/quicklink/vendors.png',
          'name': 'Vendors',
          'component': VendorScreen(),
        },
      ],
      'home': [
        {
          'path': 'assets/images/quicklink/facility.png',
          'name': 'Facility',
          'component': FasilityScreen(),
        },
        {
          'path': 'assets/images/quicklink/parking.png',
          'name': 'Parking',
          'component': ParkingScreen(),
        },
        {
          'path': 'assets/images/quicklink/visitors.png',
          'name': 'Visitors',
          'component': Visitor(),
        },
        {
          'path': 'assets/images/quicklink/directories.png',
          'name': 'Directories',
          'component': DirectoriesScreen(),
        },
        {
          'path': 'assets/images/quicklink/association.png',
          'name': 'Association',
          'component': AssociationScreen(),
        },
        {
          'path': 'assets/images/quicklink/emergency.png',
          'name': 'Emergency',
          'component': EmmergencyScreen(),
        },
        {
          'path': 'assets/images/quicklink/vendors.png',
          'name': 'Vendors',
          'component': VendorScreen(),
        },
      ],
      'find': [
        {
          'path': 'assets/images/quicklink/directories.png',
          'name': 'Directories',
          'component': DirectoriesScreen(),
        },
        {
          'path': 'assets/images/quicklink/association.png',
          'name': 'Association',
          'component': AssociationScreen(),
        },
        {
          'path': 'assets/images/quicklink/emergency.png',
          'name': 'Emergency',
          'component': EmmergencyScreen(),
        },
        {
          'path': 'assets/images/quicklink/vendors.png',
          'name': 'Vendors',
          'component': VendorScreen(),
        },
        {
          'path': 'assets/images/quicklink/facility.png',
          'name': 'Facility',
          'component': FasilityScreen(),
        },
        {
          'path': 'assets/images/quicklink/parking.png',
          'name': 'Parking',
          'component': ParkingScreen(),
        },
      ],
      'more': [
        {
          'path': 'assets/images/quicklink/emergency.png',
          'name': 'Emergency',
          'component': EmmergencyScreen(),
        },
        {
          'path': 'assets/images/quicklink/directories.png',
          'name': 'Directories',
          'component': DirectoriesScreen(),
        },
        {
          'path': 'assets/images/quicklink/setting.png',
          'name': 'Setting',
          'component': SettingScreen(),
        },
        {
          'path': 'assets/images/quicklink/app.png',
          'name': 'App',
          'component': AppScreen(),
        },
        {
          'path': 'assets/images/quicklink/email.png',
          'name': 'E-Mail',
          'component': EmailScreen(),
        },
        {
          'path': 'assets/images/quicklink/announcements.png',
          'name': 'Announcements',
          'component': AnnouncementScreen(),
        },
      ],
    },
  };

  @override
  Widget build(BuildContext context) {
    List<Map<String, dynamic>>? imageData = quickLinksData[userType]?[category];

    if (imageData == null) {
      return const Center(
        child: Text("No Quick Links Available"),
      );
    }

    return Container(
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Padding(
          padding: const EdgeInsets.all(6.0),
          child: Row(
            children: imageData.map((data) {
              return Row(
                children: [
                  GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => data['component'],
                        ),
                      );
                    },
                    child: Column(
                      children: [
                        Container(
                          height: 70.0,
                          width: 70.0,
                          decoration: const BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: LinearGradient(
                              colors: [
                                Color.fromARGB(255, 86, 196, 218),
                                Color.fromARGB(255, 255, 255, 255),
                              ],
                              begin: Alignment.topLeft,
                              end: Alignment.bottomRight,
                            ),
                          ),
                          child: Padding(
                            padding: const EdgeInsets.all(3.0),
                            child: Container(
                              height: 50.0,
                              width: 50.0,
                              decoration: const BoxDecoration(
                                shape: BoxShape.circle,
                                color: Colors.white,
                              ),
                              padding: const EdgeInsets.all(2.0),
                              child: Container(
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  gradient: const LinearGradient(
                                    colors: [
                                      Color.fromARGB(255, 212, 248, 255),
                                      Color.fromARGB(255, 255, 238, 238),
                                    ],
                                    begin: Alignment.bottomLeft,
                                    end: Alignment.topRight,
                                  ),
                                  image: DecorationImage(
                                    image: AssetImage(data['path']!),
                                    fit: BoxFit.cover,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(
                            height: 10.0), // Gap between circle and text
                        Center(
                          child: Text(
                            data['name']!,
                            style: const TextStyle(
                              fontSize: 12.0,
                              color: Colors.black,
                            ),
                            textAlign: TextAlign.center, // Center the text
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 16.0), // Horizontal gap between items
                ],
              );
            }).toList(),
          ),
        ),
      ),
    );
  }
}
