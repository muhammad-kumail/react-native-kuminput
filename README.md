# react-native-kuminput
This package contain more stylish and more functionalities than TextInput from react native
## Installation
npm i react-native-vector-icons react-native-elements react-native-kuminput -f
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
                placeholder='Your Password'
                secureTextEntry={isSecureEntry}
                leftIconType='ionicon'
                leftIconName={'key'}
                leftIconColor={'#014e78'}
                rightIconType='material'
                rightIconName={isSecureEntry ? 'visibility-off' : 'visibility'}
                rightIconColor={'#014e78'}
                borderColorOnFocus={'#014e78'}
                onPressRightIcon={() => {
                    setIsSecureEntry(!isSecureEntry);
                }}
                onChangeText={(val) => console.log(val)}
                inputStyle={{fontSize: 16}}
                style={{ borderWidth: 1, borderRadius: 10,marginVertical: 10, }}
            />
        </View>
    );
}
```
## Note
After installing npm packages, configure the react-native-vector-icons first before running a code see here https://aboutreact.com/react-native-vector-icons/
## Props
placeholder: String

placeholderTextColor: String

value: String

defaultValue: String

secureTextEntry: Boolean

style: Object

keyboardType: String

maxLength: Number

inputStyle: Object

rightIconType: String

rightIconName: String

rightIconColor: String

rightIconSize: Number

onPressRightIcon: Function

leftIconType: String

leftIconName: String

leftIconColor: String

leftIconSize: Number

onPressLeftIcon: Function

borderColorOnFocus: String

borderColorOnBlur: String

onFocus: Function

onBlur: Function

onChangeText: Function

onEndEditing: Function

onSubmitEditing: Function