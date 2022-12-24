import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { Icon } from 'react-native-elements';

export default function KumInput({ placeholder,label ,error,editable,multiline,secureTextEntry, keyboardType, maxLength, inputStyle, style,rightIcon, leftIcon, borderColorOnFocus, borderColorOnBlur, onFocus, onBlur, onChangeText, onEndEditing, placeholderTextColor, value, defaultValue, onSubmitEditing }) {
    const [bColor, setBColor] = useState(borderColorOnBlur != null ? borderColorOnBlur : 'black')
    return (
        <View>
            {
                label?.name == null||label == null?null:
                <Text style={[label?.style]}>{label?.name}</Text>
            }
            <View style={[{ borderColor: bColor, flexDirection: 'row' }, style]}>
                {
                    leftIcon?.name == null || leftIcon == null? null :
                        <View style={[styles.setCenter, { flex: 1, paddingHorizontal: 5 }]}>
                            <Icon
                                type={leftIcon?.type}
                                name={leftIcon?.name}
                                color={leftIcon?.color}
                                size={leftIcon?.size != null ? leftIcon?.size : 25}
                                onPress={leftIcon?.onPress}
                            />
                        </View>
                }
                <View style={{ flex: 9 }}>
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        secureTextEntry={secureTextEntry}
                        style={[{ fontSize: 16 }, inputStyle]}
                        value={value}
                        editable={editable}
                        defaultValue={defaultValue}
                        onChangeText={onChangeText}
                        onEndEditing={onEndEditing}
                        onSubmitEditing={onSubmitEditing}
                        keyboardType={keyboardType}
                        maxLength={maxLength}
                        multiline={multiline}
                        onFocus={() => { setBColor(borderColorOnFocus != null ? borderColorOnFocus : 'black'); onFocus }}
                        onBlur={() => { setBColor(borderColorOnBlur != null ? borderColorOnBlur : 'black'); onBlur }}
                    />
                </View>
                {
                    rightIcon?.name ==null || rightIcon == null ? null :
                        <View style={[styles.setCenter, { flex: 1, paddingHorizontal: 5 }]}>
                            <Icon
                                type={rightIcon?.type}
                                name={rightIcon?.name}
                                color={rightIcon?.color}
                                size={rightIcon?.size != null ? rightIcon?.size : 25}
                                onPress={rightIcon?.onPress}
                            />
                        </View>
                }
            </View>
            {
                error?.condition || error != null?
                <Animatable.Text animation={error?.animation} style={[{color: 'red'},error?.style]}>
                    {error?.message}
                </Animatable.Text>:null
            }
        </View>
    );
}
const styles = StyleSheet.create({
    setCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});