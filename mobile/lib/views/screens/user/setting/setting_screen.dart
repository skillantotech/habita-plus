import 'package:flutter/material.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';

class SettingScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Settingscreen',
      ),
      body: Text("Settingscreen screen"),
    );
  }
}
