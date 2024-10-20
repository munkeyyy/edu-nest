import { Stack } from "expo-router"

const AuthenticatedPageLayout=()=>{
    return(
        <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen  name='exam/[id]' />
        <Stack.Screen  name='result/[id]' />
       
    </Stack>
    )
}

export default AuthenticatedPageLayout