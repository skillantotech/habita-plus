import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'package:habitatplus/views/screens/intro/intro_screen_2.dart';
import 'package:habitatplus/views/widgets/button/basic_app_button.dart';

class IntroScreenOne extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          // Background Image
          Container(
            width: double.infinity,
            height: 700, // Fixed height for the image
            child: Image.asset(
              'assets/images/building1.jpg',
              fit: BoxFit.cover,
              width: double.infinity,
              height: double.infinity,
            ),
          ),
          // Black Background with Text
          Expanded(
            child: Container(
              width: double.infinity,
              color: Colors.black.withOpacity(0.8), // Black background
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'Discover more about our building and services',
                        style: TextStyle(
                          color: Colors.white, // Text color on black background
                          fontSize: 18, // Text size
                          fontWeight: FontWeight.normal, // Text weight
                        ),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(
                          height: 20), // Space between text and button
                      BasicAppButton(
                        btnName: 'Next',
                        width: double.infinity,
                        lfontsize: 23.0,
                        bgColor: AppColors.turquoise,
                        textStyle: const TextStyle(fontSize: 18),
                        callback: () {
                          Navigator.pushReplacement(
                            context,
                            MaterialPageRoute(
                              builder: (BuildContext context) =>
                                  IntroScreenTwo(),
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
