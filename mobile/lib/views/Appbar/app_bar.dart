import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'package:habitatplus/views/screens/user/chat/chat_screen.dart';
import 'package:habitatplus/views/screens/user/notification/notification_screen.dart';

class AppBarMain extends StatelessWidget implements PreferredSizeWidget {
  @override
  final Size preferredSize;

  AppBarMain({Key? key})
      : preferredSize = const Size.fromHeight(90.0),
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      toolbarHeight: 90.0,
      backgroundColor: AppColors.bgTheme, // Static background color
      elevation: 0.0, // No elevation by default
      shadowColor: Colors.black.withOpacity(0.6), // Slight shadow effect
      title: Padding(
        padding: const EdgeInsets.symmetric(vertical: 12.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Row(
              children: [
                Container(
                  width: 55,
                  height: 55,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: Colors.white, // White border color
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.1), // Shadow color
                        blurRadius: 10,
                        offset: Offset(0, 3), // Shadow position
                      ),
                    ],
                  ),
                  child: Padding(
                    padding:
                        const EdgeInsets.all(4.0), // White border thickness
                    child: ClipOval(
                      child: Image.asset(
                        'assets/images/building1.jpg',
                        width: 47,
                        height: 47,
                        fit: BoxFit
                            .cover, // Ensures the image covers the ClipOval area
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 8),
                const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Jonathan White',
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                        color: AppColors.darkTeal,
                      ),
                    ),
                    Text(
                      'Society Name',
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.grey,
                      ),
                    ),
                  ],
                ),
              ],
            ),
            Row(
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 5.0),
                  child: Container(
                    width: 48.0,
                    height: 48.0,
                    decoration: BoxDecoration(
                      // color: Colors.grey[200],
                      shape: BoxShape.circle,
                    ),
                    child: IconButton(
                      icon: const Icon(
                        Icons.notifications_outlined,
                        size: 25.0,
                      ),
                      color: AppColors.turquoise,
                      onPressed: () {
                        // Add your search logic here
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => NotificationScreen(),
                          ),
                        );
                      },
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 5.0),
                  child: Container(
                    width: 48.0,
                    height: 48.0,
                    decoration: BoxDecoration(
                      color: Colors.grey[200],
                      shape: BoxShape.circle,
                    ),
                    child: IconButton(
                      icon: const Icon(
                        Icons.chat_bubble_outline,
                        size: 25.0,
                      ),
                      color: AppColors.turquoise,
                      onPressed: () {
                        // Add your chat logic here

                        // Add your more options logic here
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => Chat(),
                          ),
                        );
                      },
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final String title;
  final bool showBackButton;
  final List<Widget>? actions;

  const CustomAppBar({
    Key? key,
    required this.title,
    this.showBackButton = true,
    this.actions,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      leading: showBackButton
          ? IconButton(
              icon: const Icon(Icons.arrow_back),
              onPressed: () {
                Navigator.of(context).pop();
              },
            )
          : null,
      title: Text(title),
      actions: actions,
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
