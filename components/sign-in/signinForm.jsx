import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'

const SignInForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  return (
    <View>
      <View>
        <TextInput placeholder='Email' inputMode="email" className="border-2 w-64 h-12 rounded-2xl px-5 mb-10 mt-24" onChangeText={(text) => setEmail(text)}/>
        <TextInput placeholder='Password' secureTextEntry={true} className="border-2 w-64 h-12 rounded-2xl px-5"onChangeText={(text) => setPassword(text)}/>
      </View>
      <View>
        <Text className="text-right m-4 text-base">Forget password?</Text>
      </View>
      <View>
        <TouchableOpacity className="w-64 h-12 rounded-2xl px-5 mt-6 bg-primery justify-center items-center" onPress={() => {
          console.log(email + "---" + password)
        }}>
          <Text className="text-white text-base">Sing in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInForm