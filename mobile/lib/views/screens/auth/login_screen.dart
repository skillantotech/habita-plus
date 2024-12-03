import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';
import 'package:habitatplus/views/Buttonnavigationbar/button_navigation_bar.dart';
import 'package:habitatplus/views/widgets/button/basic_app_button.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginpageState createState() => _LoginpageState();
}

class _LoginpageState extends State<LoginScreen> {
  bool _obscurePassword = true;

  void _togglePasswordVisibility() {
    setState(() {
      _obscurePassword = !_obscurePassword;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.only(top: 205.0),
        child: Column(
          children: [
            Container(
              width: 80,
              height: 80,
              child: Image.asset('assets/vectors/logo.png'),
            ),
            SizedBox(height: 20),
            Container(
              child: Center(
                child: Text(
                  "LOGIN PAGE",
                  style: TextStyle(
                    fontSize: 25.0,
                    fontWeight: FontWeight.w800,
                    color: AppColors.darkTeal,
                    letterSpacing: 1.0,
                    wordSpacing: 5.0,
                  ),
                ),
              ),
            ),
            SizedBox(height: 38),
            Container(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 17.0),
                child: TextField(
                  obscureText: false, // Email should not be obscured
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10.0)),
                    labelText: 'Email',
                    prefixIcon: Icon(Icons.email),
                    contentPadding: EdgeInsets.symmetric(vertical: 20.0),
                  ),
                ),
              ),
            ),
            SizedBox(height: 20),
            Container(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 17.0),
                child: TextField(
                  obscureText: _obscurePassword, // Manage password visibility
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10.0)),
                    labelText: 'Password',
                    prefixIcon: Icon(Icons.lock),
                    contentPadding: EdgeInsets.symmetric(vertical: 20.0),
                    suffixIcon: IconButton(
                      icon: Icon(
                        _obscurePassword
                            ? Icons.visibility_off
                            : Icons.visibility,
                      ),
                      onPressed: _togglePasswordVisibility,
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(height: 20),
            Container(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 19.0),
                child: BasicAppButton(
                  btnName: "Login",
                  width: double.infinity,
                  lfontsize: 19.0,
                  bgColor: AppColors.turquoise,
                  textStyle:
                      TextStyle(fontSize: 19), // Adjusted to match lfontsize
                  callback: () {
                    print('Login button');
                    // Navigation logic here
                    Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(
                          builder: (BuildContext context) => BottomNavBar(),
                        ));
                  },
                ),
              ),
            ),
            SizedBox(
              height: 15,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 19.0),
              child: Container(
                alignment: Alignment.centerLeft, // Align the text to the left
                child: Text(
                  "click here to forgot Password !",
                  style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.w800),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
