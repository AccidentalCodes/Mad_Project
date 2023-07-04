import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const TextForm = () => {
  return (
    <SafeAreaView>
      <View className="items-center border m-2 rounded-lg">
        <Text className="m-2 font-medium text-2xl">Post Data</Text>
        <View className="m-2 items-start">
          <Text className="font-bold text-base m-2">Name :</Text>
          <TextInput
            className=" w-80  bg-white h-10 rounded-[26px] shadow-lg  p-5 "
            placeholder="Enter Name"
            onChangeText={e => setName(e)}
            value={name}
          />
        </View>
        <View className="m-2 items-start">
          <Text className="font-bold  text-base m-2">Roll :</Text>
          <TextInput
            className=" w-80 bg-white  h-10 rounded-[26px] shadow-lg  p-5 "
            placeholder="Enter Roll"
            onChangeText={e => setRoll(e)}
            value={roll}
          />
        </View>
        <View className="flex-row">
          <TouchableOpacity onPress={handleSubmit}>
            <View className="w-24 mt-4 mb-4 bg-[#000000]  items-center justify-center  h-10 rounded-[12px]">
              <Text className="text-white font-bold">Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUpdate} className="ml-3">
            <View className="w-24 mt-4 mb-4 bg-[#000000]  items-center justify-center  h-10 rounded-[12px]">
              <Text className="text-white font-bold">Update</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TextForm;
