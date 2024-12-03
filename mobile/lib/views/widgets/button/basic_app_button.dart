import 'package:flutter/material.dart';

class BasicAppButton extends StatelessWidget {
  final String btnName;
  final double? width;
  final double? lfontsize;
  final Icon? icon;
  final Color? bgColor;
  final TextStyle? textStyle;
  final VoidCallback? callback;

  const BasicAppButton({
    super.key,
    required this.btnName,
    required this.width,
    this.lfontsize,
    this.icon,
    this.bgColor,
    this.textStyle,
    this.callback,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () => {callback!()},
      child: Container(
        decoration: BoxDecoration(
            color: bgColor, borderRadius: BorderRadius.circular(10.0)),
        width: width,
        // height: 54,
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(12.0),
            child: Text(
              btnName,
              style: TextStyle(
                fontSize: lfontsize, // Set the font size here
                color: Colors.white,
                // Optional: Set text color if needed
              ),
            ),
          ),
        ),
      ),
    );
  }
}
