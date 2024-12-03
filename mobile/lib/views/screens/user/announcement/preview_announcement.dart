import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'package:habitatplus/views/screens/user/announcement/announcement_screen.dart';
import 'package:habitatplus/views/widgets/shared/scroll_container.dart';
import 'package:habitatplus/views/widgets/shared/section_headers.dart';

class AnnouncementPreviewCard extends StatelessWidget {
  final String heading;
  final String description;

  const AnnouncementPreviewCard({
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
            AppColors.turquoise,
            Colors.blue,
          ], // Gradient colors
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
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

class AnnouncementsPreview extends StatelessWidget {
  final List<Map<String, String>> announcements;

  const AnnouncementsPreview({
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
                title: 'Announcements',
                color: AppColors.darkTeal,
              ),
              InkWell(
                onTap: () {
                  // Your onTap functionality here
                  print("View All Announcement");
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => AnnouncementScreen(),
                    ),
                  );
                  // You can navigate to another screen or perform any action
                },
                child: SectionHeading(
                  title: 'view all',
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
              return AnnouncementPreviewCard(
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
