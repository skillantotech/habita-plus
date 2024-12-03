import 'package:flutter/material.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';

class Visitor extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(
        title: "Visitor",
      ),
      body: VisitorCard(),
    );
  }
}

class VisitorCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 45.0, horizontal: 12.0),
      child: Row(
        children: [
          // First Box
          Expanded(
            flex: 1,
            child: Stack(
              clipBehavior: Clip
                  .none, // Allow the circle to be positioned outside the stack bounds
              children: [
                Container(
                  height: 150, // Fixed height, but width will be dynamic
                  padding: EdgeInsets.all(15.0), // Add padding for the text
                  decoration: BoxDecoration(
                    color: Colors.grey[200],
                    borderRadius: BorderRadius.circular(15), // Rounded corners
                  ),
                  child: Align(
                    alignment: Alignment
                        .centerLeft, // Align text to the left, adjust as needed
                    child: Container(
                      margin: EdgeInsets.only(left: 14.0, top: 35.0),
                      child: Column(
                        children: [
                          Text(
                            "Alexa",
                            style: TextStyle(
                              fontSize: 19,
                              fontWeight: FontWeight.w200,
                              color: Colors.black,
                            ),
                            maxLines: 2, // Optional: limit the text to 2 lines
                            overflow: TextOverflow
                                .ellipsis, // Optional: add ellipsis if text overflows
                          ),
                          SizedBox(
                            height: 19.0,
                          ),
                          Text(
                            "Father",
                            style: TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.w200,
                              color: Colors.black,
                            ),
                            maxLines: 2, // Optional: limit the text to 2 lines
                            overflow: TextOverflow
                                .ellipsis, // Optional: add ellipsis if text overflows
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                Positioned(
                  top: -25.0,
                  left: 19.0,
                  child: Container(
                    height: 70,
                    width: 70,
                    decoration: BoxDecoration(
                      color: Color.fromARGB(255, 4, 20, 234),
                      shape: BoxShape.circle,
                    ),
                  ),
                ),
              ],
            ),
          ),

          SizedBox(width: 20), // Space between boxes
          // Second Box
          Expanded(
            flex: 1,
            child: Stack(
              clipBehavior: Clip
                  .none, // Allow the circle to be positioned outside the stack bounds
              children: [
                Container(
                  height: 150, // Fixed height, but width will be dynamic
                  padding: EdgeInsets.all(15.0), // Add padding for the text
                  decoration: BoxDecoration(
                    color: Colors.grey[200],
                    borderRadius: BorderRadius.circular(15), // Rounded corners
                  ),
                  child: Align(
                    alignment: Alignment
                        .centerLeft, // Align text to the left, adjust as needed
                    child: Container(
                      margin: EdgeInsets.only(left: 14.0, top: 35.0),
                      child: Column(
                        children: [
                          Text(
                            "David",
                            style: TextStyle(
                              fontSize: 19,
                              fontWeight: FontWeight.w300,
                              color: Colors.black,
                            ),
                            maxLines: 2, // Optional: limit the text to 2 lines
                            overflow: TextOverflow
                                .ellipsis, // Optional: add ellipsis if text overflows
                          ),
                          SizedBox(
                            height: 19.0,
                          ),
                          Text(
                            "Son",
                            style: TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.w200,
                              color: Colors.black,
                            ),
                            maxLines: 2, // Optional: limit the text to 2 lines
                            overflow: TextOverflow
                                .ellipsis, // Optional: add ellipsis if text overflows
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                Positioned(
                  top: -25.0,
                  left: 19.0,
                  child: Container(
                    height: 70,
                    width: 70,
                    decoration: BoxDecoration(
                      color: Color.fromARGB(255, 4, 20, 234),
                      shape: BoxShape.circle,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
