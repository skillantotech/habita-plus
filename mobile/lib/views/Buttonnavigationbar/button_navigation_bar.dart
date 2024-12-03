import 'package:flutter/material.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'package:habitatplus/views/appbar/app_bar.dart';
import 'package:habitatplus/views/screens/user/community_screen.dart';
import 'package:habitatplus/views/screens/user/find_screen.dart';
import 'package:habitatplus/views/screens/user/home_screen.dart';
import 'package:habitatplus/views/screens/user/more_screen.dart';
import 'package:habitatplus/views/screens/user/myunit_screen.dart';

class BottomNavBar extends StatefulWidget {
  @override
  _BottomNavBarState createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  int _page = 0;
  GlobalKey<CurvedNavigationBarState> _bottomNavigationKey = GlobalKey();

  final List<Widget> _pages = [
    MyUnitScreen(),
    CommunityScreen(),
    HomeScreen(),
    FindScreen(),
    MoreScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarMain(),
      bottomNavigationBar: CurvedNavigationBar(
        key: _bottomNavigationKey,
        index: _page,
        items: <Widget>[
          Icon(
            Icons.corporate_fare,
            size: 35,
            color: _page == 0
                ? Colors.black
                : const Color.fromARGB(255, 101, 100, 100),
          ), // Placeholder Icon
          Icon(
            Icons.people,
            size: 35,
            color: _page == 1
                ? Colors.black
                : const Color.fromARGB(255, 101, 100, 100),
          ), // Placeholder Icon
          Icon(
            Icons.home,
            size: 35,
            color: _page == 2
                ? Colors.black
                : const Color.fromARGB(255, 101, 100, 100),
          ), // Home Icon
          Icon(
            Icons.search,
            size: 35,
            color: _page == 3
                ? Colors.black
                : const Color.fromARGB(255, 101, 100, 100),
          ), // Placeholder Icon
          Icon(
            Icons.dashboard_outlined,
            size: 35,
            color: _page == 4
                ? Colors.black
                : const Color.fromARGB(255, 101, 100, 100),
          ), // Settings Icon
        ],
        color: Colors.white,
        buttonBackgroundColor: Colors.white,
        backgroundColor: AppColors.turquoise,
        animationCurve: Curves.easeInOut,
        animationDuration: Duration(milliseconds: 500),
        onTap: (index) {
          setState(() {
            _page = index;
            // print(_page); // Change the current page
          });
        },
        letIndexChange: (index) => true,
      ),
      body: _pages[_page], // Display the selected page
    );
  }
}

// // notch bottom bar

// import 'package:animated_notch_bottom_bar/animated_notch_bottom_bar/animated_notch_bottom_bar.dart';
// import 'package:flutter/material.dart';
// import 'package:animated_notch_bottom_bar/animated_notch_bottom_bar.dart';
// import 'package:habitatplus/core/theme/app_colors.dart';
// import 'package:habitatplus/views/appbar/app_bar.dart';
// import 'package:habitatplus/views/screens/user/community_screen.dart';
// import 'package:habitatplus/views/screens/user/find_screen.dart';
// import 'package:habitatplus/views/screens/user/home_screen.dart';
// import 'package:habitatplus/views/screens/user/more_screen.dart';
// import 'package:habitatplus/views/screens/user/myunit_screen.dart';

// class BottomNavBar extends StatefulWidget {
//   @override
//   _BottomNavBarState createState() => _BottomNavBarState();
// }

// class _BottomNavBarState extends State<BottomNavBar> {
//   int _page = 0;

//   final List<Widget> _pages = [
//     MyUnitScreen(),
//     CommunityScreen(),
//     HomeScreen(),
//     FindScreen(),
//     MoreScreen(),
//   ];

