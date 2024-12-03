import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';

class ScreenContainer extends StatelessWidget {
  final Color color;
  final EdgeInsetsGeometry padding;
  final EdgeInsetsGeometry margin;
  final double height;
  final bool scrollable;
  final Widget child;

  const ScreenContainer({
    Key? key,
    this.color = AppColors.bgTheme,
    this.padding = const EdgeInsets.all(10),
    this.margin = const EdgeInsets.all(0),
    this.height = double.infinity,
    this.scrollable = false,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        color: color,
        padding: padding,
        margin: margin,
        height: height,
        width: double.infinity,
        child: SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: child,
        ));
  }
}
