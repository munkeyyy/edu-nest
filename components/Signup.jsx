import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";
import { Link, useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
// Data for the roles
const roleData = ["Admin", "Examiner", "Student"];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Yup Schema for validation
const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .matches(emailRegex, "Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  role: Yup.string().required("Please select a role"),
});

const Signup = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const displayValue = roleData[selectedIndex.row];

  const renderOption = (title, i) => <SelectItem key={i} title={title} />;

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        role: roleData[0],
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log("submitting")
        axios
          .post("http://10.0.2.2:8000/users/sign-up", {
            fullname: values.fullName,
            email: values.email,
            password: values.password,
            role: values.role,
          })
          .then((res) => {
            console.log("hitting")
            console.log(res);
            router.push("/login");
            ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
          })
          .catch((err) => {
            // Check if err.response exists, otherwise log a generic error message
            // alert(err?.response?.data?.message);
            console.log("err:",JSON.stringify(err));
            // ToastAndroid.show(err, ToastAndroid.SHORT);

            // if (err.response && err.response.data) {
            //   alert(err.response.data);
            // } else {
            //   alert('An error occurred. Please try again.');
            // }
          });
        // console.log(values);
        // alert(JSON.stringify(values, null, 2));
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View style={{ paddingHorizontal: 25, padding: 5 }}>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{ textAlign: "left", fontWeight: "700", fontSize: 20 }}
            >
              Sign Up
            </Text>
            <Text
              style={{
                textAlign: "left",
                fontWeight: "600",
                color: "black",
                marginVertical: 5,
                fontSize: 12,
              }}
            >
              Create your account to get started.
            </Text>
          </View>

          {/* Full Name Field */}
          <View>
            <Text
              style={{
                textAlign: "left",
                fontWeight: "600",
                color: "black",
                marginVertical: 5,
                fontSize: 14,
              }}
            >
              Full Name
            </Text>
            <TextInput
              editable
              multiline
              placeholder="Full name"
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              value={values.fullName}
              style={{
                padding: 8,
                width: 355,
                borderRadius: 4,
                marginVertical: 8,
                backgroundColor: "#dee2e7",
              }}
            />
            {errors.fullName && touched.fullName && (
              <Text style={{ color: "red" }}>{errors.fullName}</Text>
            )}
          </View>

          {/* Email Address Field */}
          <View>
            <Text
              style={{
                textAlign: "left",
                fontWeight: "600",
                color: "black",
                marginVertical: 5,
                fontSize: 14,
              }}
            >
              Email Address
            </Text>
            <TextInput
              editable
              placeholder="something@gmail.com"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={{
                padding: 8,
                width: 355,
                borderRadius: 4,
                marginVertical: 8,
                backgroundColor: "#dee2e7",
              }}
            />
            {errors.email && touched.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
          </View>

          {/* Password Field */}
          <View>
            <Text
              style={{
                textAlign: "left",
                fontWeight: "600",
                color: "black",
                marginVertical: 5,
                fontSize: 14,
              }}
            >
              Password
            </Text>
            <View
              style={{
                paddingHorizontal: 8,
                paddingVertical: 8,
                width: 355,
                borderRadius: 4,
                marginVertical: 8,
                flexDirection: "row", // Set flexDirection to row to align items in a row
                alignItems: "center", // Center the items vertically
                justifyContent: "space-between",
                backgroundColor: "#dee2e7",
              }}
            >
              <TextInput
                editable
                placeholder="Password"
                secureTextEntry={!isVisible} // Set based on visibility state
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={{
                  flex: 1, // This makes the TextInput take up remaining space
                  marginRight: 10, // Add some space between input and icon
                }}
              />
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <Ionicons
                  name={isVisible ? "eye-off" : "eye"} // Toggle between icons
                  size={24}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
            {errors.password && touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
          </View>

          {/* Role Select Field */}
          <View>
            <Text
              style={{
                textAlign: "left",
                fontWeight: "600",
                color: "black",
                marginVertical: 5,
                fontSize: 14,
              }}
            >
              Role
            </Text>
            <Layout level="1">
              <Select
                selectedIndex={selectedIndex}
                value={displayValue}
                onSelect={(index) => {
                  setSelectedIndex(index);
                  setFieldValue("role", roleData[index.row]);
                }}
                style={{ backgroundColor: "#dee2e7", borderWidth: 0 }}
              >
                {roleData.map(renderOption)}
              </Select>
            </Layout>
            {errors.role && touched.role && (
              <Text style={{ color: "red" }}>{errors.role}</Text>
            )}
          </View>

          {/* Submit Button */}
          <View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                marginTop: 30,
                marginHorizontal: 2,
                padding: 10,
                backgroundColor: "#3071FF",
                borderRadius: 4,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontWeight: 500 }}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          {/* Link to Login */}
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ marginVertical: 20 }}>
              Already have an account?&nbsp;
              <Link href="login" style={{ color: "blue", marginTop: 20 }}>
                Log In
              </Link>
            </Text>
          </View>

          {/* Footer */}
          <Text
            style={{
              color: "#192838",
              fontSize: 10,
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            © 2024 EducationNest. Privacy Policy | Support
          </Text>
        </View>
      )}
    </Formik>
  );
};

export default Signup;
