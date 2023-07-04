import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios, {Axios} from 'axios';
import {Trash2, X} from 'react-native-feather';
import {Check} from 'react-native-feather';
import {Plus} from 'react-native-feather';
import {x} from 'react-native-feather';

const Json = () => {
  const [data, setData] = useState([]);
  const [id, setID] = useState();
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [render, setRender] = useState(0);
  // 👉 UseEffect for calling Api
  useEffect(() => {
    getapi();
  }, []);

  // --------  API CALL ----------

  // 👉 (GET Method) using Axios
  const getapi = async () => {
    try {
      const url = 'http://localhost:3030/user';
      const response = await axios.get(url);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // 👉 (POST Method) using Axios
  const handleSubmit = () => {
    const postData = {
      name: name,
      roll: roll,
      bool: false,
    };
    axios
      .post('http://localhost:3030/user', postData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    setModalVisible(false);
    setRender(render + 1);
  };

  // 👉 (PUT Method) using Axios
  const handleUpdate = () => {
    if (name == '' && roll == '') {
      Alert.alert('Please add value');
    }
    const updateData = {
      name: name,
      roll: roll,
    };
    axios
      .put(`http://localhost:3030/user/${id}`, updateData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    setModalVisible(false);
  };

  // 👉 (DELETE Method) using Axios
  function deleteData(id) {
    axios
      .delete(`http://localhost:3030/user/${id}`)
      .then(response => {
        console.log('Data deleted successfully');
      })
      .catch(error => {
        console.log('Error deleting data:', error);
      });
  }

  const Deletepopup = id => {
    Alert.alert('Confirm', 'Clear This?', [
      {
        text: 'Yes',
        onPress: () => deleteData(id),
      },
      {text: 'No'},
    ]);
  };

  const renderItem = ({item}) => (
    <>
      <View className="bg-white m-3 p-2 rounded-lg flex-row justify-between">
        <View className="">
          <Text
            className="font-bold text-1xl"
            style={{
              textDecorationLine: item.bool ? 'line-through' : 'none',
            }}>
            ID : {item.id}
          </Text>
          <Text
            className="font-bold text-1xl"
            style={{
              textDecorationLine: item.bool ? 'line-through' : 'none',
            }}>
            Name : {item.name}
          </Text>
          <Text
            className="font-bold text-1xl"
            style={{
              textDecorationLine: item.bool ? 'line-through' : 'none',
            }}>
            Roll : {item.roll}
          </Text>
        </View>
        <View className="flex-row">
          {item.bool ? (
            ''
          ) : (
            <View className="flex-row">
              <TouchableOpacity
                className="m-3"
                onPress={() => markTodoComplete(item?.id)}>
                <Check color={'green'} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleEdit(item)}>
                <View className="w-16 bg-[#ff3636]  items-center justify-center  h-10 rounded-[12px]">
                  <Text className="text-white font-bold">Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity onPress={() => Deletepopup(item.id)}>
            <View className="bg-white h-10 p-2 rounded-lg">
              <Trash2 color={'red'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  const handleEdit = item => {
    console.log(item);
    setName(item.name);
    setRoll(item.roll);
    setID(item.id);
    setModalVisible(true);
  };

  const markTodoComplete = id => {
    const nData = data.map(val => {
      if (id == val.id) {
        return {...val, bool: true};
      }
      return val;
    });
    console.log(nData, 'dsfdd');
    setData(nData);
    // setStrike({...strike, id: id, bool: true});
    // console.log(id, 'idsds');
  };

  const handleClose = () => {
    setModalVisible(false);
    setName('');
    setRoll('');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#2e93ff] ">
      <View className="flex items-center p-5">
        <Text className="font-bold text-3xl">Json Server</Text>
      </View>

      <View className="flex-row m-3 items-center justify-between">
        <View className="items-center">
          <Text className="m-2 font-medium text-2xl">Get Datas</Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View className="bg-[#fb0404] items-center p-4 rounded-[26px] h-14 w-14 shadow-lg">
            <Plus color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {data ? (
          <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}
      </ScrollView>
      <View className=" justify-center items-center ">
        <Modal visible={modalVisible} animationType="slide">
          <View className="flex-1 justify-center items-center bg-slate-400">
            <View className="w-96 h-72 bg-slate-200 rounded-[12px]">
              <View className="items-end m-2">
                <TouchableOpacity onPress={handleClose}>
                  <X color={'black'} />
                </TouchableOpacity>
              </View>

              <TextInput
                className="h-10 border border-green-800 m-4 rounded-[12px] p-3"
                placeholder="Name"
                onChangeText={e => setName(e)}
                value={name}></TextInput>
              <TextInput
                className="h-10 border border-green-800 m-4 rounded-[12px] p-3"
                placeholder="Roll"
                onChangeText={e => setRoll(e)}
                value={roll}></TextInput>
              <View className="flex-row justify-center items-center mt-4">
                <TouchableOpacity onPress={handleSubmit}>
                  <View className="w-24  mb-4 bg-[#000000]  items-center justify-center  h-10 rounded-[12px]">
                    <Text className="text-white font-bold">Submit</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="ml-3" onPress={handleUpdate}>
                  <View className="w-24  mb-4 bg-[#000000]  items-center justify-center  h-10 rounded-[12px]">
                    <Text className="text-white font-bold">Update</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* <View className="items-center border m-2 rounded-lg">
        <Text className="m-2 font-medium text-2xl">Post Data</Text>
        <View className="m-2 items-start">
          <Text className="font-bold text-base m-2">Name :</Text>
          <TextInput
            className=" w-80  bg-white h-10 rounded-[26px] shadow-lg  p-5 "
            placeholder="Enter Name"
            // onChangeText={e => setName(e)}
            value={name}
          />
        </View>
        <View className="m-2 items-start">
          <Text className="font-bold  text-base m-2">Roll :</Text>
          <TextInput
            className=" w-80 bg-white  h-10 rounded-[26px] shadow-lg  p-5 "
            placeholder="Enter Roll"
            // onChangeText={e => setRoll(e)}
            value={roll}
          />
        </View>
        <View className="flex-row">
          <TouchableOpacity>
            <View className="w-24 mt-4 mb-4 bg-[#000000]  items-center justify-center  h-10 rounded-[12px]">
              <Text className="text-white font-bold">Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="ml-3">
            <View className="w-24 mt-4 mb-4 bg-[#000000]  items-center justify-center  h-10 rounded-[12px]">
              <Text className="text-white font-bold">Update</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default Json;
