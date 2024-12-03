import 'package:flutter/material.dart';

class HorizontalLine extends StatelessWidget {
  final double thickness;
  final Color color;
  final double margin;

  const HorizontalLine({
    Key? key,
    this.thickness = 1.0,
    this.color = Colors.grey,
    this.margin = 0.0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: margin),
      width: double.infinity,
      height: thickness,
      color: color,
    );
  }
}
