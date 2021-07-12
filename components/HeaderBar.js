import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants'

const HeaderBar = ({ right }) => {

    const nagivation = useNavigation()

    return (
        <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', marginTop: SIZES.base }}>
            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => nagivation.goBack()}
                >
                    <Image
                        source={icons.back_arrow}
                        resizeMode="contain"
                        style={{ width: 25, height: 25, tintColor: COLORS.gray }}
                    />
                    <Text style={{ marginLeft: SIZES.base, ...FONTS.h2 }}>Back</Text>
                </TouchableOpacity>
            </View>

            {right &&
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => nagivation.goBack()}
                    >
                        <Image
                            source={icons.star}
                            resizeMode="contain"
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default HeaderBar