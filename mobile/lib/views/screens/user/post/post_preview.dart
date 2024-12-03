import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
// import 'package:habitatplus/views/screens/user/post/post_all_screen.dart';
import 'package:habitatplus/views/screens/user/post/post_screen.dart';
import 'package:habitatplus/views/widgets/shared/scroll_container.dart';
import 'package:habitatplus/views/widgets/shared/section_headers.dart';

class PostPreviewCard extends StatelessWidget {
  final String heading;
  final String description;

  const PostPreviewCard({
    Key? key,
    required this.heading,
    required this.description,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [
            Color.fromARGB(255, 162, 228, 91),
            Color.fromARGB(255, 82, 158, 0),
          ], // Gradient colors
          end: Alignment.bottomLeft,
          begin: Alignment.topRight,
        ),
        borderRadius: BorderRadius.circular(16.0), // Border radius
      ),
      child: Container(
        // elevation: 4.0,
        // shape: RoundedRectangleBorder(
        //   borderRadius: BorderRadius.circular(16.0), // Match border radius
        // ),
        color: Colors.transparent, // Make the Card background transparent
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: SizedBox(
            width: 300.0,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.all(0),
                  child: Text(
                    heading,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 20.0,
                      color: Colors.white, // White color for contrast
                    ),
                  ),
                ),
                const SizedBox(
                    height: 8.0), // Space between heading and description
                Text(
                  description,
                  style: TextStyle(
                    color: Colors.white
                        .withOpacity(.8), // Slightly transparent white
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

class PostPreview extends StatelessWidget {
  final List<Map<String, String>> announcements;

  const PostPreview({
    Key? key,
    required this.announcements,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              SectionHeading(
                title: 'Posts',
                color: AppColors.darkTeal,
              ),
              InkWell(
                onTap: () {
                  print("dfjkd fjkd");
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => PostScreen(),
                    ),
                  );
                },
                child: SectionHeading(
                  title: ' view all',
                  fontSize: 17,
                  color: AppColors.turquoise,
                ),
              ),
            ],
          ),
          const SizedBox(height: 15.0),
          HorizontalScrollContainer(
            padding: EdgeInsets.zero,
            margin: EdgeInsets.zero,
            itemSpacing: 12.0,
            itemCount: announcements.length,
            itemBuilder: (context, index) {
              final member = announcements[index];
              return PostPreviewCard(
                heading: member['heading']!,
                description: member['description']!,
              );
            },
          ),
        ],
      ),
    );
  }
}
