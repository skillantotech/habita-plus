import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'dart:ui';

import 'package:habitatplus/views/widgets/button/custom_button.dart';

class PaymentDue extends StatelessWidget {
  final double amountDue;
  final String dueDate;

  PaymentDue({
    required this.amountDue,
    required this.dueDate,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 10),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [
            Color.fromARGB(255, 214, 211, 211), // End color
            Color.fromARGB(255, 225, 250, 255), // Start color
          ],
          begin: Alignment.topRight, // Starting point of the gradient
          end: Alignment.bottomLeft, // Ending point of the gradient
        ),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Upcomming Due',
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w700,
                            color: AppColors.darkTeal,
                          ),
                        ),
                      ],
                    ),
                    MonthButton(
                      monthName: 'August',
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 15),
          const Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            Text(
              "₹642.00",
              style: TextStyle(
                fontSize: 30,
                fontWeight: FontWeight.w800,
                color: AppColors.darkTeal,
              ),
            ),
          ]),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            Text(
              "Total Due Payment: ₹642.00",
              style: TextStyle(
                fontSize: 14,
                color: Colors.grey[600],
              ),
            ),
          ]),
          const SizedBox(height: 20),
          Container(
              width: double.infinity,
              child: CustomGradientButton(
                text: 'Pay Now',
                onPressed: () {},
                fontSize: 18.0,
                borderRadius: 12.0,
                padding: const EdgeInsets.symmetric(
                    vertical: 20.0, horizontal: 30.0),
              )),
        ],
      ),
    );
  }
}

// import 'package:flutter/material.dart';

class MonthButton extends StatelessWidget {
  final String monthName;

  MonthButton({
    required this.monthName,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(
        maxWidth: 200, // Adjust width as needed
      ),
      // padding: EdgeInsets.all(10), // Increased padding for better spacing
      decoration: BoxDecoration(
        // color: Colors.grey[200],
        borderRadius: BorderRadius.circular(14),
      ),
      child: Row(
        mainAxisSize: MainAxisSize
            .min, // Make sure the row takes only as much space as needed
        children: [
          const Icon(
            Icons.calendar_month,
            color: AppColors.turquoise,
            size: 24, // Adjust icon size as needed
          ),
          SizedBox(width: 8),
          Flexible(
            child: Text(
              '$monthName' + '\'s',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w500,
                color: AppColors.turquoise,
              ),
              overflow: TextOverflow.ellipsis, // Handle text overflow
            ),
          ),
        ],
      ),
    );
  }
}
