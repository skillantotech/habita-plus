import 'package:flutter/material.dart';
import 'package:habitatplus/views/screens/user/quicklink/quick_link.dart';
import 'package:habitatplus/views/screens/user/userinfo/user_info.dart';
import 'package:habitatplus/views/widgets/shared/screen_container.dart';

class MyUnitScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final List<Widget> components = [
      QuickLinks(userType: 'resident', category: 'myunit'),
      const SizedBox(
          height: 16.0), // Increased spacing for better visual separation
      UserInfo(),
      const SizedBox(height: 20.0),
    ];

    return Scaffold(
      body: ScreenContainer(
        padding: const EdgeInsets.symmetric(horizontal: 10.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: components,
        ),
      ),
    );
  }
}
