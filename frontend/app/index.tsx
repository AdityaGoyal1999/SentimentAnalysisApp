import { StyleSheet, View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center px-4 py-3">
      <TouchableOpacity>
        <View className="w-8 h-8 justify-center">
          {/* Menu Icon */}
          {/* <Image 
            source={require('../../assets/icons/menu.png')}
            className="w-6 h-6"
          /> */}
          <Text>Menu</Text>
        </View>
      </TouchableOpacity>
        
        <View className="flex-row gap-4">
          <TouchableOpacity>
            {/* <Image 
              source={require('../../assets/icons/search.png')}
              className="w-6 h-6"
            /> */}
            <Text>Search</Text> 
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <Image 
              source={require('../../assets/icons/notification.png')}
              className="w-6 h-6"
            /> */}
            <Text>Notification</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Text>Hello world!</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
