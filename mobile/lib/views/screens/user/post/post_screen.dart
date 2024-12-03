import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'package:habitatplus/views/appbar/app_bar.dart';
import 'package:habitatplus/views/widgets/shared/screen_container.dart';
import 'package:habitatplus/views/widgets/shared/section_headers.dart';

class PostDetailPage extends StatelessWidget {
  final String profileImageUrl;
  final String heading;
  final String description;
  final String? postimage;
  final String time;

  const PostDetailPage({
    Key? key,
    required this.profileImageUrl,
    required this.heading,
    required this.description,
    this.postimage,
    required this.time,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Posts'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  CircleAvatar(
                    backgroundImage: AssetImage(profileImageUrl),
                    radius: 24.0,
                  ),
                  const SizedBox(width: 12.0),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          heading,
                          style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 20.0,
                            color: Colors.black,
                          ),
                        ),
                        const SizedBox(height: 4.0),
                        Text(
                          time,
                          style: TextStyle(
                            color: Colors.grey[600],
                            fontSize: 14.0,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16.0),
              // Text(
              //   description,
              //   style: const TextStyle(
              //     fontSize: 16.0,
              //     color: Colors.black87,
              //   ),
              // ),
              ExpandableText(
                text: description,
                trimLength: 100, // Set your desired trim length
              ),
              const SizedBox(height: 16.0),
              postimage != '' ? Image.asset(postimage!) : Center(),
            ],
          ),
        ),
      ),
    );
  }
}

class PostCard extends StatelessWidget {
  final String profileImageUrl;
  final String heading;
  final String description;
  final String time;
  final String? postimage;
  final VoidCallback? onTap;

  const PostCard({
    Key? key,
    required this.profileImageUrl,
    required this.heading,
    required this.description,
    required this.time,
    required this.postimage,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.only(bottom: 12.0),
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            colors: [
              Color.fromARGB(255, 214, 211, 211),
              Color.fromARGB(255, 225, 250, 255),
            ],
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
          ),
          borderRadius: BorderRadius.circular(16.0),
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: SizedBox(
            width: double.infinity,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CircleAvatar(
                      backgroundImage: AssetImage(profileImageUrl),
                      radius: 24.0,
                    ),
                    const SizedBox(width: 12.0),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
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
                    ),
                  ],
                ),
                const SizedBox(height: 12.0),
                ExpandableText(
                  text: description,
                  trimLength: 100, // Set your desired trim length
                ),
                // Text(
                //   description,
                //   style: const TextStyle(
                //     color: Colors.black,
                //     fontSize: 14.0,
                //   ),
                // ),
                const SizedBox(height: 16.0),
                postimage != '' ? Image.asset(postimage!) : Center(),
                const SizedBox(height: 16.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    IconButton(
                      icon: const Icon(Icons.thumb_up_alt_outlined),
                      onPressed: () {},
                    ),
                    IconButton(
                      icon: const Icon(Icons.comment_outlined),
                      onPressed: () {},
                    ),
                    IconButton(
                      icon: const Icon(Icons.share_outlined),
                      onPressed: () {},
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class PostScreen extends StatelessWidget {
  static const annouceData = [
    {
      'profileImageUrl': "assets/images/building1.jpg",
      'heading': 'Post 1',
      'description':
          'Hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding',
      'postimage': "",
      'time': "1.30 AM",
    },
    {
      'profileImageUrl': "assets/images/building2.jpg",
      'heading': 'Post 2',
      'description':
          'Hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding',
      'postimage': "assets/images/building1.jpg",
      'time': "2.30 AM",
    },
    {
      'profileImageUrl': "assets/images/building3.jpg",
      'heading': 'Post 3',
      'description':
          'Hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding hello sir I am Chinmaya Kumar Behera going to kill Ravana. This is the notification regarding',
      'postimage': "assets/images/building1.jpg",
      'time': "2.30 AM",
    },
  ];

  @override
  Widget build(BuildContext context) {
    final List<Widget> components = [
      const SectionHeading(
        title: 'Posts',
        color: AppColors.darkTeal,
      ),
      const SizedBox(height: 15.0),
      ListView.builder(
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        itemCount: annouceData.length,
        itemBuilder: (context, index) {
          final post = annouceData[index];
          return PostCard(
            profileImageUrl: post["profileImageUrl"]!,
            heading: post['heading']!,
            description: post['description']!,
            postimage: post['postimage']!,
            time: post['time']!,
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => PostDetailPage(
                    profileImageUrl: post['profileImageUrl']!,
                    heading: post['heading']!,
                    description: post['description']!,
                    postimage: post['postimage']!,
                    time: post['time']!,
                  ),
                ),
              );
            },
          );
        },
      ),
    ];

    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Posts',
      ),
      body: ScreenContainer(
        padding: const EdgeInsets.symmetric(horizontal: 10.0),
        scrollable: true,
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
