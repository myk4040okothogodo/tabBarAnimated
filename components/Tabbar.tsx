import * as React from 'react';
import { View, Dimensions } from 'react-native';
import {Svg} from "expo";
import {SafeAreaView } from 'react-native-safe-area-context';

const {width} = Dimensions.get("window")
const height = 64;
const {Path} = Svg;



interface TabbarProps{}

export default class Tabbar extends React.PureComponent<TabbarProps>{
    render(){
        return (
            <>
               <Svg></Svg>
               <SafeAreaView>
            </>
        );


      }

  }
