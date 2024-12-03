import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';

class UserInfo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: const Color.fromARGB(255, 239, 248, 255),
        borderRadius: BorderRadius.circular(15.0), // Add border radius
        border: Border.all(
          color:
              Color.fromARGB(255, 255, 255, 255), // Set the border color here
          width: 1.5, // Optional: Set the border width
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black12,
            blurRadius: 5.0,
            offset: Offset(0, 2),
          ),
        ],
      ),
      padding: const EdgeInsets.all(15.0),
      child: Column(
        children: [
          // User profile photo and name
          const Row(
            children: [
              CircleAvatar(
                radius: 40.0,
                backgroundImage: NetworkImage(
                    'https://via.placeholder.com/150'), // Replace with user's profile image URL
              ),
              SizedBox(width: 10.0), // Space between image and text
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Chinmaya Behera",
                    style:
                        TextStyle(fontSize: 19.0, fontWeight: FontWeight.bold),
                  ),
                  Text(
                    "A-123",
                    style: TextStyle(
                        fontSize: 17.0, fontWeight: FontWeight.normal),
                  ),
                ],
              ),
            ],
          ),
          SizedBox(height: 20.0), // Space between rows

          // Row for tenants and vehicles information
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              // Number of tenants
              Expanded(
                child: Container(
                  padding: EdgeInsets.all(10.0),
                  decoration: BoxDecoration(
                    color: AppColors.bgTheme,
                    borderRadius: BorderRadius.circular(8.0),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black12,
                        blurRadius: 5.0,
                        offset: Offset(0, 2),
                      ),
                    ],
                  ),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.person, color: Colors.blue),
                      SizedBox(width: 5.0),
                      Text(
                        "Tenants: 5",
                        style: TextStyle(
                            fontSize: 15.0, fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ),
              ),
              SizedBox(width: 10.0), // Space between the two boxes
              // Number of vehicles
              Expanded(
                child: Container(
                  padding: EdgeInsets.all(8.0),
                  decoration: BoxDecoration(
                    color: AppColors.bgTheme,
                    borderRadius: BorderRadius.circular(8.0),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black12,
                        blurRadius: 5.0,
                        offset: Offset(0, 2),
                      ),
                    ],
                  ),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.directions_car, color: Colors.blue),
                      SizedBox(width: 5.0),
                      Text(
                        "Vehicles: 5",
                        style: TextStyle(
                            fontSize: 15.0, fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class InfoTenant extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(15.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Expanded(
            flex: 1,
            child: Container(
              decoration: BoxDecoration(
                color: Colors.white, // Set the background color to white
                borderRadius: BorderRadius.circular(8.0), // Add rounded corners
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.3), // Subtle shadow
                    spreadRadius: 1,
                    blurRadius: 3,
                    offset: Offset(0, 1),
                  ),
                ],
              ),
              child: const Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 28.0, horizontal: 8.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.person, // Replace with the desired icon
                      size: 27.0, // Set icon size
                      color: AppColors.turquoise, // Set icon color
                    ),
                    const SizedBox(
                        width: 8.0), // Add space between icon and text
                    const Expanded(
                      child: Text(
                        "No. of Members",
                        style: TextStyle(fontSize: 16.0),
                        textAlign: TextAlign.left,
                        softWrap:
                            true, // Allow text to wrap within the available space
                        // overflow: TextOverflow
                        //     .ellipsis, // Truncate text if it overflows
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          const SizedBox(
            width: 15.0,
          ),
          Expanded(
            flex: 1,
            child: Container(
              decoration: BoxDecoration(
                color: Colors.white, // Set the background color to white
                borderRadius: BorderRadius.circular(8.0), // Add rounded corners
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.3), // Subtle shadow
                    spreadRadius: 1,
                    blurRadius: 3,
                    offset: Offset(0, 1),
                  ),
                ],
              ),
              child: const Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 28.0, horizontal: 8.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.directions_car, // Replace with the desired icon
                      size: 27.0, // Set icon size
                      color: AppColors.turquoise, // Set icon color
                    ),
                    SizedBox(width: 8.0), // Add space between icon and text
                    Expanded(
                      child: Text(
                        "No. of Vehicles",
                        style: TextStyle(fontSize: 16.0),
                        textAlign: TextAlign.left,
                        softWrap:
                            true, // Allow text to wrap within the available space
                        // overflow: TextOverflow
                        //     .ellipsis, // Truncate text if it overflows
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
