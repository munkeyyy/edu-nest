import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";

const ScheduledExamPortal = () => {
  const [searchTerm, setSearchTerm] = useState('')
    const scheduledExams = [
        { id: 1, title: 'Mathematics', subject: 'Algebra', date: '2024-03-15', time: '10:00 AM', duration: '2 hours', questions: 50, status: 'upcoming' },
        { id: 2, title: 'Science', subject: 'Biology', date: '2024-03-18', time: '2:00 PM', duration: '1.5 hours', questions: 40, status: 'upcoming' },
        { id: 3, title: 'English', subject: 'Literature', date: '2024-03-20', time: '11:00 AM', duration: '1 hour', questions: 30, status: 'upcoming' },
        { id: 4, title: 'History', subject: 'World War II', date: '2024-03-22', time: '3:00 PM', duration: '1.5 hours', questions: 45, status: 'upcoming' },
        { id: 5, title: 'Chemistry', subject: 'Organic Chemistry', date: '2024-03-14', time: '9:00 AM', duration: '2 hours', questions: 55, status: 'completed' },
      ]
      const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }
      const filteredExams = scheduledExams.filter(exam =>
        exam.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    
      const getStatusColor = (status) => {
        switch (status) {
          case 'upcoming':
            return '#3071FF'
          case 'completed':
            return '#4BB543'
          default:
            return 'grey'
        }
      }      
  return (
    <ScrollView style={{ paddingTop:10 , paddingHorizontal:15, }}>
      {/* <SearchBar/> */}
      <View
        style={{
      paddingHorizontal:4,
          backgroundColor: "#fff",
          display:"flex",
          flexDirection:"row",
          alignItems:"center",
          gap:4,
          borderRadius:50,
        }}
      >
        <Ionicons name="search-outline" size={20} color="#7f8c8d"  style={{paddingLeft:20,}}/>
        <TextInput
          style={{
            padding:8,
            width: 250,
            borderRadius: 4,
            marginVertical: 8,
            color: "black",
            flexGrow:1,
          }}
          placeholder="Search exams or subjects..."
            value={searchTerm}
            onChangeText={setSearchTerm}
        />
      </View>
      <View style={{marginVertical:50, display:"flex", flexDirection:"column", gap:20, marginBottom:50}}>
          <>
          {
            filteredExams.map((exam, i)=>(
                <Card key={i} title={exam.title} topic={exam.subject} status={exam.status} statusColor={getStatusColor} formatDate={formatDate} duration={exam.duration} date={exam.date} questions={exam.questions} id={exam.id}/>
            ))
          }
          </>
      </View>
    </ScrollView>
  );
};

export default ScheduledExamPortal;



const Card = ({title, topic, status, date, duration, questions, statusColor, formatDate, id})=>{
  const router = useRouter()

    const bg=statusColor(status)
    const dt=formatDate(date)
    const getButton = (status) => {
      switch (status) {
        case 'upcoming':
          return  <TouchableOpacity onPress={()=>router.push(`exam/${id}`)} style={{paddingHorizontal:10, paddingVertical:8, backgroundColor:"#3071FF", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:10, marginVertical:10}}>
          <Text style={{color:"white", fontSize:18, fontWeight:"600"}}>Start Exam</Text>
         </TouchableOpacity>
        case 'completed':
          return  <TouchableOpacity onPress={()=>{
            
            router.push(`result/${id}`)}} style={{paddingHorizontal:10, paddingVertical:8, backgroundColor:"#4BB543", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:10, marginVertical:10}}>
          <Text style={{color:"white", fontSize:18, fontWeight:"600"}}>View Results</Text>
         </TouchableOpacity>
        default:
          return  <TouchableOpacity style={{paddingHorizontal:10, paddingVertical:8, backgroundColor:"black", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:10, marginVertical:10}}>
          <Text style={{color:"white", fontSize:18, fontWeight:"600"}}>Start Exam</Text>
         </TouchableOpacity>
      }
    }     
    return(
        <View style={{backgroundColor: '#fff',
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,}}>
                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                    <Text style={{fontSize:20, fontWeight:800}}>{title}</Text>
                    <View style={{paddingHorizontal:10, paddingVertical:4, borderRadius:50, backgroundColor:bg, display:"flex",alignItems:"center",justifyContent:"center"}}>

                    <Text style={{color:"white", textAlign:"center", textTransform:"capitalize"}}>{status}</Text>
                    </View>
                </View>
                <View>

                <View style={{marginBottom:6}}>
                  <Text style={{fontSize:16, color:"#666"}}>{topic}</Text>
                </View>
                <View style={{marginBottom:6}}>
                  <Text style={{fontSize:16, color:"#666"}}>Date: {dt}</Text>
                </View>
                <View style={{marginBottom:6}}>
                  <Text style={{fontSize:16, color:"#666"}}>Duration: {duration}</Text>
                </View>
                <View style={{marginBottom:6}}>
                  <Text style={{fontSize:16, color:"#666"}}>Questions: {questions}</Text>
                </View>
                </View>
               {
                getButton(status)
               }

        </View>
    )
}
