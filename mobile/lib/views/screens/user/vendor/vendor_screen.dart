import 'package:flutter/material.dart';
import 'package:habitatplus/views/Appbar/app_bar.dart';

class VendorScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: const CustomAppBar(
        title: 'Vendorscreen',
      ),
      body: Text("Vendorscreen screen"),
    );
  }
}
