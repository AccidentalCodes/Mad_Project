import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Plus} from 'react-native-feather';

const Putdatascrn = () => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <View className=" justify-center items-center ">
        <Modal visible={modalVisible} animationType="slide">
          <View className="flex-1 justify-center items-center bg-slate-400">
            <View className="w-96 h-52 bg-slate-200 rounded-[12px]">
              <TextInput
                className="h-10 border border-green-800 m-4 rounded-[12px] p-3"
                placeholder="Name"></TextInput>
              <TextInput
                className="h-10 border border-green-800 m-4 rounded-[12px] p-3"
                placeholder="Roll"></TextInput>
              <View className="flex-row justify-center items-center">
                <TouchableOpacity>
                  <View className="w-24  mb-4 bg-[#000000]  items-center justify-center  h-10 rounded-[12px]">
                    <Text className="text-white font-bold">Submit</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="ml-3">
                  <View className="w-24  mb-4 bg-[#000000]  items-center justify-center  h-10 rounded-[12px]">
                    <Text className="text-white font-bold">Update</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View className="bg-white rounded-[12px] w-40 h-40"></View> */}
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View className="bg-[#fb0404] items-center p-4 rounded-[26px] h-14 w-14 shadow-lg">
            <Plus color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Putdatascrn;
