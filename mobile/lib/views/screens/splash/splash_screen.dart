import 'dart:async';
import 'package:flutter/material.dart';
import 'package:habitatplus/views/screens/intro/intro_screen_1.dart';
import 'package:habitatplus/views/screens/intro/introduction_screen.dart';

class SplashScreen extends StatefulWidget {
  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Timer(Duration(seconds: 3), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => OnboardingPage(),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: Container(
          width: 80, height: 80, child: Image.asset('assets/vectors/logo.png')),
    ));
  }
}
