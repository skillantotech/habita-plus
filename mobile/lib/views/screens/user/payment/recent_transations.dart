import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'package:habitatplus/views/screens/user/payment/payment_history_screen.dart';
import 'package:habitatplus/views/screens/user/post/post_screen.dart';

class TransactionCard extends StatelessWidget {
  final Transaction transaction;

  const TransactionCard({Key? key, required this.transaction})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(
        '${transaction.title} (Bill No: ${transaction.billNo})',
        style: const TextStyle(color: Colors.black), // Set title color to white
      ),
      subtitle: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Date: ${transaction.date}',
            style: const TextStyle(color: Colors.black),
          ),
          Text(
            'Payment Status: ${transaction.paymentStatus}',
            style: TextStyle(
              color: transaction.paymentStatus == 'Paid'
                  ? Colors.greenAccent[400]
                  : Colors.red[300],
            ),
          ),
        ],
      ),
      trailing: Text(
        transaction.amount,
        style: TextStyle(
          color:
              transaction.isExpense ? Colors.red[300] : Colors.greenAccent[400],
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}

class RecentTransactions extends StatelessWidget {
  final List<Transaction> transactions;

  const RecentTransactions({Key? key, required this.transactions})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Align(
          alignment: Alignment.centerLeft,
          child: TextButton(
            onPressed: () {
              // Implement navigation to all transactions
            },
            child: const Text('Recent Transactions',
                style: TextStyle(fontSize: 20, color: AppColors.darkTeal)),
          ),
        ),
        const SizedBox(height: 10.0),
        Container(
          decoration: BoxDecoration(
            gradient: const LinearGradient(
              colors: [
                Color.fromARGB(255, 214, 211, 211), // End color
                Color.fromARGB(255, 225, 250, 255), // End color
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
            borderRadius: BorderRadius.circular(10.0),
          ),
          margin: const EdgeInsets.all(0.0),
          child: Container(
            margin: EdgeInsets.zero, // Remove the margin inside the container
            child: Padding(
              padding: const EdgeInsets.all(0.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(height: 10.0),
                  ListView.separated(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    itemCount: transactions.length,
                    separatorBuilder: (context, index) => const Divider(
                      color: Colors
                          .white54, // Set divider color to white with some transparency
                    ),
                    itemBuilder: (context, index) {
                      final transaction = transactions[index];
                      return TransactionCard(transaction: transaction);
                    },
                  ),
                  const SizedBox(height: 10.0),
                ],
              ),
            ),
          ),
        ),
        const SizedBox(height: 5.0),
        Align(
          alignment: Alignment.centerRight,
          child: TextButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => PaymentHistoryScreen(),
                ),
              );
            },
            child: const Text(
              'See All',
              style: TextStyle(
                fontSize: 15,
                color: AppColors.darkTeal,
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class Transaction {
  final String billNo;
  final String title;
  final String date;
  final String amount;
  final bool isExpense;
  final String paymentStatus;
  final IconData icon;

  Transaction({
    required this.billNo,
    required this.title,
    required this.date,
    required this.amount,
    required this.paymentStatus,
    this.isExpense = true,
    this.icon = Icons.payment,
  });
}
