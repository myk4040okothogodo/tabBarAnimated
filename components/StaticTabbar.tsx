import * as React from 'react';
import {View, TouchableWithoutFeedback } from "react-native";
import {Feather as Icon } from "@expo/vector-icons";

interface Tab {
    name: string;

  }

interface StaticTabbarProps {
    tabs: Tab[];

  }

export default class StaticTabbar extends React.PureComponent<StaticTabbarProps>{
    render(){
         const { tabs } = this.props;
        return (
            <View style={style.container}>
                {
                    tabs.map((tab, index) => ())
                    <TouchableWithoutFeedback>
                        <View>
                            <Icon icon={25} {...{ name}}}>
                        </View>
                    </TouchableWithoutFeedback>

                }
            <View/>
        );
      }
  }



