// import { DarkTheme } from '@react-navigation/native';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { 
  Bars3Icon, 
  MagnifyingGlassIcon, 
  BellIcon 
} from "react-native-heroicons/outline";
import { BreakingNewsCard } from '@/components/BreakingNewsCard';
import { StrictMode } from 'react';

export default function HomeScreen() {
  return (
    <StrictMode>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar style="auto"/>

        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-3">
          <TouchableOpacity>
            <Bars3Icon size={24} color="#000000"/>
          </TouchableOpacity>
          
          <View className="flex-row gap-4">
            <TouchableOpacity>
              <MagnifyingGlassIcon size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <BellIcon size={24} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Breaking News Section */}
        <BreakingNewsCard category="Sports" source="CNN" title="Cycling" time="10:00" imageURL="https://cdn.pixabay.com/photo/2023/06/07/02/16/man-8046025_1280.jpg" />
        
      </SafeAreaView>
    </StrictMode>
  );
}
