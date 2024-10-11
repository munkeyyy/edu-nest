import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import * as Yup from "yup"; 
import { Link, useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
  .matches(emailRegex, "Invalid email format")
  .required("Email is required"),
  password: Yup.string().min(8, "Password too short").required("Password is required"),
});

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const onLogin = async (values) => {
    // Simulating token storage and login action
    alert(values)
    await AsyncStorage.setItem("token", "test-token");
    login();  // Trigger context login
    router.replace("/home");
  };

  return (
    <View style={{ paddingHorizontal: 25, padding: 5 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: "left", fontWeight: "700", fontSize: 20 }}>
          Log In
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
          Log in to your account.
        </Text>
      </View>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          onLogin(values);
        }}
        validationSchema={LoginSchema} 
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
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
              {touched.email && errors.email && (
                <Text style={{ color: "#e31c33", fontSize: 12 }}>{errors.email}</Text>
              )}
            </View>
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
              <TextInput
                editable
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={{
                  padding: 8,
                  width: 355,
                  borderRadius: 4,
                  marginVertical: 8,
                  backgroundColor: "#dee2e7",
                }}
              />
                {touched.password && errors.password && (
                <Text style={{ color: "#e31c33", fontSize: 12 }}>{errors.password}</Text>
              )}
            </View>

            <View>
              <TouchableOpacity
                onPress={handleSubmit} // use handleSubmit from Formik
                style={{
                  marginTop: 30,
                  marginHorizontal: 2,
                  padding: 10,
                  backgroundColor: "#3071FF",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontWeight: "500" }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>

      <View style={{ display: "flex", alignItems: "center" }}>
        <Text style={{ marginVertical: 20 }}>
          Don't have an account?&nbsp;
          <Link href="/signup" style={{ color: "blue" }}>
            Sign up
          </Link>
        </Text>
      </View>
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
  );
};

export default Login;
