import 'package:flutter/material.dart';
import 'package:habitatplus/core/theme/app_colors.dart';

class TenantDetails extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(8.0), // Optional padding around the container
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          // Simple TextField
          Text(
            "Mobile",
            style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.w600),
          ),
          SizedBox(height: 15.0),
          TextField(
            keyboardType: TextInputType.phone, // Numeric keyboard
            maxLength: 10, // Maximum length for mobile number
            decoration: InputDecoration(
              hintText: 'Enter your mobile number',
              counterText: '', // Removes the character counter below the field
              border: OutlineInputBorder(
                borderRadius:
                    BorderRadius.circular(5.0), // Optional rounded corners
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(5.0),
                borderSide: BorderSide(
                  color: AppColors.turquoise, // Turquoise border color on focus
                  width: 2.0, // Border width on focus
                ),
              ),
            ),
          ),
          SizedBox(
            height: 15.0,
          ),
          Text(
            "Email",
            style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.w600),
          ),
          SizedBox(height: 15.0),
          TextField(
            decoration: InputDecoration(
              hintText: 'Enter a search term',
              border: OutlineInputBorder(
                borderRadius:
                    BorderRadius.circular(5.0), // Optional rounded corners
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(5.0),
                borderSide: BorderSide(
                  color: AppColors.turquoise, // Turquoise border color on focus
                  width: 2.0, // Border width on focus
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
