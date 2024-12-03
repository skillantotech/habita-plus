import 'package:flutter/material.dart';
import 'package:habitatplus/views/screens/user/payment/payment_due.dart';
import 'package:habitatplus/views/screens/user/quicklink/quick_link.dart';
import 'package:habitatplus/views/widgets/shared/screen_container.dart';

class FindScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final List<Widget> components = [
      QuickLinks(userType: 'resident', category: 'find'),
      const SizedBox(height: 10.0), // Add spacing between components
      PaymentDue(
        amountDue: 5000,
        dueDate: '7/28/2024',
      ),
      const SizedBox(height: 30.0), // Add spacing between components

      const SizedBox(height: 30.0), // Add spacing between components
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
