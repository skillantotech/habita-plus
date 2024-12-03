import 'package:flutter/material.dart';

class HorizontalScrollContainer extends StatelessWidget {
  final EdgeInsetsGeometry padding;
  final EdgeInsetsGeometry margin;
  final double itemSpacing;
  final int itemCount;
  final IndexedWidgetBuilder itemBuilder;

  const HorizontalScrollContainer({
    Key? key,
    this.padding = const EdgeInsets.all(0),
    this.margin = const EdgeInsets.all(0),
    this.itemSpacing = 8.0,
    required this.itemCount,
    required this.itemBuilder,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding,
      margin: margin,
      height: 180,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: itemCount,
        separatorBuilder: (context, index) => SizedBox(width: itemSpacing),
        itemBuilder: itemBuilder,
      ),
    );
  }
}
