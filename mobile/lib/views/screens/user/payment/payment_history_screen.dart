import 'package:flutter/material.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';
import 'package:habitatplus/views/screens/user/quicklink/quick_link.dart';

class PaymentHistoryScreen extends StatefulWidget {
  const PaymentHistoryScreen({Key? key}) : super(key: key);

  @override
  _PaymentHistoryScreenState createState() => _PaymentHistoryScreenState();
}

class _PaymentHistoryScreenState extends State<PaymentHistoryScreen> {
  // Filter variables
  DateTimeRange? _dateRange;
  RangeValues _priceRange = RangeValues(0, 1000);
  String _statusFilter = 'All';

  // Sample transaction data
  final List<Transaction> _allTransactions = [
    Transaction(
      billNo: '001',
      title: 'Groceries',
      date: DateTime(2024, 8, 10),
      amount: 50,
      isExpense: true,
      paymentStatus: 'Paid',
    ),
    Transaction(
      billNo: '002',
      title: 'Salary',
      date: DateTime(2024, 8, 9),
      amount: 2000,
      isExpense: false,
      paymentStatus: 'Paid',
    ),
    Transaction(
      billNo: '003',
      title: 'Electricity Bill',
      date: DateTime(2024, 8, 8),
      amount: 100,
      isExpense: true,
      paymentStatus: 'Pending',
    ),
    // Add more sample transactions as needed
  ];

  List<Transaction> get _filteredTransactions {
    return _allTransactions.where((transaction) {
      bool matchesDateRange = _dateRange == null ||
          (transaction.date.isAfter(_dateRange!.start) &&
              transaction.date
                  .isBefore(_dateRange!.end.add(Duration(days: 1))));
      bool matchesPriceRange = transaction.amount >= _priceRange.start &&
          transaction.amount <= _priceRange.end;
      bool matchesStatus =
          _statusFilter == 'All' || transaction.paymentStatus == _statusFilter;

      return matchesDateRange && matchesPriceRange && matchesStatus;
    }).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Payment History',
      ),
      body: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10.0),
        // scrollable: true,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            QuickLinks(userType: 'resident', category: 'home'),
            const SizedBox(height: 10.0), // Add spacing between components
            _buildFilterSection(),
            const SizedBox(height: 20.0),
            Expanded(
              child: _buildTransactionList(),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFilterSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Filters',
          style: Theme.of(context).textTheme.headlineSmall,
        ),
        const SizedBox(height: 10.0),
        _buildDateRangeFilter(),
        const SizedBox(height: 10.0),
        _buildPriceRangeFilter(),
        const SizedBox(height: 10.0),
        _buildStatusFilter(),
      ],
    );
  }

  Widget _buildDateRangeFilter() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        const Text('Date Range'),
        ElevatedButton(
          onPressed: () async {
            final pickedDateRange = await showDateRangePicker(
              context: context,
              firstDate: DateTime(2000),
              lastDate: DateTime(2100),
              initialDateRange: _dateRange,
            );
            if (pickedDateRange != null && pickedDateRange != _dateRange) {
              setState(() {
                _dateRange = pickedDateRange;
              });
            }
          },
          child: Text(
            _dateRange == null
                ? 'Select Date Range'
                : '${_dateRange!.start.toLocal().toShortDateString()} - ${_dateRange!.end.toLocal().toShortDateString()}',
          ),
        ),
      ],
    );
  }

  Widget _buildPriceRangeFilter() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text('Price Range'),
        RangeSlider(
          values: _priceRange,
          min: 0,
          max: 1000,
          divisions: 10,
          labels: RangeLabels(
            '\$${_priceRange.start.round()}',
            '\$${_priceRange.end.round()}',
          ),
          onChanged: (values) {
            setState(() {
              _priceRange = values;
            });
          },
        ),
      ],
    );
  }

  Widget _buildStatusFilter() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        const Text('Payment Status'),
        DropdownButton<String>(
          value: _statusFilter,
          items: <String>['All', 'Pending', 'Paid']
              .map((status) => DropdownMenuItem<String>(
                    value: status,
                    child: Text(status),
                  ))
              .toList(),
          onChanged: (value) {
            setState(() {
              _statusFilter = value!;
            });
          },
        ),
      ],
    );
  }

  Widget _buildTransactionList() {
    final transactions = _filteredTransactions;
    if (transactions.isEmpty) {
      return Center(
        child: Text('No transactions found'),
      );
    }

    return ListView.builder(
      itemCount: transactions.length,
      itemBuilder: (context, index) {
        final transaction = transactions[index];
        return TransactionCard(transaction: transaction);
      },
    );
  }
}

class TransactionCard extends StatelessWidget {
  final Transaction transaction;

  const TransactionCard({Key? key, required this.transaction})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(
        '${transaction.title} (Bill No: ${transaction.billNo})',
        style: const TextStyle(color: Colors.white), // Set title color to white
      ),
      subtitle: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Date: ${transaction.date.toLocal().toShortDateString()}',
            style: const TextStyle(color: Colors.white70),
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
        '\$${transaction.amount}',
        style: TextStyle(
          color:
              transaction.isExpense ? Colors.red[300] : Colors.greenAccent[400],
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}

class Transaction {
  final String billNo;
  final String title;
  final DateTime date;
  final double amount;
  final bool isExpense;
  final String paymentStatus;

  Transaction({
    required this.billNo,
    required this.title,
    required this.date,
    required this.amount,
    required this.paymentStatus,
    this.isExpense = true,
  });
}

extension DateFormatting on DateTime {
  String toShortDateString() {
    return '${this.day}/${this.month}/${this.year}';
  }
}
