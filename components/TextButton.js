import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native'
import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants'


const TextButtom = ({ label, customContainerStyle, customLabelStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.green,
                ...customContainerStyle
            }}
            onPress={onPress}
        >
            <Text style={{ color: COLORS.white, ...FONTS.h3, ...customLabelStyle }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TextButtom