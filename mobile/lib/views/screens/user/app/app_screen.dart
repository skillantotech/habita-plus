import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';

class AppScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: const CustomAppBar(
        title: 'App',
      ),
      body: Text("App screen "),
    );
  }
}
