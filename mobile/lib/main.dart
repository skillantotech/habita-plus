import 'package:flutter/material.dart';
import 'package:habitatplus/views/Buttonnavigationbar/button_navigation_bar.dart';
import 'package:habitatplus/views/screens/splash/splash_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      // home: SplashScreen(),
      home: BottomNavBar(),
    );
  }
}
