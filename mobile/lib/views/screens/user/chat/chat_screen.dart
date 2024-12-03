import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';

class Chat extends StatelessWidget {
  final List<ChatModel> chatData = [
    ChatModel(
      name: "John Doe",
      message: "Hey, how are you?",
      time: "12:30 PM",
      unreadMessages: 2,
      avatarUrl: "assets/images/building1.jpg",
    ),
    ChatModel(
      name: "Jane Smith",
      message: "Let's catch up later!",
      time: "11:15 AM",
      unreadMessages: 0,
      avatarUrl: "assets/images/building3.jpg",
    ),
    // Add more chat items here...
    ChatModel(
      name: "Thomas Edison",
      message: "Let's catch up later!",
      time: "11:15 AM",
      unreadMessages: 0,
      avatarUrl: "assets/images/building3.jpg",
    ),
    ChatModel(
      name: "Elon ward",
      message: "Let's catch up later!",
      time: "11:15 AM",
      unreadMessages: 4,
      avatarUrl: "assets/images/building3.jpg",
    ),
    ChatModel(
      name: "edwin partison",
      message: "Let's catch up later!",
      time: "11:15 AM",
      unreadMessages: 0,
      avatarUrl: "assets/images/building3.jpg",
    ),
    ChatModel(
      name: "Steve Smith",
      message: "Let's catch up later!",
      time: "11:15 AM",
      unreadMessages: 3,
      avatarUrl: "assets/images/building3.jpg",
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 39.0),
        child: Column(
          children: <Widget>[
            Text(
              "Chats",
              style: TextStyle(
                fontSize: 26.0,
                fontWeight: FontWeight.bold,
                fontFamily: 'Roboto',
                letterSpacing: 1.5,
                color: AppColors.turquoise,
              ),
            ),
            SizedBox(height: 20.0),
            Container(
              decoration: BoxDecoration(
                color: Colors.grey[200],
                borderRadius: BorderRadius.circular(20.0),
              ),
              child: TextField(
                decoration: InputDecoration(
                  hintText: "Search",
                  hintStyle: TextStyle(
                    color: Colors.grey[600],
                  ),
                  prefixIcon: Icon(
                    Icons.search,
                    color: Colors.grey[600],
                  ),
                  border: InputBorder.none,
                  contentPadding: EdgeInsets.symmetric(vertical: 10.0),
                ),
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 16.0,
                ),
              ),
            ),
            SizedBox(height: 20.0),
            Expanded(
              child: ListView.builder(
                itemCount: chatData.length,
                itemBuilder: (context, index) {
                  final chat = chatData[index];
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 10.0),
                    child: ListTile(
                      leading: CircleAvatar(
                        radius: 28.0,
                        backgroundImage: NetworkImage(chat.avatarUrl),
                      ),
                      title: Text(
                        chat.name,
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18.0,
                        ),
                      ),
                      subtitle: Text(
                        chat.message,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                      trailing: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Text(
                            chat.time,
                            style: TextStyle(
                              color: Colors.grey[600],
                              fontSize: 12.0,
                            ),
                          ),
                          if (chat.unreadMessages > 0)
                            Container(
                              margin: const EdgeInsets.only(top: 4.0),
                              padding: const EdgeInsets.symmetric(
                                  horizontal: 6.0, vertical: 2.0),
                              decoration: BoxDecoration(
                                color: Colors.green,
                                borderRadius: BorderRadius.circular(12.0),
                              ),
                              child: Text(
                                chat.unreadMessages.toString(),
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ),
                        ],
                      ),
                      onTap: () {
                        // Handle chat item tap
                        print(index);
                      },
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ChatModel {
  final String name;
  final String message;
  final String time;
  final int unreadMessages;
  final String avatarUrl;

  ChatModel({
    required this.name,
    required this.message,
    required this.time,
    required this.unreadMessages,
    required this.avatarUrl,
  });
}
