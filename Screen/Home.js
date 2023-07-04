import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import * as Progress from 'react-native-progress';
import {Youtube} from 'react-native-feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import EntypoIcon from 'react-native-vector-icons/Entypo';

const Home = () => {
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    setInterval(() => {
      var time = moment().format('h:mm');
      var day = moment().format('dddd');
      setDate(time);
      setDay(day);
    }, 1000 * 1);
  });

  return (
    <SafeAreaView className="flex-1 relative bg-[#000000]">
      <ScrollView>
        <Image
          style={{width: 500, height: 500}}
          blurRadius={30}
          className=" absolute"
          source={require('../Img/gradient.jpeg')}
        />
        <View className=" relative flex-row m-4 justify-between p-3 items-center  ">
          <View className="relative">
            <Text className="text-3xl text-white  font-normal ">
              Hey, Sha!
            </Text>
            <Text className="text-2xl text-white  font-extralight ">
              Welcome Back
            </Text>
          </View>
          <View className="relative">
            <Image
              className="m-4 w-24 h-24 object-contain rounded-full "
              source={require('../Img/siya.png')}
            />
          </View>
        </View>
        <View className="flex items-center mb-5  ">
          <View className="bg-[#ffffff] flex-row justify-around items-center w-full h-52 rounded-[42px]">
            {/* <View className="bg-[#0549fe] ">{Time}</View> */}
            <View className="flex items-start">
              <Text className="m-2">Today {day},</Text>
              <Text className="m-1  text-7xl font-bold">{date}</Text>
            </View>

            <Text className="m-2">Your Message</Text>
          </View>
        </View>

        {/* <View className="flex mb-5">
          <View className=" flex-row justify-around items-center ">
            <View className=" justify-center  items-center w-20 h-20 rounded-full">
              <Image
                className=" w-16 h-16 object-contain rounded-full "
                source={require('../Img/Insta.png')}
              />
            </View>
            <View className="bg-[#f8fafc] justify-center items-center w-16 h-16 rounded-full">
              <Image
                className="w-16 h-16 object-contain rounded-full "
                source={require('../Img/Gmail1.png')}
              />
            </View>
            <View className="bg-[#f8fafc] justify-center items-center w-16 h-16 rounded-full">
              <Image
                className="w-16 h-16 object-contain rounded-full "
                source={require('../Img/link.png')}
              />
            </View>
            <View className="bg-[#f8fafc] justify-center items-center w-16 h-16 rounded-full">
              <Image
                className="w-16 h-16 object-cover rounded-full "
                source={require('../Img/twitter.png')}
              />
            </View>
          </View>
        </View> */}

        <View className="flex-row mb-5 w-full justify-around ">
          <View className=" flex-row bg-[#f8fafc] items-center w-52 h-60  rounded-[42px]">
            <View className="flex justify-center items-center">
              {/* <Text className="text-3xl text-black font-bold">24</Text> */}
            </View>
          </View>
          <TouchableOpacity className="bg-[#ffffff] flex-row  items-center w-52 h-60 rounded-[42px]">
            <View>
              <View className="flex items-center">
                <Image
                  className="w-44 h-24  m-4"
                  source={require('../Img/panel.png')}
                />
                <View className="ml-5 mb-3">
                  <Progress.Bar progress={0.6} width={150} />
                </View>
                <Text className="ml-5 text-1xl text-black font-semibold">
                  My Work
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
