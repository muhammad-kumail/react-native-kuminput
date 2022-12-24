# react-native-kuminput
This package contain more stylish and more functionalities than TextInput from react native
## Installation
Native Cli: npm i react-native-vector-icons react-native-elements react-native-animatable react-native-kuminput -f

Expo: npm i react-native-elements react-native-animatable react-native-kuminput
## Demo
![Here is the demo](https://user-images.githubusercontent.com/56933027/208092557-e8222d5e-be1c-4ac2-9418-a1f4851a540e.gif)

## Sample Code
```
import React, { useState } from 'react';
import {KumInput} from 'react-native-kuminput';
import {
    View,
    Text
} from 'react-native';
export default function App(){
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return (
        <View>
            <KumInput
                label={{
                    name: 'Password',
                    style:{color: 'black', fontSize: 16,marginHorizontal: 10}
                }}
                placeholder='Your Password'
                secureTextEntry={isSecureEntry}
                leftIcon={{
                    name:'key',
                    type: 'ionicon',
                    color: '#014e78',
                    onPress:()=>console.log("left icon pressed!")
                }}
                rightIcon={{
                    name:{isSecureEntry ? 'visibility-off' : 'visibility'},
                    type: 'material',
                    color: '#014e78',
                    onPress:()=>setIsSecureEntry(!isSecureEntry)
                }}
                error={{
                    condition: true,
                    message: 'Password must be 8 characters long',
                    animation:'bounceIn',
                    style:{fontSize: 16,marginHorizontal: 10}
                }}
                borderColorOnFocus={'#014e78'}
                onChangeText={(val) => console.log(val)}
                inputStyle={{fontSize: 16}}
                style={{borderWidth: 1, borderRadius: 10,paddingVertical: 2, margin: 5, marginHorizontal: 10 }}
            />
        </View>
    );
}
```
## Note
After installing npm packages, configure the react-native-vector-icons first before running a code see here https://aboutreact.com/react-native-vector-icons/.
If you are using Expo, no need to install or configure react-native-vector-icons
## Properties
|Props|Type|Default|Description|
|---|---|---|---|
|label|Object|{name: null, style: {}}|
|placeholder|String|empty string|
|placeholderTextColor|String|gray|
|value|String|empty string|
|defaultValue|String|empty string|
|secureTextEntry|Boolean|false|
|style|Object|{}|
|keyboardType|String|default|
|maxLength|Number|no limit|
|multiline|Boolean|false|
|inputStyle|Object|{}|
|rightIcon|Object|{name: null, type: null, color: null, size: 25, onPress:()=>{}}|
|leftIcon|Object|{name: null, type: null, color: null, size: 25, onPress:()=>{}}|
|error|Object|{condition: false, message:null,animation:null,style: {}}|animation props: bounce, flash, jello, pulse, rotate, rubberBand, bounceIn and much more you can check at https://www.npmjs.com/package/react-native-animatable|
|borderColorOnFocus|String|black|
|borderColorOnBlur|String|black|
|onFocus|Function|()=>{}|
|onBlur|Function|()=>{}|
|onChangeText|Function|()=>{}|
|onEndEditing|Function|()=>{}|
|onSubmitEditing|Function|()=>{}|