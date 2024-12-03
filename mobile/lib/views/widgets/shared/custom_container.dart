import 'package:flutter/material.dart';

class CustomContainer extends StatelessWidget {
  final Widget child;
  final double paddingX;
  final EdgeInsetsGeometry margin;
  final Color? color;
  final double? width;
  final double? height;
  final BoxDecoration? decoration;
  final BorderRadiusGeometry? borderRadius;

  CustomContainer({
    required this.child,
    this.paddingX = 5.0,
    this.margin = EdgeInsets.zero,
    this.color,
    this.width,
    this.height,
    this.decoration,
    this.borderRadius,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: paddingX),
      margin: margin,
      width: width,
      height: height,
      decoration: decoration ??
          BoxDecoration(
            color: color ?? Theme.of(context).cardColor,
            borderRadius: borderRadius ?? BorderRadius.circular(8.0),
          ),
      child: child,
    );
  }
}
