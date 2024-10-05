import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
// import { ListItem } from '@rneui/themed';
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";

const data = ["Admin", "Examiner", "Student"];
const Signup = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title,i) => <SelectItem key={i} title={title} />;
  return (
    <View style={{ paddingHorizontal: 25, padding: 5 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: "left", fontWeight: "700", fontSize: 20 }}>
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
            onSelect={(index) => setSelectedIndex(index)}
            style={{ backgroundColor: "#EDEFF2", borderWidth:0 }}
          >
            {data.map(renderOption)}
          </Select>
        </Layout>
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
  );
};

export default Signup;
