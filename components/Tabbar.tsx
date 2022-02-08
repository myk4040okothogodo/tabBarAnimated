import * as React from 'react';
import {Dimensions, Animated,StyleSheet } from 'react-native';
import {Svg} from "expo";
import {SafeAreaView } from 'react-native-safe-area-context';
import * as shape from "d3-shape";

import StaticTabbar from "./StaticTabbar";

const tabs = [
            { name: "grid"},
            {name: "list"},
            {name: "refresh-cw"},
            {name: "box"},
            {name: "user"},
            ];

const {width} = Dimensions.get("window")
const tabWidth = width / tabs.length;
const height = 64;
const {Path} = Svg;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
// .curve(shape.curveBasis)
const left = shape.line()
    .x(d => d.x)
    .y(d => d.y)
    ([
        {x: 0, y:0},
        {x: width, y: 0},
    ]);

const tab = shape.line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
        {x: width, y:0},
        {x: width +5, y:0},
        {x: width + 10, y:10},
        {x: width + 15, y: height},
        {x: width + tabWidth - 15, y:height},
        {x: width + tabWidth - 10, y: 10},
        {x: width + tabWidth - 5, y: 0},
        {x: width + tabWidth, y:0},
        ]);

const right = shape.line()
    .x(d => d.x)
    .y(d => d.y)([
        {x: width + tabWidth, y: 0},
        {x: width * 2, y: 0},
        {x: width * 2, y: height},
        {x: 0, y: height},
        {x: 0, y: 0},
     )];
const d = `${left} ${tab} ${right}`;    


interface TabbarProps{}

export default class Tabbar extends React.PureComponent<TabbarProps>{
    render(){
        return (
            <>
              <View {...{ width, height}}>
               <AnimatedSvg  width={width * 2}{...{ height }}>
                   <Path {...{ d }} fill="blue" />
               </AnimatedSvg>
                <View style={StyleSheet.absoluteFill}>
                 <StaticTabbar  {...{tabs}} />
               </View>
               </View>
               <SafeAreaView style={styles.safeArea} />
            </>
        );


      }

  }