//   final List<BottomBarItem> _items = [
//     BottomBarItem(
//       inActiveItem: Icon(
//         Icons.corporate_fare,
//         color: const Color.fromARGB(255, 101, 100, 100),
//       ),
//       activeItem: Icon(
//         Icons.corporate_fare,
//         color: Colors.white,
//       ),
//       itemLabel: 'Unit', // Optional Label
//     ),
//     BottomBarItem(
//       inActiveItem: Icon(
//         Icons.people,
//         color: const Color.fromARGB(255, 101, 100, 100),
//       ),
//       activeItem: Icon(
//         Icons.people,
//         color: Colors.white,
//       ),
//       itemLabel: 'Community',
//     ),
//     BottomBarItem(
//       inActiveItem: Icon(
//         Icons.home,
//         color: const Color.fromARGB(255, 101, 100, 100),
//       ),
//       activeItem: Icon(
//         Icons.home,
//         color: Colors.white,
//       ),
//       itemLabel: 'Home',
//     ),
//     BottomBarItem(
//       inActiveItem: Icon(
//         Icons.search,
//         color: const Color.fromARGB(255, 101, 100, 100),
//       ),
//       activeItem: Icon(
//         Icons.search,
//         color: Colors.white,
//       ),
//       itemLabel: 'Search',
//     ),
//     BottomBarItem(
//       inActiveItem: Icon(
//         Icons.dashboard_outlined,
//         color: const Color.fromARGB(255, 101, 100, 100),
//       ),
//       activeItem: Icon(
//         Icons.dashboard_outlined,
//         color: Colors.white,
//       ),
//       itemLabel: 'More',
//     ),
//   ];

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBarMain(),
//       body: _pages[_page], // Display the selected page
//       bottomNavigationBar: AnimatedNotchBottomBar(
//         notchColor: AppColors.turquoise, // Color for the notch background
//         color: Colors.white, // Background color of the bottom bar
//         items: _items,
//         backgroundColor: Colors.white,
//         activeIndex: _page,
//         onTap: (index) {
//           setState(() {
//             _page = index;
//           });
//         },
//         // Additional customization options
//         animationDuration: Duration(milliseconds: 500),
//         notchCurve: Curves.easeInOut,
//         height: 60.0, // Height of the bottom bar
//       ),
//     );
//   }
// }


// notch bottomnav bar

// import 'package:animated_notch_bottom_bar/animated_notch_bottom_bar/animated_notch_bottom_bar.dart';
// import 'package:flutter/material.dart';
// import 'package:habitatplus/views/Appbar/app_bar.dart';
// import 'package:habitatplus/views/screens/user/community_screen.dart';
// import 'package:habitatplus/views/screens/user/find_screen.dart';
// import 'package:habitatplus/views/screens/user/home_screen.dart';
// import 'package:habitatplus/views/screens/user/more_screen.dart';
// import 'package:habitatplus/views/screens/user/myunit_screen.dart';
// import 'package:animated_notch_bottom_bar/animated_notch_bottom_bar.dart';
// import 'package:animated_notch_bottom_bar/animated_notch_bottom_bar.dart';


// import 'package:flutter/material.dart';
// // import 'package:animated_notch_bottom_bar/animated_notch_bottom_bar.dart';

// void main() {
//   runApp(MaterialApp(home: BottomNavBar()));
// }

// class BottomNavBar extends StatefulWidget {
//   @override
//   _BottomNavBarState createState() => _BottomNavBarState();
// }

// class _BottomNavBarState extends State<BottomNavBar> {
//   int _pageIndex = 0;

//   final List<Widget> _pages = [
//     Center(child: Text('Home')),
//     Center(child: Text('Search')),
//     Center(child: Text('Profile')),
//     Center(child: Text('Settings')),
//   ];

//   final List<BottomBarItem> _items = [
//     BottomBarItem(
//       inActiveItem: Icon(Icons.home, color: Colors.grey),
//       activeItem: Icon(Icons.home, color: Colors.white),
//       itemLabel: 'Home',
//     ),
//     BottomBarItem(
//       inActiveItem: Icon(Icons.search, color: Colors.grey),
//       activeItem: Icon(Icons.search, color: Colors.white),
//       itemLabel: 'Search',
//     ),
//     BottomBarItem(
//       inActiveItem: Icon(Icons.person, color: Colors.grey),
//       activeItem: Icon(Icons.person, color: Colors.white),
//       itemLabel: 'Profile',
//     ),
//     BottomBarItem(
//       inActiveItem: Icon(Icons.settings, color: Colors.grey),
//       activeItem: Icon(Icons.settings, color: Colors.white),
//       itemLabel: 'Settings',
//     ),
//   ];

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: _pages[_pageIndex],
//       bottomNavigationBar: AnimatedNotchBottomBar(
//         color: Colors.black,
//         notchColor: Colors.blue,
//         backgroundColor: Colors.transparent,
//         buttonBackgroundColor: Colors.blue,
//         activeIndex: _pageIndex,
//         items: _items,
//         onTap: (index) {
//           setState(() {
//             _pageIndex = index;
//           });
//         },
//         animationDuration: Duration(milliseconds: 500),
//         notchCurve: Curves.easeInOut,
//         height: 60.0,
//       ),
//     );
//   }
// }
