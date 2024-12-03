import 'package:flutter/material.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';

class EmmergencyScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: const CustomAppBar(title: "Emmergency"),
      body: Text("Emmergency screen"),
    );
  }
}
