import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{ paddingHorizontal: 25, padding: 5 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: "left", fontWeight: "700", fontSize: 20 }}>
          Log In        </Text>
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
          multiline
          //   numberOfLines={4}
       
          //   value={value}
          style={{
            padding: 8,
            width: 355,
            borderRadius: 4,
            marginVertical: 8,
            backgroundColor: "#EDEFF2",
          }}
        />
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
          multiline
          placeholder="Password"
          secureTextEntry
          passwordRules={{
            minLength: 8,
          }}
          //   numberOfLines={4}
          maxLength={40}
          //   value={value}
          style={{
            padding: 8,
            width: 355,
            borderRadius: 4,
            marginVertical: 8,
            backgroundColor: "#EDEFF2",
          }}
        />
      </View>
     
      <View>
        <TouchableOpacity
        onPress={()=>{alert("heloo")}}
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
      <Text style={{color:'#192838', fontSize:10, textAlign:"center",marginVertical:20}}>© 2024 EducationNest. Privacy Policy | Support</Text>
    </View>
  )
}

export default Login