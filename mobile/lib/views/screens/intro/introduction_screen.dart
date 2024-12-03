import 'package:flutter/material.dart';
import 'package:habitatplus/views/screens/auth/login_screen.dart';
import 'package:introduction_screen/introduction_screen.dart';

// class IntroductionScreen extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     // TODO: implement build
//     return Scaffold(
//       body: Text("Introduction Page"),
//     );
//   }
// }

class OnboardingPage extends StatefulWidget {
  @override
  _OnboardingPageState createState() => _OnboardingPageState();
}

class _OnboardingPageState extends State<OnboardingPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IntroductionScreen(
        pages: [
          PageViewModel(
            title: "Welcome to Our App",
            body: "Discover the best features and get started quickly.",
            image: Center(
              child: Image.asset(
                "assets/vectors/introimg.jpg",
                width:
                    MediaQuery.of(context).size.width * 0.8, // Responsive width
                height: MediaQuery.of(context).size.height *
                    0.4, // Responsive height
                fit: BoxFit.cover, // Ensures the image covers the space well
              ),
            ),
            decoration: PageDecoration(
              imageFlex: 2,
              imagePadding: const EdgeInsets.only(bottom: 8.0),
              titleTextStyle: const TextStyle(
                fontSize: 28.0,
                fontWeight: FontWeight.bold,
              ),
              bodyTextStyle: const TextStyle(fontSize: 16.0),
            ),
          ),
          PageViewModel(
            title: "Stay Connected",
            body: "Keep in touch with friends and family with our app.",
            image: Center(
              child: Image.asset(
                "assets/vectors/introimg.jpg",
                width:
                    MediaQuery.of(context).size.width * 0.8, // Responsive width
                height: MediaQuery.of(context).size.height *
                    0.4, // Responsive height
                fit: BoxFit.cover,
              ),
            ),
            decoration: PageDecoration(
              imageFlex: 2,
              imagePadding: const EdgeInsets.only(bottom: 8.0),
              titleTextStyle: TextStyle(
                fontSize: 28.0,
                fontWeight: FontWeight.bold,
              ),
              bodyTextStyle: TextStyle(fontSize: 16.0),
            ),
          ),
          PageViewModel(
            title: "Get Started Now",
            body: "Sign up and explore all the features we have to offer.",
            image: Center(
              child: Image.asset(
                "assets/vectors/introimg.jpg",
                width:
                    MediaQuery.of(context).size.width * 0.8, // Responsive width
                height: MediaQuery.of(context).size.height *
                    0.4, // Responsive height
                fit: BoxFit.cover,
              ),
            ),
            decoration: PageDecoration(
              imageFlex: 2,
              imagePadding: const EdgeInsets.only(bottom: 8.0),
              titleTextStyle: TextStyle(
                fontSize: 28.0,
                fontWeight: FontWeight.bold,
              ),
              bodyTextStyle: TextStyle(fontSize: 16.0),
            ),
          ),
        ],
        onDone: () {
          // When done button is pressed, navigate to another screen
          Navigator.of(context).pushReplacement(
            MaterialPageRoute(builder: (_) => LoginScreen()),
          );
        },
        onSkip: () {
          // You can skip the intro and go straight to another screen
          Navigator.of(context).pushReplacement(
            MaterialPageRoute(builder: (_) => LoginScreen()),
          );
        },
        showSkipButton: true,
        skip: const Text("Skip"),
        next: const Icon(Icons.arrow_forward),
        done: const Text("Done", style: TextStyle(fontWeight: FontWeight.w600)),
        dotsDecorator: DotsDecorator(
          size: const Size.square(10.0),
          activeSize: const Size(22.0, 10.0),
          activeShape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(25.0),
          ),
        ),
      ),
    );
  }
}
