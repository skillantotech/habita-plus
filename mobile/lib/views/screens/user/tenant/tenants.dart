import 'package:flutter/material.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';
import 'package:habitatplus/views/screens/user/visitor/visitor.dart';

class Tenants extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: const CustomAppBar(
        title: "Tenant",
      ),
      body: VisitorCard(),
    );
  }
}
