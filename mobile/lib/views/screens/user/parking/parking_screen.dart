import 'package:flutter/material.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';

class ParkingScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Parking',
      ),
      body: Text("Parking screen"),
    );
  }
}
