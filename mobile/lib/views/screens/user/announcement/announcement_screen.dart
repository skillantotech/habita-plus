import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';
import 'package:habitatplus/views/widgets/shared/screen_container.dart';
import 'package:habitatplus/views/widgets/shared/section_headers.dart';

class AnnouncementCard extends StatelessWidget {
  final String heading;
  final String description;
  final String time;
  final VoidCallback? onTap;

  const AnnouncementCard({
    Key? key,
    required this.heading,
    required this.description,
    required this.time,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
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
                  // Text(
                  //   description,
                  //   style: const TextStyle(
                  //     color: Colors.black,
                  //     fontSize: 14.0,
                  //   ),
                  // ),
                  ExpandableText(
                    text: description,
                    trimLength: 100, // Set your desired trim length
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class AnnouncementScreen extends StatelessWidget {
  static const annouceData = [
    {
      'heading': 'Heading 1',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
      'time': "2.30 AM",
    },
    {
      'heading': 'Heading 2',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
      'time': "2.30 AM",
    },
    {
      'heading': 'Heading 3',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
      'time': "2.30 AM",
    },
    {
      'heading': 'Heading 4',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
      'time': "2.30 AM",
    },
    {
      'heading': 'Heading 5',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
      'time': "2.30 AM",
    },
    {
      'heading': 'Heading 6',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
      'time': "2.30 AM",
    },
    {
      'heading': 'Heading 7',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
      'time': "2.30 AM",
    },
    {
      'heading': 'Heading 8',
      'description':
          'Hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding hello sir i am chinmaya kumar behera going to kill ravana. This the notification reagarding',
      'time': "2.30 AM",
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Announcement',
      ),
      body: ScreenContainer(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SectionHeading(
              title: 'Announcement',
              color: AppColors.darkTeal,
            ),
            const SizedBox(height: 15.0),
            ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: annouceData.length,
              itemBuilder: (context, index) {
                final post = annouceData[index];
                return AnnouncementCard(
                  heading: post['heading']!,
                  description: post['description']!,
                  time: post['time']!,
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => AnnouncementDetailPage(
                          heading: post['heading']!,
                          description: post['description']!,
                          time: post['time']!,
                        ),
                      ),
                    );
                  },
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

class AnnouncementDetailPage extends StatelessWidget {
  final String heading;
  final String description;
  final String time;

  const AnnouncementDetailPage({
    Key? key,
    required this.heading,
    required this.description,
    required this.time,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Announcement',
      ),
      body: Container(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                heading,
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 24.0,
                ),
              ),
              const SizedBox(height: 8.0),
              Text(
                time,
                style: TextStyle(
                  color: Colors.grey[600],
                  fontSize: 16.0,
                ),
              ),
              const SizedBox(height: 16.0),
              // Text(
              //   description,
              //   style: const TextStyle(
              //     fontSize: 16.0,
              //   ),
              // ),
              ExpandableText(
                text: description,
                trimLength: 100, // Set your desired trim length
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// expandable text

class ExpandableText extends StatefulWidget {
  final String text;
  final int trimLength;

  const ExpandableText({
    Key? key,
    required this.text,
    this.trimLength = 100,
  }) : super(key: key);

  @override
  _ExpandableTextState createState() => _ExpandableTextState();
}

class _ExpandableTextState extends State<ExpandableText> {
  bool isExpanded = false;

  @override
  Widget build(BuildContext context) {
    final fullText = widget.text;
    final trimmedText = fullText.length > widget.trimLength
        ? fullText.substring(0, widget.trimLength) + '...'
        : fullText;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          isExpanded ? fullText : trimmedText,
          style: const TextStyle(
            fontSize: 14.0,
            color: Colors.black,
          ),
        ),
        GestureDetector(
          onTap: () {
            setState(() {
              isExpanded = !isExpanded;
            });
          },
          child: Text(
            isExpanded ? "Read Less" : "Read More",
            style: const TextStyle(
              color: Colors.blue,
              fontSize: 14.0,
            ),
          ),
        ),
      ],
    );
  }
}
