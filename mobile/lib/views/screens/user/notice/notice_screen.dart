import 'package:flutter/material.dart';
import 'package:habitatplus/views/appbar/app_bar.dart';

class NoticeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: const CustomAppBar(title: "Notice"),
      body: Text("Notice Screen"),
    );
  }
}
