import 'package:flutter/material.dart';
import 'package:habitatplus/views/appbar/app_bar.dart';
import 'package:habitatplus/views/widgets/shared/screen_container.dart';

class TenantCard extends StatelessWidget {
  final String heading;
  final String description;
  final String time;

  const TenantCard({
    Key? key,
    required this.heading,
    required this.description,
    required this.time,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12.0), // Add space between cards
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [
            Color.fromARGB(255, 214, 211, 211), // End color
            Color.fromARGB(255, 225, 250, 255), // Start color
          ],
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
        ),
        borderRadius: BorderRadius.circular(16.0),
      ),
      child: Container(
        color: Colors.transparent,
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: SizedBox(
            width: double.infinity,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      heading,
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 20.0,
                        color: Colors.black,
                      ),
                    ),
                    Text(
                      time,
                      style: TextStyle(
                        color: Colors.grey[600],
                        fontWeight: FontWeight.w200,
                        fontSize: 12.0,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8.0),
                Text(
                  description,
                  style: const TextStyle(
                    color: Colors.black,
                    fontSize: 14.0,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class TenantScreen extends StatelessWidget {
  static const annouceData = [
    {
      'heading': 'Heading 1',
      'description':
          'Hello sir, I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding...',
      'time': "2.30 AM",
    },
    // Other data entries...
  ];

  @override
  Widget build(BuildContext context) {
    final List<Widget> components = [
      const SizedBox(height: 15.0),
      ListView.builder(
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        itemCount: annouceData.length,
        itemBuilder: (context, index) {
          final post = annouceData[index];
          return TenantCard(
            heading: post['heading']!,
            description: post['description']!,
            time: post['time']!,
          );
        },
      ),
    ];

    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Tenant',
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
