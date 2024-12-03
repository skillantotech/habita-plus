import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'package:habitatplus/views/appbar/app_bar.dart';
import 'package:habitatplus/views/widgets/shared/screen_container.dart';
import 'package:habitatplus/views/widgets/shared/section_headers.dart';

class DocumentCard extends StatelessWidget {
  final String heading;
  final String description;
  final String time;

  const DocumentCard({
    Key? key,
    required this.heading,
    required this.description,
    required this.time,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
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

class DocumentScreen extends StatelessWidget {
  static const annouceData = [
    {
      'heading': 'Heading 1',
      'description':
          'Hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding',
      'time': "2.30 AM",
    },
    {
      'heading': 'Heading 2',
      'description':
          'Hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding',
      'time': "2.30 AM",
    },
    // Additional items...
  ];

  @override
  Widget build(BuildContext context) {
    final List<Widget> components = [
      const Padding(
        padding: EdgeInsets.all(15.0),
        child: const Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const SectionHeading(
              title: '',
              color: AppColors.darkTeal,
            ),
            const SectionHeading(
              title: '+ add document',
              color: AppColors.darkTeal,
            )
          ],
        ),
      ),
      Container(
          color: Colors.white,

          // padding: EdgeInsets.symmetric(),
          child: Column(children: [
            ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: annouceData.length,
              itemBuilder: (context, index) {
                final post = annouceData[index];
                return DocumentCard(
                  heading: post['heading']!,
                  description: post['description']!,
                  time: post['time']!,
                );
              },
            )
          ])),
    ];

    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Documents',
      ),
      body: ScreenContainer(
        // padding: const EdgeInsets.symmetric(horizontal: 10.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: components,
          ),
        ),
      ),
    );
  }
}
