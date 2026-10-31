import React, {useEffect, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ScreenView, ListTile, SectionTitle, Appbar } from '../../../../components';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {Text, TouchableOpacity, Linking} from 'react-native';

//*Views
const Stack = createNativeStackNavigator();

const InformationAboutScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
        >
            <Stack.Screen name="Main" component={About} />
        </Stack.Navigator>
    )
}

const About = ({navigation}) => {
    const dispatch = useDispatch();

    return (
        <ScreenView   
            contentStyle={{
                paddingTop: 0
            }}
        >
            <SectionTitle style={{paddingBottom: 0}} subtitle="Thông tin liên hệ"/>
            <TouchableOpacity onPress={() => Linking.openURL("mailto:contact@nhattran.dev")}>
                <Text style={{
                    marginLeft: 24, 
                    marginTop: 20
                }}>Email: contact@nhattran.dev</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://nhattran.dev")}>
                <Text style={{
                    marginLeft: 24, 
                    marginTop: 20
                }}>Website: https://nhattran.dev</Text>
            </TouchableOpacity>
            <Text style={{marginLeft: 24, marginTop: 20}}>Địa chỉ liên hệ: Vietnam</Text>

            <SectionTitle style={{marginTop: 48, paddingBottom: 0}} subtitle="Thông tin ứng dụng"/>
            <Text style={{marginLeft: 24, marginTop: 20}}>Nhà phát triển: NHΛT TRΛN</Text>
            <Text style={{marginLeft: 24, marginTop: 20}}>Phiên bản ứng dụng: 1.1.9</Text>
            
            <SectionTitle style={{marginTop: 48, paddingBottom: 0}} subtitle="Điều khoản và Chính sách"/>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/nhatnice/znews/blob/main/privacy-policy.html")}>
                <Text style={{
                    marginLeft: 24, 
                    marginTop: 20,
                    fontWeight: '600'
                }}>Chính sách về quyền riêng tư</Text>
            </TouchableOpacity>
        </ScreenView>
    );
}

export default InformationAboutScreen;