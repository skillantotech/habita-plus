import 'package:flutter/material.dart';
import 'package:habitatplus/views/screens/user/announcement/preview_announcement.dart';
import 'package:habitatplus/views/screens/user/post/post_preview.dart';
// import 'package:habitatplus/views/screens/user/post/post_screen.dart';
import 'package:habitatplus/views/widgets/shared/screen_container.dart';
import 'package:habitatplus/views/screens/user/quicklink/quick_link.dart';
import 'package:habitatplus/views/screens/user/payment/payment_due.dart'; // Adjust the import path

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  static const annouceData = [
    {
      'heading': 'Heading 1',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
    },
    {
      'heading': 'Heading 2',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
    },
    {
      'heading': 'Heading 3',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
    },
    {
      'heading': 'Heading 4',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
    },
    {
      'heading': 'Heading 5',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
    },
  ];

  @override
  Widget build(BuildContext context) {
    final List<Widget> components = [
      QuickLinks(userType: 'resident', category: 'home'),
      const SizedBox(height: 10.0), // Add spacing between components
      PaymentDue(
        amountDue: 5000,
        dueDate: '7/28/2024',
      ),
      const SizedBox(height: 30.0), // Add spacing between components
      const AnnouncementsPreview(
        announcements: annouceData,
      ),
      const SizedBox(height: 30.0), // Add spacing between components
      const PostPreview(
        announcements: annouceData,
      ),
      // Expanded(child: PostScreen()),
      // PostScreen(posts: annouceData),
    ];

    return Scaffold(
      body: ScreenContainer(
        padding: const EdgeInsets.symmetric(horizontal: 10.0),
        scrollable: true,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: components,
        ),
      ),
    );
  }
}
