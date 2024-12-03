import 'package:flutter/material.dart';

class SectionHeading extends StatelessWidget {
  final String title;
  final TextStyle? textStyle;
  final EdgeInsetsGeometry? padding;
  final Color? color;
  final double? fontSize;

  const SectionHeading({
    Key? key,
    required this.title,
    this.textStyle,
    this.padding,
    this.color = Colors.black, // Default color is gray
    this.fontSize = 20.0, // Default font size
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding ?? const EdgeInsets.all(0.0),
      child: Text(
        title,
        style: textStyle ??
            TextStyle(
              color: color,
              fontSize: fontSize,
            ),
      ),
    );
  }
}
