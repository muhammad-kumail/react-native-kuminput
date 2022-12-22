import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Icon } from 'react-native-elements';

export default function KumInput({ placeholder, secureTextEntry, keyboardType, maxLength, inputStyle, style, rightIconType, rightIconName, rightIconColor, rightIconSize, leftIconType, leftIconName, leftIconColor, leftIconSize, borderColorOnFocus, borderColorOnBlur, onFocus, onBlur, onPressRightIcon, onPressLeftIcon, onChangeText, onEndEditing, placeholderTextColor, value, defaultValue, onSubmitEditing }) {
    const [bColor, setBColor] = useState(borderColorOnBlur != null ? borderColorOnBlur : 'black')
    // console.log("This is react-native-kuminput npm package");
    return (
        <View style={[{ borderColor: bColor, flexDirection: 'row' }, style]}>
            {
                leftIconName == null ? null :
                    <View style={[styles.setCenter, { flex: 1, paddingHorizontal: 5 }]}>
                        <Icon
                            type={leftIconType}
                            name={leftIconName}
                            color={leftIconColor}
                            size={leftIconSize != null ? leftIconSize : 25}
                            onPress={onPressLeftIcon}
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
                    defaultValue={defaultValue}
                    onChangeText={onChangeText}
                    onEndEditing={onEndEditing}
                    onSubmitEditing={onSubmitEditing}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    onFocus={() => { setBColor(borderColorOnFocus != null ? borderColorOnFocus : 'black'); onFocus }}
                    onBlur={() => { setBColor(borderColorOnBlur != null ? borderColorOnBlur : 'black'); onBlur }}
                />
            </View>
            {
                rightIconName == null ? null :
                    <View style={[styles.setCenter, { flex: 1, paddingHorizontal: 5 }]}>
                        <Icon
                            type={rightIconType}
                            name={rightIconName}
                            color={rightIconColor}
                            size={rightIconSize != null ? rightIconSize : 25}
                            onPress={onPressRightIcon}
                        />
                    </View>
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