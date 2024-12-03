import 'package:flutter/material.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';
import 'package:habitatplus/views/screens/user/payment/payment_due.dart';
import 'package:habitatplus/views/screens/user/payment/recent_transations.dart';
import 'package:habitatplus/views/screens/user/quicklink/quick_link.dart';
import 'package:habitatplus/views/widgets/shared/screen_container.dart';

class PaymentScreen extends StatelessWidget {
  PaymentScreen({Key? key}) : super(key: key);

  final List<Transaction> recentTransactions = [
    Transaction(
      billNo: '123456',
      title: 'Groceries',
      date: '2024-08-10',
      amount: '-\$50',
      isExpense: true,
      paymentStatus: 'Paid',
      icon: Icons.shopping_cart,
    ),
    Transaction(
      billNo: '654321',
      title: 'Salary',
      date: '2024-08-09',
      amount: '+\$2000',
      isExpense: false,
      paymentStatus: 'Paid',
      icon: Icons.attach_money,
    ),
    Transaction(
      billNo: '789012',
      title: 'Electricity Bill',
      date: '2024-08-08',
      amount: '-\$100',
      isExpense: true,
      paymentStatus: 'Unpaid',
      icon: Icons.electrical_services,
    ),
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
      const SizedBox(height: 30.0),
      RecentTransactions(
          transactions: recentTransactions), // Add spacing between components
    ];

    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Payments',
      ),
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
